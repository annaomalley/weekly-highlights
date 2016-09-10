var highlightArray = [];
var count = 0

document.addEventListener('mouseup',function(event)
{
	var sel = window.getSelection().toString();
	
	if(sel.length) {
        chrome.storage.sync.set({'value': sel}, function() {
        	console.log('Saved')
    	});


        chrome.storage.sync.get(['value'], function(result) {
			highlightArray.unshift(result);
			count++;
			var newLine = highlightArray[0];
			window.console.log(newLine);
			
			for (i = 0; i < count; i++) {
				window.console.log(highlightArray[i]);	
			}
			
		});
        
        //chrome.extension.sendRequest({'message':'setText','data': sel},function(response){})
    }

})

