const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const seconds = document.getElementById("seconds");

const newYear = "1 Jan 2021";

function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const secondsLeft = (newYearDate - currentDate)/1000;

    const daysLeft = Math.floor(secondsLeft/3600/24);
    const hoursLeft = Math.floor(secondsLeft/3600)%24;
    const minutesLeft = Math.floor(secondsLeft/60)%60;
    const secondsToGo = Math.floor(secondsLeft)%60;

    days.innerHTML = daysLeft;
    hours.innerHTML = formatTime(hoursLeft);
    mins.innerHTML = formatTime(minutesLeft);
    seconds.innerHTML = formatTime(secondsToGo);
}


function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();
setInterval(countdown, 1000);