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

// const startBtn = document.querySelector('[data-start]');
// const stopBtn = document.querySelector('[data-stop]');
// const body = document.body;

// startBtn.addEventListener('click', startColorChange);
// stopBtn.addEventListener('click', stopColorChange);

// stopBtn.setAttribute('disabled', true);
// let timerId = null;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function timerForColorChange() {
//   timerId = setInterval(() => {
//     body.style.backgroundColor = getRandomHexColor();
//   }, 1000);
// }

// function startColorChange() {
//   timerForColorChange();

//   stopBtn.removeAttribute('disabled');
//   startBtn.setAttribute('disabled', true);
// }

// function stopColorChange() {
//   clearInterval(timerId);

//   stopBtn.setAttribute('disabled', true);
//   startBtn.removeAttribute('disabled');
// }
