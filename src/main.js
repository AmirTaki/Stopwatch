let timerDisplay = document.querySelector('.timerDisplay')
let stopBtn = document.getElementById('stopBtn')
let startBtn = document.getElementById('startBtn')
let resetBtn = document.getElementById('resetBtn')

let hour = '0';
let mins = '0';
let secs = '0';

let timerId = null;

const startTimer = ()=> {
    secs ++;
    if (secs == 100){
        secs = 0
        mins ++ ;
    }
    if (mins == 60){
            mins = 0
            hour ++;
     }


    let secsStr = secs < 10 ? `0${secs}` : secs;

    let minsStr = mins < 10 ? `0${mins}` : mins;
    
    let hourStr = hour < 10 ? `0${hour}` : hour;

    timerDisplay.innerHTML = `${hourStr} : ${minsStr} : ${secsStr}`
}

// strat 
startBtn.addEventListener("click", (e) => {
    timerId =  setInterval(startTimer, 10)
})

// stop 
stopBtn.addEventListener("click", (e) => {
   clearInterval(timerId)
})

// reset 
resetBtn.addEventListener('click', (e) =>{
    clearInterval(timerId)
    timerDisplay.innerHTML = "00 : 00 : 00"
    hour = 0 , mins = 0 ,secs = 0
})
