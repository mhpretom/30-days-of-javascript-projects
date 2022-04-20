


const daysEl=document.querySelector(".days");
const hoursEl=document.querySelector(".hours");
const minutesEl=document.querySelector(".minutes");
const secondsEl=document.querySelector(".seconds");



const countDown=()=>{
    const currDate=new Date();
    const newYearsEve=new Date("1 jan 2023");
    
    const milliseconds=(newYearsEve-currDate)/1000;
    const days=Math.floor((milliseconds/3600/24));
    const hours=Math.floor((milliseconds/3600)%24);
    const minutes=Math.floor((milliseconds/60)%60);
    const seconds=Math.floor((milliseconds%60));

    daysEl.innerText=`${days}`;
    hoursEl.innerText=`${hours}`;
    minutesEl.innerText=`${minutes}`;
    secondsEl.innerText=`${seconds}`;
}



setInterval(countDown,1000)