'use strict';

const clock = document.querySelector('.clock');
const body = document.querySelector('body');

body.style.height = `${window.innerHeight}px`;

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

    hour = hour > 12 ? hour - 12 : hour;
    let indicator = hour >= 12 ? "PM" : "AM";
    clock.textContent = `${hour}:${minute}:${second} ${indicator}`
}

setInterval(() => show(getCurrentTime()), 1000);