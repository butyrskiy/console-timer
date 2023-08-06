const btn = document.querySelector('.btn');

let isEventRunning = false;
let sec = 0;
let idTimer;

const timer = () => {
  isEventRunning = true;
  sec += 1;
  console.log(sec);
}

function stopStartTimer() {
  if(isEventRunning) {
    clearInterval(idTimer);
    isEventRunning = false;
  } else {
    idTimer = setInterval(timer, 1000);
  }
}

btn.addEventListener('click', stopStartTimer);