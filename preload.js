// 通信
const { ipcRenderer } = require('electron');

window.exports = {
  bq: {
    mode: "none",
    args: {
      enter: () => {
        const ubWindow = utools.createBrowserWindow("index.html", {
          width: 225,
          height: 300,
          alwaysOnTop: false,
          transparent: true,
          frame: false,
          resizable: true,
          movable: true,
          backgroundColor: "#00000000",
          webPreferences: {
            devTools: true,
            preload: "preload.js",
          },
        }, () => {
          ubWindow.webContents.openDevTools({ mode: 'detach' });
        });
      },
    },
  },
};

window.services = {
  pushEvent: (type, e) => {
    ipcRenderer.send(type, e);
  }
}
