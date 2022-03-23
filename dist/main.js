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


function paintBox() {
	checkbox = document.getElementById('checkbox').checked; 
  if (checkbox === true){
    sdk.setContent('<table style="color:pink;"><tr><td>test</td></tr></table>');
  }else{
    sdk.setContent('');
  }
  
  sdk.setData({
    checkbox: checkbox
  });  
}

sdk.getData(function (data) {
	checkbox = data.checkbox;
	paintBox();
});

document.getElementById('workspace').addEventListener("input", function () {
	debounce(paintBox, 500)();
});

// update the preview
$("#preview").change(function() { // keyup()
    preview_html = $(this).val();
    updateContent();
});

