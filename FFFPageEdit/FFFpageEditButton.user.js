// ==UserScript==
// @name         FFF AT Edit Button
// @namespace    com.maxvalue.kirby.edit.fff
// @description  Adds an edit button to the website itself
// @version      1.0
// @updateURL    https://raw.githubusercontent.com/MaxValue/Greasemonkey/master/FFFPageEdit/FFFpageEditButton.meta.js
// @downloadURL  https://raw.githubusercontent.com/MaxValue/Greasemonkey/master/FFFPageEdit/FFFpageEditButton.user.js
// @author       Max Fuxjäger
// @include      https://fridaysforfuture.at/*
// @icon         https://fridaysforfuture.at/favicon.ico
// @grant        GM_cookie
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    GM_cookie.list({ url: "https://fridaysforfuture.at/", name: "kirby_session" }, (cookie, error) => {
        if (!error && cookie.length > 0) {
            var elem_parent = document.querySelector("body");
            var elem_editButtonLink = document.createElement("a");
            let parsedURL = new URL(window.location);
            parsedURL.pathname = "/admin/pages/"+parsedURL.pathname.slice(1).replaceAll("/", "+");
            elem_editButtonLink.href = parsedURL;
            var elem_editButton = document.createElement("div");
            elem_editButtonLink.style.bottom = "2em";
            elem_editButtonLink.style.right = "-2em";
            elem_editButtonLink.style.position = "sticky";
            elem_editButton.style.backgroundColor = "blue";
            elem_editButton.style.color = "white";
            elem_editButton.innerText = "Bearbeiten";
            elem_editButtonLink.appendChild(elem_editButton);
            elem_parent.appendChild(elem_editButtonLink);
        };
    });
})();