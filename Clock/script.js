function showTime() {
  let d = new Date();
  let hrs = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  hrs = (hrs < 10) ? "0" + hrs : hrs;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds  < 10) ? "0" + seconds : seconds;
  let time = hrs + ":" + minutes + ":" + seconds;
  document.getElementById("MyClock").innerHTML = time;
  setInterval(showTime, 1000);

};
showTime();