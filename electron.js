const { app, BrowserWindow } = require('electron')


function createWindow () {
	// Create the browser window.
	let win = new BrowserWindow({
		fullscreen: true,
		webPreferences: {
			nodeIntegration: true
		}
	})

	// and load the Vue.js app hosted by webpack.
	win.loadURL('http://localhost:8080/')
}

app.on('ready', () => {
	setTimeout(createWindow, 3000);
})

