// ==UserScript==
// @name         UPC Connect Box Browser Password
// @namespace    com.github.maxvalue.greasemonkey.upcconnectboxpassword
// @version      1.0
// @updateURL   https://raw.githubusercontent.com/MaxValue/Greasemonkey/master/UPCConnectBoxBrowserPassword/UPCConnectBoxBrowserPassword.meta.js
// @downloadURL https://raw.githubusercontent.com/MaxValue/Greasemonkey/master/UPCConnectBoxBrowserPassword/UPCConnectBoxBrowserPassword.user.js
// @description  Makes the browser able to autocomplete the login password
// @author       Max Fuxjäger
// @include     /^http://192.168.0.1/common_page/login.html.*$/
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
	document.getElementById("loginPassword").type = "password";
	document.getElementById("c_42").className = "button_main dynamicValue";
	document.getElementById("c_42").disabled = false;
})();
