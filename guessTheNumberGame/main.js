// make a function, when user click the key...

const keys = document.getElementsByClassName("keySection")[0];
const display = document.getElementsByClassName("DisplayNum")[0];
const guessBtn = document.getElementById('guessBtn');
const lessThan = document.querySelector('.lessThan > ul');
const greatThan = document.querySelector('.greatThan > ul');

keys.addEventListener("click", displayNumber);
guessBtn.addEventListener('click',checkTheNumberIsWonOrNot);

let random = randomNumberGenrator();   //get tha random number...
console.log(random); 

function displayNumber(e) {
  if (e.target.innerText === "C") {   //use that to clear the display...
    display.innerHTML = '';
    return;
  }
  let usernum = Number(e.target.innerText);
  display.innerHTML = display.innerHTML + usernum;
}

function checkTheNumberIsWonOrNot(){
    let userNumber = Number(display.innerHTML);
    if(random === userNumber){
        console.log('win');
    }

    if(userNumber > random){
        console.log('less');
        let less = document.createElement('li');
        less.innerHTML = `< ${userNumber}`
        lessThan.appendChild(less)
    }
    if(userNumber < random) {
        console.log('more');
        let more = document.createElement('li');
        more.innerHTML = `> ${userNumber}`
        greatThan.appendChild(more)
    }

    display.innerHTML = ''
}

function randomNumberGenrator() {
  let random = Math.floor(Math.random() * 10);
  return random;
}
