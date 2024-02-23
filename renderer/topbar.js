const { ipcRenderer } = require("electron");

// This function will be called when the "Close" button is clicked
function closeWindow() {
  ipcRenderer.send("close-window");
}

// This function will be called when the "Minimize" button is clicked
function minimizeWindow() {
  ipcRenderer.send("minimize-window");
}

// This function will be called when the "Maximize/Restore" button is clicked
function maximizeRestoreWindow() {
  ipcRenderer.send("maximize-restore-window");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("close-btn").addEventListener("click", closeWindow);
  document.getElementById("min-btn").addEventListener("click", minimizeWindow);
  document
    .getElementById("max-btn")
    .addEventListener("click", maximizeRestoreWindow);
});
