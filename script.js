var selection = '';
var penultimateSelection = '';

$.notify.addStyle('saveButtonStyle', {
  html: "<div id='saveButton'>\n<span data-notify-text/></span>\n</div>",
  classes: {
    base: {
				"font-weight": "bold",
				"padding": "8px 15px 8px 14px",
				"text-shadow": "0 1px 0 rgba(255, 255, 255, 0.5)",
				"background-color": "#fcf8e3",
				"border": "1px solid #fbeed5",
				"border-radius": "4px",
				"white-space": "nowrap",
				"padding-left": "25px",
				"background-repeat": "no-repeat",
				"background-position": "3px 7px",
				"color": "#3A87AD",
				"background-color": "#D9EDF7",
				"border-color": "#BCE8F1",
				"background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QYFAhkSsdes/QAAA8dJREFUOMvVlGtMW2UYx//POaWHXg6lLaW0ypAtw1UCgbniNOLcVOLmAjHZolOYlxmTGXVZdAnRfXQm+7SoU4mXaOaiZsEpC9FkiQs6Z6bdCnNYruM6KNBw6YWewzl9z+sHImEWv+vz7XmT95f/+3/+7wP814v+efDOV3/SoX3lHAA+6ODeUFfMfjOWMADgdk+eEKz0pF7aQdMAcOKLLjrcVMVX3xdWN29/GhYP7SvnP0cWfS8caSkfHZsPE9Fgnt02JNutQ0QYHB2dDz9/pKX8QjjuO9xUxd/66HdxTeCHZ3rojQObGQBcuNjfplkD3b19Y/6MrimSaKgSMmpGU5WevmE/swa6Oy73tQHA0Rdr2Mmv/6A1n9w9suQ7097Z9lM4FlTgTDrzZTu4StXVfpiI48rVcUDM5cmEksrFnHxfpTtU/3BFQzCQF/2bYVoNbH7zmItbSoMj40JSzmMyX5qDvriA7QdrIIpA+3cdsMpu0nXI8cV0MtKXCPZev+gCEM1S2NHPvWfP/hL+7FSr3+0p5RBEyhEN5JCKYr8XnASMT0xBNyzQGQeI8fjsGD39RMPk7se2bd5ZtTyoFYXftF6y37gx7NeUtJJOTFlAHDZLDuILU3j3+H5oOrD3yWbIztugaAzgnBKJuBLpGfQrS8wO4FZgV+c1IxaLgWVU0tMLEETCos4xMzEIv9cJXQcyagIwigDGwJgOAtHAwAhisQUjy0ORGERiELgG4iakkzo4MYAxcM5hAMi1WWG1yYCJIcMUaBkVRLdGeSU2995TLWzcUAzONJ7J6FBVBYIggMzmFbvdBV44Corg8vjhzC+EJEl8U1kJtgYrhCzgc/vvTwXKSib1paRFVRVORDAJAsw5FuTaJEhWM2SHB3mOAlhkNxwuLzeJsGwqWzf5TFNdKgtY5qHp6ZFf67Y/sAVadCaVY5YACDDb3Oi4NIjLnWMw2QthCBIsVhsUTU9tvXsjeq9+X1d75/KEs4LNOfcdf/+HthMnvwxOD0wmHaXr7ZItn2wuH2SnBzbZAbPJwpPx+VQuzcm7dgRCB57a1uBzUDRL4bfnI0RE0eaXd9W89mpjqHZnUI5Hh2l2dkZZUhOqpi2qSmpOmZ64Tuu9qlz/SEXo6MEHa3wOip46F1n7633eekV8ds8Wxjn37Wl63VVa+ej5oeEZ/82ZBETJjpJ1Rbij2D3Z/1trXUvLsblCK0XfOx0SX2kMsn9dX+d+7Kf6h8o4AIykuffjT8L20LU+w4AZd5VvEPY+XpWqLV327HR7DzXuDnD8r+ovkBehJ8i+y8YAAAAASUVORK5CYII=)"

    }

  }
});

document.addEventListener('mousedown', function (e)  {
	console.log('event triggered...');
	$('.notifyjs-saveButtonStyle-base').trigger('notify-hide');
}, false);



document.addEventListener('mouseup', function (e) {
  var click = window.getSelection().toString();
  console.log('mouseup: ' + click);
  if (click.length > 0 && click!= selection && click!=penultimateSelection) {
  	penultimateSelection = selection;
  	selection = click;
    $.notify('Save to Weekly Highlights', {
  		style: 'saveButtonStyle'
	});
  }
  else {
  	penultimateSelection = selection;
  	selection = '';
  }
}, false);

//  window.onkeypress = function(event) {
//  	if (event.keyCode == 115 || event.keyCode == 83) {


// 		var sel = window.getSelection().toString();

// 		if(sel.length) {
// 			var url = window.location.href;
// 			var title = window.document.title;
// 			console.log(url); 
// 			chrome.storage.sync.get({storedLines: []}, function(result) {
// 				var storedLines = result.storedLines;

// 				storedLines.push({selection: sel, url, title});
// 	        	chrome.storage.sync.set({storedLines: storedLines}, function () {
//         			// you can use strings instead of objects
//         			// if you don't  want to define default values
//         			chrome.storage.sync.get('storedLines', function (result) {
//            			console.log(result.storedLines)
//         			});
//     			});

//     		});

// 	    };

// 	    };
	
// };

$(document).on('click', '.notifyjs-saveButtonStyle-base', function() {
	saveSelection(selection);
});


function saveSelection(sel) {
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
	$.notify("Success!", "success");

};

