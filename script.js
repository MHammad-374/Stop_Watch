let hour = document.getElementById("hours")
let min = document.getElementById("mins")
let sec = document.getElementById("sec")
let m_sec = document.getElementById("m_sec")

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let millisec = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let start = false
let reset = false

let intervalId; // Variable to store interval ID

const startWatch = () => {
    clearInterval(intervalId); // Clear any existing interval

    intervalId = setInterval(() => {
        if (start) {
            millisec++
            if (millisec < 10) {
                m_sec.innerHTML = `0${millisec}`
            }
            else if (millisec === 100) {
                millisec = 0
                seconds++
            }
            else {
                m_sec.innerHTML = `${millisec}`
            }

            if (seconds < 10) {
                sec.innerHTML = `0${seconds}`
            }
            else if (seconds === 60) {
                seconds = 0;
                minutes++;
                sec.innerHTML = `00`
            }
            else {
                sec.innerHTML = `${seconds}`
            }
            if (minutes < 10) {
                min.innerHTML = `0${minutes}`
            }
            else if (minutes === 60) {
                minutes = 0;
                hours++
                min.innerHTML = '00'
            }
            else {
                min.innerHTML = `${minutes}`
            }

            if (hours < 10) {
                hour.innerHTML = `0${hours}`
            }
            else {
                hours.innerHTML = `${hours}`
            }

        } else {
            if (reset) {
                if (reset) {
                    millisec = 0;
                    seconds = 0;
                    minutes = 0;
                    hours = 0;

                    m_sec.innerHTML = `00`
                    sec.innerHTML = `00`
                    min.innerHTML = `00`
                    hours.innerHTML = `00`
                }
                else {

                }
            }
        }
    }, 10);
};

startBtn.addEventListener('click', function () {
    start = true;
    startWatch();
});

stopBtn.addEventListener('click', function () {
    start = false;
    reset = false;
});

resetBtn.addEventListener('click', function () {
    start = false;
    reset = true;
});

