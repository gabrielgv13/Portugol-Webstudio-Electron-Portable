import { app, BrowserWindow, dialog, Menu, ipcMain } from "electron";
import { createServer } from "node:http";
import { constants, createReadStream } from "node:fs";
import { access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..", "..", "..");
let mainWindow;

// Single-instance lock: avoid doing expensive startup work in a second instance.
const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  // When another instance exists, show a short dialog and exit early.
  app.whenReady().then(() => {
    try {
      dialog.showMessageBoxSync({
        type: "warning",
        buttons: ["OK"],
        defaultId: 0,
        title: "Portugol Webstudio",
        message: "Outra instância já está em execução",
        detail:
          "Já existe uma instância do Portugol Webstudio em execução. Esta instância será encerrada.",
      });
    } catch (err) {
      // If showing a GUI dialog fails for some reason, at least exit cleanly.
      console.warn("Could not show single-instance dialog:", err);
    }

    // Quit the second instance immediately to avoid expensive initialization.
    app.quit();
  });
}

const packagedRoots = [
  path.resolve(process.resourcesPath, "app-dist"),
  path.resolve(process.resourcesPath, "app-dist/browser"),
];

const developmentRoots = [
  path.resolve(projectRoot, "packages/ide/dist-desktop"),
  path.resolve(projectRoot, "packages/ide/dist-desktop/browser"),
  path.resolve(projectRoot, "packages/ide/dist"),
  path.resolve(projectRoot, "packages/ide/dist/browser"),
];

const candidateRoots = [
  process.env.PORTUGOL_WEBSTUDIO_DIST,
  ...(app.isPackaged ? packagedRoots : developmentRoots),
].filter(Boolean);

const mimeTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".map", "application/json; charset=utf-8"],
  [".mjs", "text/javascript; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
]);

async function pathExists(filePath) {
  try {
    await access(filePath, constants.R_OK);
    return true;
  } catch {
    return false;
  }
}

async function resolveAppRoot() {
  for (const candidateRoot of candidateRoots) {
    if (!candidateRoot) {
      continue;
    }

    const indexPath = path.join(candidateRoot, "index.html");
    if (await pathExists(indexPath)) {
      console.log("Resolved app root to:", candidateRoot);
      return candidateRoot;
    }
  }

  throw new Error(`Unable to locate a built Angular app. Tried: ${candidateRoots.join(", ")}`);
}

function contentTypeFor(filePath) {
  return mimeTypes.get(path.extname(filePath).toLowerCase()) || "application/octet-stream";
}

async function createStaticServer(rootDir) {
  const server = createServer(async (request, response) => {
    if (!request.url) {
      response.statusCode = 400;
      response.end("Bad request");
      return;
    }

    const url = new URL(request.url, "http://127.0.0.1");
    const pathname = decodeURIComponent(url.pathname);
    const requestedPath = pathname === "/" ? "index.html" : pathname.slice(1);
    const safePath = path.normalize(requestedPath).replace(/^([.]{2}[\\/])+/g, "");
    const absolutePath = path.resolve(rootDir, safePath);
    const isInsideRoot = absolutePath === rootDir || absolutePath.startsWith(`${rootDir}${path.sep}`);

    if (!isInsideRoot) {
      response.statusCode = 403;
      response.end("Forbidden");
      return;
    }

    const filePath = (await pathExists(absolutePath)) ? absolutePath : path.join(rootDir, "index.html");

    if (!(await pathExists(filePath))) {
      response.statusCode = 404;
      response.end("Not found");
      return;
    }

    response.statusCode = 200;
    response.setHeader("Content-Type", contentTypeFor(filePath));
    createReadStream(filePath).pipe(response);
  });

  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => resolve(undefined));
  });

  const address = server.address();

  if (!address || typeof address === "string") {
    server.close();
    throw new Error("Unable to start the desktop web server.");
  }

  return { server, port: address.port };
}

async function createWindow() {
  console.time("createWindow");
  console.time("resolveAppRoot");
  const appRoot = await resolveAppRoot();
  console.timeEnd("resolveAppRoot");
  console.time("createStaticServer");
  const { server, port } = await createStaticServer(appRoot);
  console.timeEnd("createStaticServer");
  mainWindow = new BrowserWindow({
    width: 1366,
    height: 900,
    backgroundColor: "#0f1115",
    show: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.once("ready-to-show", () => {
    mainWindow?.show();
  });

  mainWindow.on("closed", () => {
    mainWindow = undefined;
    server.close();
  });

  await mainWindow.loadURL(`http://127.0.0.1:${port}`);
  console.timeEnd("createWindow");
}

app.commandLine.appendSwitch("enable-features", "PlatformHEVCDecoderSupport");
app.setAppUserModelId("dgadelha.PortugolWebstudio");

if (gotLock) {
  // If a second instance is launched, focus the existing window.
  app.on("second-instance", () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  app.whenReady().then(() => {
    console.time("startup");
    console.log("App is packaged:", app.isPackaged);
    console.log("Resources path:", process.resourcesPath);
    console.log("Candidate roots:", candidateRoots.map(r => r + (r ? " (exists: checking...)" : " (undefined)")));
    createWindow()
      .then(() => {
        console.timeEnd("startup");
        // install application menu after creating the window
        const template = [
          {
            label: "File",
            submenu: [
              {
                label: "Open...",
                accelerator: "Ctrl+O",
                click: () => {
                  if (mainWindow) mainWindow.webContents.send("cmd:open");
                },
              },
              {
                label: "Save",
                accelerator: "Ctrl+S",
                click: () => {
                  if (mainWindow) mainWindow.webContents.send("cmd:save");
                },
              },
              { type: "separator" },
              { role: "quit" },
            ],
          },
          { role: "help", submenu: [{ label: "About", click: () => { if (mainWindow) mainWindow.webContents.send("cmd:about"); } }] },
        ];

        const menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(menu);
      })
      .catch(error => {
        dialog.showErrorBox("Portugol Webstudio", error instanceof Error ? error.message : String(error));
        app.quit();
      });
  });
} else {
  // If we don't have the lock, the early quit/dialog was already scheduled above.
}

  // IPC handlers for dialogs and file operations
  ipcMain.handle("dialog:openFile", async () => {
    if (!mainWindow) return null;

    const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow, {
      properties: ["openFile"],
      filters: [{ name: "Portugol files", extensions: ["por", "txt"] }, { name: "All Files", extensions: ["*"] }],
    });

    if (canceled || !filePaths || filePaths.length === 0) return null;

    try {
      const contents = await (await import("node:fs/promises")).readFile(filePaths[0], { encoding: "utf8" });
      return { filePath: filePaths[0], contents };
    } catch (err) {
      console.error(err);
      return null;
    }
  });

  ipcMain.handle("dialog:saveFile", async (_e, options) => {
    if (!mainWindow) return null;

    const { canceled, filePath } = await dialog.showSaveDialog(mainWindow, {
      defaultPath: options?.suggestedName,
      filters: [{ name: "Portugol files", extensions: ["por"] }],
    });

    if (canceled || !filePath) return null;

    return filePath;
  });

  ipcMain.handle("file:write", async (_e, filePath, data, isBinary) => {
    try {
      const fs = await import("node:fs/promises");

      if (isBinary) {
        // data is expected to be a Uint8Array
        await fs.writeFile(filePath, Buffer.from(data));
      } else {
        await fs.writeFile(filePath, data, { encoding: "utf8" });
      }

      return { ok: true };
    } catch (err) {
      console.error(err);
      return { ok: false, error: String(err) };
    }
  });


app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", async () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    await createWindow();
  }
});
