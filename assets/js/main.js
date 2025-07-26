const day = document.querySelector(".days");
const hour = document.querySelector(".hours");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const ampm = document.querySelector(".am-pm");

function updateClock() {
  let d = new Date().getDate()
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "am";

  if (h > 12) {
    h = h - 12;
    ampm = "pm";
  }

  d = d < 10 ? "0" + d : d;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  day.innerText = d;
  hour.innerText = h;
  min.innerText = m;
  sec.innerText = s;
  ampm.innerText = ampm;


  setTimeout(() => {
    updateClock();
}, 1000);

};

updateClock();


