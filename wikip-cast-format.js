
/*******************
 * Press shiftKey+Z, popups the (modified) selected text
 * Used to format the "starring/cast and crew" infos from wikipedia, from this:

Daniel Day-Lewis: William "Bill il Macellaio" Cutting
Cameron Diaz: Jenny Everdeane
Liam Neeson: "Prete" Vallon
Jim Broadbent: William M. Tweed
John C. Reilly: Happy Jack Mulraney

 **********
 * to this:

Daniel Day-Lewis,Leonardo DiCaprio,Cameron Diaz,Jim Broadbent,John C. Reilly

 *************************************
 * 
 * Author: Marco Chieppa | crap0101
 * copyright: public domain.
 *
 */

// ==UserScript==
// @name         wikip-cast-format
// @namespace    http://tampermonkey.net/
// @version      0.1_2024-01-28
// @description  formats movie's cast names from wikipedia
// @author       crap0101
// @match        https://*.wikipedia.org/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener("keydown", (e) => {
        if (e.code == "KeyZ" && e.shiftKey) {
            if (getSelection().toString()) {
                alert(getSelection().toString().split("\n").map((x) => x.split(":")[0]).join(","));
            }
        }
    });
})();
