// Add bubble to the top of the page.
var bubbleDOMdiv = document.createElement('div');
bubbleDOMdiv.setAttribute('class', 'popup');
var bubbleDOMspan = document.createElement('span');
bubbleDOMspan.setAttribute('class', 'popuptext');
bubbleDOMspan.setAttribute('id', 'myPopup');
bubbleDOMspan.innerHTML = 'hellooooo';
bubbleDOMdiv.appendChild(bubbleDOMspan);
document.body.appendChild(bubbleDOMdiv);

alert(0);

// Lets listen to mouseup DOM events.
document.addEventListener('mouseup', function (e) {
  var selection = window.getSelection().toString();
  if (selection.length > 0) {
    renderBubble();
  }
}, false);


// Close the bubble when we click on the screen.
//document.addEventListener('mousedown', function (e) {
//  bubbleDOM.style.visibility = 'hidden';
//}, false);

// Move that bubble to the appropriate location.
function renderBubble() {
	var popup = document.getElementById('myPopup');
	popup.classList.toggle('show');
};

function myFunction() {
	alert(0);
};
