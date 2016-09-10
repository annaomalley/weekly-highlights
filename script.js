var highlightArray = [];
var count = 0;

 window.onkeypress = function(event) {
 	if (event.keyCode == 115 || event.keyCode == 83) {


		var sel = window.getSelection().toString();
		
		if(sel.length) {
			chrome.storage.sync.get({storedLines: []}, function(result) {
				var storedLines = result.storedLines;

				storedLines.push({sel: sel, HasBeenUploadedYet: false});
	        	chrome.storage.sync.set({storedLines: storedLines}, function () {
        			// you can use strings instead of objects
        			// if you don't  want to define default values
        			// chrome.storage.sync.get('storedLines', function (result) {
           //  			console.log(result.storedLines)
        			// });
    			});

    		});

	    };

	    };
	
};

