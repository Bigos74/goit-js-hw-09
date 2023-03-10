import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

import '../css/common.css';

const dateInput = document.getElementById('datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startBtn.addEventListener('click', timerOn);
startBtn.setAttribute('disabled', true);

let timerId = null;
let chosenDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose([selectedDates]) {
    if (selectedDates < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtn.setAttribute('disabled', true);
      dateInput.classList.remove('valid');
      dateInput.classList.add('invalid');
    } else {
      chosenDate = selectedDates;
      startBtn.removeAttribute('disabled');
      dateInput.classList.remove('invalid');
      dateInput.classList.add('valid');
    }
  },
};

flatpickr('#datetime-picker', options);

function timerOn() {
  timerId = setInterval(() => {
    startBtn.setAttribute('disabled', true);
    dateInput.setAttribute('disabled', true);

    const currentTime = Date.now();
    const deltaTime = chosenDate - currentTime;

    if (deltaTime < 1000) {
      clearInterval(timerId);
      startBtn.removeAttribute('disabled');
    }

    const data = convertMs(deltaTime);
    updClockInterface(data);
  }, 1000);
}

function updClockInterface({ days, hours, minutes, seconds }) {
  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
