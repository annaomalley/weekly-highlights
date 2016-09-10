 window.onkeypress = function(event) {
 	if (event.keyCode == 115 || event.keyCode == 83) {


		var sel = window.getSelection().toString();

		if(sel.length) {
			var url = window.location.href;
			var title = window.document.title;
			console.log(url); 
			chrome.storage.sync.get({storedLines: []}, function(result) {
				var storedLines = result.storedLines;

				storedLines.push({selection: sel, url, title});
	        	chrome.storage.sync.set({storedLines: storedLines}, function () {
        			// you can use strings instead of objects
        			// if you don't  want to define default values
        			chrome.storage.sync.get('storedLines', function (result) {
           			console.log(result.storedLines)
        			});
    			});

    		});

	    };

	    };
	
};

