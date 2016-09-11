var el = document.getElementById('list')
if (el) {
	el.addEventListener('click', function() {
		console.log('in here');
		chrome.tabs.create({ 'url': 'chrome-extension://' + chrome.runtime.id + '/options.html'});
	});
};