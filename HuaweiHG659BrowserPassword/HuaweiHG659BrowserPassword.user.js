// ==UserScript==
// @name         HUAWEI Home Gateway HG659 Browser Password
// @namespace    com.github.maxvalue.greasemonkey.huaweiHG659browserpassword
// @version      1.0
// @updateURL    https://raw.githubusercontent.com/MaxValue/Greasemonkey/master/HuaweiHG659BrowserPassword/HuaweiHG659BrowserPassword.meta.js
// @downloadURL  https://raw.githubusercontent.com/MaxValue/Greasemonkey/master/HuaweiHG659BrowserPassword/HuaweiHG659BrowserPassword.user.js
// @description  Makes the browser able to autocomplete the login password
// @author       Max Fuxjäger
// @include      /^http://192.168.1.1/?$/
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
        document.getElementById("password").setAttribute("autocomplete", "on");
	document.getElementById("password").setAttribute("onpaste", "");
	document.getElementById("password").setAttribute("onkeydown", "");
	document.getElementById("password").setAttribute("oncontextmenu", "");
})();
