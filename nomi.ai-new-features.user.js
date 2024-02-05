// ==UserScript==
// @name        Nomi AI - New features
// @namespace
// @match       https://beta.nomi.ai/*
// @version     1.0
// @author      BreatFR
// @updateURL   https://raw.githubusercontent.com/breatfr/NomiAI-Dark-Theme/main/nomi.ai-new-features.js
// @downloadURL https://raw.githubusercontent.com/breatfr/NomiAI-Dark-Theme/main/nomi.ai-new-features.js
// @icon        https://assets.nomi.ai/_next/static/media/favicon.49a32755.svg
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
