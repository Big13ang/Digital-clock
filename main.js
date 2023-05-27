'use strict';

const clock = document.querySelector('.clock');

const getCurrentTime = () => {
    let now = new Date();
    // Hour : 0 -23  Minute , Second : 0 - 59 
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    return {
        hour,
        minute,
        second
    }
}

const show = ({ hour, minute, second }) => {
    // fix 00:00:00
    second = `${second}`.padStart(2, 0);
    minute = `${minute}`.padStart(2, 0);
    hour = `${hour}`.padStart(2, 0);

    clock.textContent = `${hour}:${minute}:${second}`
}

setInterval(() => show(getCurrentTime()), 1000);
