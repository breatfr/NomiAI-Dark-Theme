// ==UserScript==
// @name        Nomi AI - New features
// @match       https://beta.nomi.ai/*
// @grant       none
// @version     1.0
// @author      BreatFR
// @description New features for Nomi AI
// ==/UserScript==

(function() {
    'use strict';

// Textarea auto focus
    function focusTextarea() {
        var textareaElement = document.querySelector('.css-d56yar');
        if (textareaElement) {
            textareaElement.focus();
        }
    }

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            focusTextarea();
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    focusTextarea();
})();
