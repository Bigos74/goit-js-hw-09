!function(){var t=document.getElementById("btn");t.addEventListener("click",n);var s,a={activeBtn:"stop",start:{text:"Start",class:"start"},stop:{text:"Stop",class:"stop"}};function e(){document.body.style.backgroundColor="#"+Math.floor(16777215*Math.random()).toString(16)}function n(){var n=a.activeBtn;"stop"===n?(clearInterval(s),a.activeBtn="start",t.classList.add(!0),t.classList.remove(!1),t.textContent=a.start.text):"start"===n&&(s=setInterval(e,1e3),a.activeBtn="stop",t.classList.remove(a.start.class),t.classList.add(a.stop.class),t.textContent=a.stop.text)}n()}();
//# sourceMappingURL=01-color-switcher.5fec88e5.js.map