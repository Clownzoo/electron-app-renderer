const {
	remote,
	ipcRenderer,
} = window.require('electron');
class ElectronTools {
	constructor() {
		this.version = remote.app.getVersion();
	}

	openWindow(payload) {
		ipcRenderer.send('OPEN_WINDOW', payload);
	}
}
const electronTools = new ElectronTools();
window.tools = electronTools;
export default electronTools;