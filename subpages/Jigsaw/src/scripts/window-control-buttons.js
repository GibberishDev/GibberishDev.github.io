const win = require('electron').remote.getCurrentWindow();
const closeButton = document.getElementById('close')
const minimizeButton = document.getElementById('minimize')
const maximizeButton = document.getElementById('maximize')

let isMaximized = false;

closeButton.addEventListener('click', () => win.close());
minimizeButton.addEventListener('click', () => win.minimize());
maximizeButton.addEventListener('click', () => {
    isMaximized = !isMaximized;
    isMaximized ? win.unmaximize() : win.maximize();
});