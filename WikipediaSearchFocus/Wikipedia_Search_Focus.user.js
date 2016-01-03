// ==UserScript==
// @name        Wikipedia Search Focus
// @namespace   com.github.maxvalue.wikipediaSeachFocus
// @description sets the focus to the search bar at page load when on wikipedia
// @version     2.0
// @updateURL   https://raw.githubusercontent.com/MaxValue/Greasemonkey/master/WikipediaSearchFocus/Wikipedia_Search_Focus.meta.js
// @downloadURL https://raw.githubusercontent.com/MaxValue/Greasemonkey/master/WikipediaSearchFocus/Wikipedia_Search_Focus.user.js
// @include     /^https?://.*\.wikipedia\..*/.*$/
// @grant       none
// ==/UserScript==
document.getElementById((window.location.hostname.substr( - 14) == '.wikipedia.org') ? 'searchInput' : 'txtSearch').focus()
