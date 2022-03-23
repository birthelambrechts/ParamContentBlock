// var BlockSDK = require('blocksdk');
// var sdk = new BlockSDK();
var sdk = new window.sfdc.BlockSDK();

var checkbox;

function debounce (func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

function paintMap() {
	checkbox = document.getElementById('checkbox').value; 
  sdk.setContent('<div>test</div>');
  sdk.setData({
    checkbox: checkbox
  });  
}


sdk.getData(function (data) {
	checkbox = data.checkbox || false;
	paintMap();
});


// update the preview
$("#preview").change(function() { // keyup()
    preview_html = $(this).val();
    updateContent();
});

