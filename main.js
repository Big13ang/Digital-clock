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

