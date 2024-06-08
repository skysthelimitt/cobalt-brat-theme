// ==UserScript==
// @name         brat
// @namespace    cobalt.brat.theme
// @version      2024-06-08
// @description  cobalt brat theme
// @author       sky
// @match        https://cobalt.tools
// @icon         https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Charli_XCX_-_Brat_%28album_cover%29.png/440px-Charli_XCX_-_Brat_%28album_cover%29.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // set brat style
    let style = document.createElement("style");
    style.innerHTML = `
[data-theme=brat] {
	* {
		font-family: Arial, Helvetica, sans-serif;
	}
	#logo {
		font-size: 2rem;
	}
  --accent: rgb(0, 0, 0);
  --accent-highlight: rgb(0, 255, 255, 4%);
  --accent-subtext: rgb(0, 0, 0);
  --accent-hover: rgb(169, 237, 20);
  --accent-hover-elevated: rgb(169, 237, 20);
  --accent-hover-transparent: rgba(169, 237, 20, .5);
  --accent-button: rgb(159, 227, 10);
  --accent-button-elevated: rgb(159, 227, 10);
  --glass: rgba(139, 207, 0, .85);
  --glass-lite: rgba(139, 207, 0, .98);
  --subbackground: rgb(139, 207, 0);
  --background: rgb(139, 207, 0);
  --background-backdrop: rgba(0,0,0, .5)
}`;
    document.head.appendChild(style);
    // add brat to themes
    document.getElementById("theme-switcher").querySelector(".switches").innerHTML += `<button id="theme-brat" class="switch" onclick="changeSwitcher('theme', 'brat')" data-enabled="false">brat</button>`;
    // add brat to themes
    switchers.theme.push("brat");
    // set it so brat stays between refreshes - since cobalt deletes it on load
    document.getElementById("theme-switcher").addEventListener("click", (e) => {
        console.log(e);
        if(e.target.id == "theme-brat") {
            localStorage.setItem("brat", "true")
        } else {
            localStorage.removeItem("brat")
        }
    });
    if(localStorage.getItem("brat")) {
        changeSwitcher('theme', 'brat')
    }
})();
