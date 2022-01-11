const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');
const newYear = "12 Dec 2022";//not 1st Jan 2021

function countdown(){
  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  const totalSeconds = (newYearDate - currentDate ) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60 ;
  const seconds = Math.floor(totalSeconds % 60);

  //console.log(days , hours , mins , seconds);
  daysE1.innerHTML = days;
  hoursE1.innerHTML = formatTime(hours);
  minsE1.innerHTML = formatTime(mins);
  secondsE1.innerHTML = formatTime(seconds);
}

function formatTime(time){
  return time < 10 ? (`0${time}`) : time;
}
//initial call
countdown();
//setInterval(countdown , 1000);
