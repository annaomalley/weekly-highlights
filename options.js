chrome.storage.sync.get({storedLines: []}, function(result) {
	var storedLines = result.storedLines;
    var temp = '';
    for(var i = 0; i<storedLines.length; i++) {
        var current = storedLines[i];
        temp += "<h3>" + current.url + "</h3>" + "<h4>" + current.title + 
            "</h4>" + "<h5>" + current.selection + "</h5>";
        console.log(storedLines[i].url);
    }
    var el = document.getElementById('highlights');
    if (el) {
        el.innerHTML = temp;
    };
});
