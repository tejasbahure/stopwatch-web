let minTime = document.querySelector("#min-count");
let secTime = document.querySelector("#sec-count");
let msecTime = document.querySelector("#milsec-count");

const startTime = document.querySelector("#start");
const stopTime = document.querySelector("#stop");
const resetTime = document.querySelector("#reset");

// str.padStart(targetLength, <padString>)
let minutes = 0;
let seconds = 0;
let milSeconds = 0;
let timeStart = null;
let timeFlowFlag = false; 

startTime.addEventListener("click", () => {
    if(!timeFlowFlag){   
      timeStart = setInterval(startWatch, 10);
      timeFlowFlag = true;
    }
});

stopTime.addEventListener("click", () => {
    if(timeFlowFlag){
        clearInterval(timeStart);
        timeFlowFlag = false;
    }
});

resetTime.addEventListener("click", () => {
    minutes = 0;
    seconds = 0;
    milSeconds = 0;
    minTime.textContent = "00";
    secTime.textContent = "00";
    msecTime.textContent = "00";
    clearInterval(timeStart);
    timeFlowFlag = false;
});

const resolveInMinutes = () => {
    minutes++;
    seconds = 0;
}

const resolveInSeconds = () =>{
    seconds++;
    milSeconds = 0;
    if (seconds == 60) {
        resolveInMinutes();
    }
}

const startWatch = () => {
    milSeconds++;

    if(milSeconds == 100){
        resolveInSeconds();
    }

    if(minutes<10){
        minTime.textContent = `0${minutes}`;
    } else{
        minTime.textContent = minutes;
    }

    if(seconds<10){
        secTime.textContent = `0${seconds}`;
    } else{
        secTime.textContent = seconds;
    }

    if(milSeconds<10){
        msecTime.textContent = `0${milSeconds}`;
    } else{
        msecTime.textContent = milSeconds;
    }
    
    
}