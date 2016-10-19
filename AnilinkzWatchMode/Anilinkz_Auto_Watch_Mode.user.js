// ==UserScript==
// @name        Anilinkz Auto Watch Mode
// @namespace   com.github.maxvalue.anilinzWatchMode
// @description automatically sets the watch mode on anilinkz.tv pages.
// @version     9.0
// @updateURL   https://raw.githubusercontent.com/MaxValue/Greasemonkey/master/AnilinkzWatchMode/Anilinkz_Auto_Watch_Mode.meta.js
// @downloadURL https://raw.githubusercontent.com/MaxValue/Greasemonkey/master/AnilinkzWatchMode/Anilinkz_Auto_Watch_Mode.user.js
// @include     /^https?://(www\.)?anilinkz\.\w+/.*$/
// @grant       none
// @run-at      document-idle
// ==/UserScript==
$('#watchmode').click();
$('#chatango').empty();
$('div[id^="adp_position_AD_"]')[0].style.display='none';
