const t=document.getElementById("btn");t.addEventListener("click",o);const s={activeBtn:"stop",start:{text:"Start",class:"start"},stop:{text:"Stop",class:"stop"}};function a(){const t=Math.floor(16777215*Math.random()).toString(16);document.body.style.backgroundColor="#"+t}let e;function o(){const{activeBtn:o}=s;"stop"===o?(clearInterval(e),s.activeBtn="start",t.classList.add(s.start.class),t.classList.remove(s.stop.class),t.textContent=s.start.text):"start"===o&&(e=setInterval(a,1e3),s.activeBtn="stop",t.classList.remove(s.start.class),t.classList.add(s.stop.class),t.textContent=s.stop.text)}o();
//# sourceMappingURL=01-color-switcher.deb8b0e8.js.map