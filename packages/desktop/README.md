# @portugol-webstudio/desktop

This package hosts the portable desktop shell for Portugol Webstudio.

It starts a local loopback server and opens the Angular build from a secure local origin, which keeps the app usable in locked-down environments without disabling browser security features.

## Planned flow

1. Build the Angular app into `packages/ide/dist-desktop`.
2. Start the desktop shell.
3. Load the app from `http://127.0.0.1` inside Electron.

## Build portable `.exe`

From the repository root:

```powershell
npm run package:portable
```

The generated artifact is written under:

- `packages/desktop/dist/Portugol-Webstudio-<version>-portable.exe`

For a faster unpacked validation build (no final single-file exe):

```powershell
npm run package:portable:dir
```
