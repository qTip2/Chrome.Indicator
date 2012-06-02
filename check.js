var present = document.querySelectorAll('[oldtitle], .qtip.ui-tooltip').length, details;

details = {
	'state': !!present,
	'url': present ? document.location.toString() : false
};

// Send a message telling extension to update icon and title
chrome.extension.sendRequest({ update: details }, function(){});