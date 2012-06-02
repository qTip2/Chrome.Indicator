var selectedId = null;
chrome.tabs.onSelectionChanged.addListener(function(tabId, info) {
	selectedId = tabId;
});

// Handle extension content-script requests
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	var data = request.update;

	// Check if it is an update command
	if(data) {
		// Set the details
		chrome.pageAction[ data.state ? 'show' : 'hide'](selectedId);
	}

	// Return nothing to let the connection be cleaned up.
	sendResponse({});
});