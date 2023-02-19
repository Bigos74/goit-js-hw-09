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

function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

function addColor() {
  document.body.style.backgroundColor = '#' + randomColor();
}

let intervalId;

function handleStatus(status) {
  const nextStatus = status === 'start' ? 'stop' : 'start';
  BUTTONS_UI.activeBtn = nextStatus;
  btn.classList.add(BUTTONS_UI[nextStatus].class);
  btn.classList.remove(BUTTONS_UI[status].class);
  btn.textContent = BUTTONS_UI[nextStatus].text;
}

function handleButtonBehavior() {
  const { activeBtn } = BUTTONS_UI;
  if (activeBtn === 'stop') {
    clearInterval(intervalId);
  } else if (activeBtn === 'start') {
    intervalId = setInterval(addColor, 1000);
  }
  handleStatus(activeBtn);
}
handleButtonBehavior();
