// ==UserScript==
// @name        QR Code Call
// @namespace   com.github.maxvalue.greasemonkey.qrcodecall
// @description Replaces click action on phone number links to display the number as QR Code. Clicking on the code removes it.
// @include     *
// @require     https://code.jquery.com/jquery-3.1.1.min.js
// @require     https://cdn.rawgit.com/jeromeetienne/jquery-qrcode/7bb4e3df/jquery.qrcode.min.js
// @version     1.0
// @author      Max Fuxjäger
// @run-at      document-idle
// ==/UserScript==
(function() {
    'use strict';
	/*
	$("body").eq(0).append(
		$("<menu type='context' id='qrcodecall'><menuitem onclick='displayQRCode()'>Display QR-Code</menuitem><hr></menu>")
	);
	https://cdn.rawgit.com/davidshimjs/qrcodejs/04f46c6a/qrcode.min.js
	*/

	function displayQRCode(e) {
	}
	var phone_numbers = $("a[href^='tel:']");
	phone_numbers.click(function(e){
		e.preventDefault();
		var height = $(window).height();
		var width = $(window).width();
		if (height < width) {
			var size = height*0.7;
		} else {
			var size = width*0.7;
		}
		console.log("appending qrcode");
		$("body").eq(0).prepend($("<center style='z-index:2147483647;'><div id='qrcodecall'></div></center>")
							   .click(function(e){
			                                        $("#qrcodecall").remove();
			                                        console.log("qrcode was removed");
		                                          })
							  );
		console.log("target is "+e.target);
		//davidshim version
		/*
		new QRCode(document.getElementById("qrcodecall"),{
			text: ""+e.target,
			width   : size,
			height  : size,
			colorDark : "#000000",
			colorLight : "#ffffff",
			correctLevel : QRCode.CorrectLevel.H
		});
		*/
		//jeromeetienne version
		$("#qrcodecall").qrcode({
			text:""+e.target,
			width   : size,
			height  : size,
		});
		console.log("qrcode was made");
		return false;
	});
	$("body").mouseup(function(e){

	});
})();
