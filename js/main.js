// DOM ELEMENTS OR MULTIPLE CONST VARIABLE DECLARATION WITH GET ELEMENT BY ID INITIALIZATION
const time = document.getElementById('time'),
  greetings = document.getElementById('greetings'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

// AM OR PM show
const showAmPm = true;

// SHOW TIME
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // SET AM OR PM
  const ampm = hour >= 12 ? "PM" : "AM";

  // SET TIME TO 12HRS FORMAT
  hour = hour % 12 || 12;

  // OUTPUT THE timeout
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? ampm : ""}`;

  setTimeout(showTime, 1000);
}

// Add zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set background and greetings
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = "url('./images/morning.jpg')";
    greetings.textContent = "Good Morning";
  }else if(hour < 18) {
    document.body.style.backgroundImage = "url('./images/afternoon2.jpg')";
    greetings.textContent = "Good Afternoon";
  }else {
    document.body.style.backgroundImage = "url('./images/night.jpg')";
    greetings.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}

// Set name in the localStorage
function setName(e) {
  if (e.type === 'keypress') {
    // Allow the enter button to save the name inputed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  }else {
    localStorage.setItem('name', e.target.innerText);
  }
}
// Get name from localStorage
function getName() {
  if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
    name.textContent = '[Enter Name]';
  }else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Focus in the localStorage
function setFocus(e) {
  if (e.type === 'keypress') {
    // Allow the enter button to save the name inputed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  }else {
    localStorage.setItem('focus', e.target.innerText);
  }
}
// Get Focus from localStorage
function getFocus() {
  if (localStorage.getItem('focus') === null || localStorage.getItem('focus') === '') {
    focus.textContent = '[Enter Focus]';
  }else {
    focus.textContent = localStorage.getItem('focus');
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Then invoke the functions
showTime();
setBgGreet();
getName();
getFocus();
