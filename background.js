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

		// If we found qTip2, report it to the mothership
		if(data.url) {
			var xhr = new XMLHttpRequest();
			xhr.open("POST", "http://craigsworks.com/projects/qtip2/foundit", true);
			xhr.send( data.url );
		}
	}

	// Return nothing to let the connection be cleaned up.
	sendResponse({});
});