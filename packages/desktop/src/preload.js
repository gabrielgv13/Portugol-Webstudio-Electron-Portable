import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("portugolDesktop", {
  platform: process.platform,
  isDesktop: true,
  openFile: () => ipcRenderer.invoke("dialog:openFile"),
  saveFile: options => ipcRenderer.invoke("dialog:saveFile", options),
  writeFile: (filePath, data, isBinary) => ipcRenderer.invoke("file:write", filePath, data, isBinary),
  onFileOpened: callback => ipcRenderer.on("file:opened", (_e, filePath, contents) => callback(filePath, contents)),
  onCmdSave: callback => ipcRenderer.on("cmd:save", callback),
  onCmdOpen: callback => ipcRenderer.on("cmd:open", callback),
});
