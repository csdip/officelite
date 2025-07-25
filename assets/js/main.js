// let day = document.querySelector(".days");
let hour = document.querySelector(".hours");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let ampm = document.querySelector(".am-pm");

const updateClock =()=> {
  // let d = new Date().getDate();
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  if (h > 12) {
    h = h - 12;
    ampm = "pm";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // day.innerText = d;
  hour.innerText = h;
  min.innerText = m;
  sec.innerText = s;
  ampm.innerText = am;


  setTimeout(() => {
    updateClock();
}, 1000);

};

updateClock();

