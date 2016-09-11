document.getElementById('list').addEventListener('click', function() {
	console.log('in here');
	chrome.tabs.create({ 'url': 'chrome-extension://' + chrome.runtime.id + '/options.html'});
});