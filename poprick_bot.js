// This is tempory script to automate clicks on poprick.click
let keyboardEvent = document.createEvent('KeyboardEvent');
let initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? 'initKeyboardEvent' : 'initKeyEvent';
let curTicks = new Date().getTime();
let prevTicks = curTicks;
let state = 'wait';

const container = document.querySelector('.main');
const popDuration = 20_000; // Duration to pop continuously
const sleepDuration = 10_000; // Sleep and wait to send data to server

keyboardEvent[initMethod](
  'keydown', // event type: keydown, keyup, keypress
  true, // bubbles
  true, // cancelable
  window, // view: should be window
  false, // ctrlKey
  false, // altKey
  false, // shiftKey
  false, // metaKey
  40, // keyCode: unsigned long - the virtual key code, else 0
  0, // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
);

setInterval(() => {
    if (state === 'wait') {
        curTicks = new Date().getTime();

        if ((curTicks - prevTicks) >= sleepDuration) {
            state = 'pop';
            prevTicks = new Date().getTime();
        }
    }
    else if (state === 'pop') {
        curTicks = new Date().getTime();

        if ((curTicks - prevTicks) >= popDuration) {
            state = 'wait';
            prevTicks = new Date().getTime();
            return;
        }

        container.dispatchEvent(keyboardEvent);
    }
}, 10);
