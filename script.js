document.addEventListener('mouseup',function(event)
{
	var sel = window.getSelection().toString();

    if(sel.length) {
        chrome.storage.sync.set({'value': sel}, function() {
        	console.log('saved');
        });
		chrome.storage.sync.get('value', function(sel2) {
			console.log(sel2.value);
		});
        
        //chrome.extension.sendRequest({'message':'setText','data': sel},function(response){})
    }

})

