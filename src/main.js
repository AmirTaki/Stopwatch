let timerDisplay = document.querySelector('.timerDisplay')
let stopBtn = document.getElementById('stopBtn')
let startBtn = document.getElementById('startBtn')
let resetBtn = document.getElementById('resetBtn')

let mesc = 0;
let secs = 0;
let mins = 0;

let timerId = null;

const startTimer = ()=> {
    mesc++
    if (mesc == 100){
        msec = 0;
        secs ++;
        if(secs == 60){
            secs = 0;
            mins ++;  
        }
    }
}

startBtn.addEventListener('click', (e)=>{
    if (timerId !== null){
           clearInterval(timerId)
    }   
    timerId  = setInterval(startTimer, 10)
})
