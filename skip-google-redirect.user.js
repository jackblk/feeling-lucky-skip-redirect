// ==UserScript==
// @name         Skip Google Redirect
// @namespace    https://github.com/jackblk/feeling-lucky-skip-redirect
// @version      1.0
// @description  Automatically skip Google's redirection notice and go to the target URL directly
// @author       jackblk
// @include      *://*.google.*/*url?q=*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/jackblk/feeling-lucky-skip-redirect/main/skip-google-redirect.user.js
// @downloadURL  https://raw.githubusercontent.com/jackblk/feeling-lucky-skip-redirect/main/skip-google-redirect.user.js
// ==/UserScript==

(function() {
    'use strict';
    // Extract the 'q' parameter, which contains the target URL
    const urlParams = new URLSearchParams(window.location.search);
    const targetUrl = urlParams.get('q');
    if (targetUrl) {
        // Redirect to the target URL
        window.location.href = targetUrl;
    }
})();
