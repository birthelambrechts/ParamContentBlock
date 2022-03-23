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
    sdk.setContent('<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"style="font-size: 13px; line-height:22px; font-family: Arial, Helvetica, sans-serif;  font-weight:400; width: 100% !important;"><tr class="marginMobileLandR" style="height:40px; width:100%; background-color:#EDEDED;"><!-- Temporarily hide Giftcard text from USP --><td class="mobile-width" style="width:140px;" width="140" height="40">&nbsp;</td><!--<td class="mobile-width" style="width:11px;" width="11" height="40">&nbsp;</td> --><td style="width:30px; font-size: 2px; line-height: 30px; margin: 0; padding:0px; vertical-align:middle; height:40px;" align="left" width="30" height="40"><img src="https://image.msg.inno.be/lib/fe3e11717564047f761575/m/1/b0719ecc-9c85-4782-97cc-6cb3fdfba086.png" alt="clothes tag" style="font-size:0; padding:0px !important; vertical-align:middle; width: 20px;" width="20" height="" align="left" /></td><td style="margin: 0; padding:0px; width:154px; overflow: hidden; white-space: nowrap; text-align: left; height:40px; line-height:14px;" width="154" height="40">Meer dan 200 top merken</td><td class="mobile-hidden" style="width:64px;" width="64" height="40" valign="middle" align="center"><p style="background: #AFAFAF; border-radius: 50%; width: 8px; height: 8px; margin: 0; padding:0px;"></p></td><td class="mobile-hidden" style="width:30px; font-size: 2px; line-height: 30px; margin: 0; padding:0px; vertical-align:middle; height:40px;" align="left" width="30" height="40"><img src="https://image.msg.inno.be/lib/fe3e11717564047f761575/m/1/de6309fe-f6c1-46c5-b442-58b5a1574107.png" alt="loyalty card" style="font-size:0; padding:0px !important; vertical-align:middle; width: 20px;" width="20" height="" align="left" /></td><td class="mobile-hidden" style="margin: 0; padding:0px; width:122px; overflow: hidden; white-space: nowrap; text-align: left; height:40px; line-height:14px;" width="122" height="40">Spaar loyalty punten</td><!-- Temporarily hide Giftcard text from USP --><!--<td class="mobile-hidden" style="width:64px;" width="64" height="40" valign="middle" align="center"><p style="background: #AFAFAF; border-radius: 50%; width: 8px; height: 8px; margin: 0; padding:0px;"></p></td><td class="mobile-hidden"style="width:30px; font-size: 2px; line-height: 30px; margin: 0; padding:0px; vertical-align:middle; height:40px;"align="left" width="30" height="40"><img src="https://image.msg.inno.be/lib/fe3e11717564047f761575/m/1/439bdb87-3731-4340-ac63-f15f651bc9bf.png"alt="giftcard"style="font-size:0; padding:0px !important; vertical-align:middle; width: 20px;"width="20" height="" align="left" /></td><td class="mobile-hidden"style="margin: 0; padding:0px; width:164px; overflow: hidden; white-space: nowrap; text-align: left; height:40px; line-height:14px;" width="164" height="40">Betaal met je INNO giftcard</td>--><td class="mobile-width" style="width:140px;" width="140" height="40">&nbsp;</td><!--<td class="mobile-width" style="width:11px;" width="11" height="40">&nbsp;</td> --></tr></table>');
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

