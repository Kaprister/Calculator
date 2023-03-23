const btnMode = document.querySelector('#btn-mode');
const modeIcon = document.querySelector('#mode-icon');
const modeText = document.querySelector('#mode-text');
const root = document.documentElement.style;



let darkMode = false;

btnMode.addEventListener('click',function(){
  console.log("dark");
    if(darkMode == false){
        darkModeProperties();
    }else{
        lightModeProperties();
    }
});

//dark mode default
const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

if (localStorage.getItem("dark-mode")) {
  darkMode = localStorage.getItem("dark-mode");
  darkModeProperties();
} else {
  localStorage.setItem("dark-mode", prefersDarkMode);
  darkMode = prefersDarkMode;
  lightModeProperties();
}

function darkModeProperties() {
    root.setProperty("--lm-bg", "#141D2F");
    root.setProperty("--lm-bg-content", "#1E2A47");
    root.setProperty("--lm-text", "white");
    root.setProperty("--lm-text-alt", "white");
    modeText.innerText = "LIGHT";
    modeIcon.src = "./assets/sun-icon.svg";
    darkMode = true;
    localStorage.setItem("dark-mode", true);
  }
  function lightModeProperties() {
    root.setProperty("--lm-bg", "#00ffff");
    root.setProperty("--lm-bg-content", "#fefefe");
    root.setProperty("--lm-text", "#4b6a9b");
    root.setProperty("--lm-text-alt", "#2b3442");
    modeText.innerText = "DARK";
    modeIcon.src = "./assets/moon-icon.svg";
    darkMode = false;
    localStorage.setItem("dark-mode", false);
  }



const display = document.querySelector('[display-container]');
const ac = document.querySelector('[AC]');
const de = document.querySelector('[DE]');
const dotOp = document.querySelector('[dot]');
const division = document.querySelector('[divi]');
const one = document.querySelector('[one]');
const two = document.querySelector('[two]');
const three = document.querySelector('[three]');
const four = document.querySelector('[four]');
const five = document.querySelector('[five]');
const six = document.querySelector('[six]');
const seven = document.querySelector('[seven]');
const eight = document.querySelector('[eight]');
const nine = document.querySelector('[nine]');
const dZero = document.querySelector('[D-zero]');
const zero = document.querySelector('[zero]');
const equal = document.querySelector('[Equal]');
const minus = document.querySelector('[minus]');
const plus = document.querySelector('[plus]');
const star = document.querySelector('[star]');

ac.addEventListener("click",function() {
  display.value = '';
});

de.addEventListener("click",function() {
  display.value = display.value.toString().slice(0,-1);
});

dotOp.addEventListener("click",function() {
  display.value += '.';
});

division.addEventListener("click",function() {
  display.value += '/';
});
star.addEventListener("click",function() {
  display.value += '*';
});
minus.addEventListener("click",function() {
  display.value += '-';
});
plus.addEventListener("click",function() {
  display.value += '+';
});





one.addEventListener("click",function() {
  display.value += '1';
});
two.addEventListener("click",function() {
  display.value += '2';
});
three.addEventListener("click",function() {
  display.value += '3';
});
four.addEventListener("click",function() {
  display.value += '4';
});
five.addEventListener("click",function() {
  display.value += '5';
});
six.addEventListener("click",function() {
  display.value += '6';
});
seven.addEventListener("click",function() {
  display.value += '7';
});
eight.addEventListener("click",function() {
  display.value += '8';
});
nine.addEventListener("click",function() {
  display.value += '9';
});
dZero.addEventListener("click",function() {
  display.value += '00';
});
zero.addEventListener("click",function() {
  display.value += '0';
});

equal.addEventListener("click",function() {
  display.value = eval(display.value);
});

