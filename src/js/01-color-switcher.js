const btn = document.getElementById('btn');
btn.addEventListener('click', handleButtonBehavior);

const BUTTONS_UI = {
  activeBtn: 'stop',
  start: {
    text: 'Start',
    class: 'start',
  },
  stop: {
    text: 'Stop',
    class: 'stop',
  },
};

function setBg() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = '#' + randomColor;
}

let intervalId;

function handleButtonBehavior() {
  const { activeBtn } = BUTTONS_UI;
  if (activeBtn === 'stop') {
    clearInterval(intervalId);
    BUTTONS_UI.activeBtn = 'start';
    btn.classList.add(BUTTONS_UI.start.class);
    btn.classList.remove(BUTTONS_UI.stop.class);
    btn.textContent = BUTTONS_UI.start.text;
  } else if (activeBtn === 'start') {
    intervalId = setInterval(setBg, 1000);
    BUTTONS_UI.activeBtn = 'stop';
    btn.classList.remove(BUTTONS_UI.start.class);
    btn.classList.add(BUTTONS_UI.stop.class);
    btn.textContent = BUTTONS_UI.stop.text;
  }
}
handleButtonBehavior();
