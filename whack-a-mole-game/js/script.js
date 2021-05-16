// Elements and variables
const scoreView = document.querySelector('.score')
const holes = document.querySelectorAll('.hole')
const moles = document.querySelectorAll('.mole')
let select = document.querySelector('.select')
let lastHole;
let timeUp = false;
let score = 0;

// Add Events for moles
moles.forEach(mole => mole.addEventListener('click', bonk));

// Get random Number
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


function randomHole(holes) {
    const id = Math.floor(Math.random() * holes.length);
    const hole = holes[id];
    //  If the hole is repeated, do fn again
    if (hole === lastHole) return randomHole(holes);
    lastHole = hole;
    return hole;
}

// Add\remove Up
function peep(data) {
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) peep(data);
    }, data);
}

// Fn for change level
function setTime(selectValue) { 
    if(selectValue == '0') {
        return randomTime(800, 1000);
     } else if (selectValue == '1') {
        return randomTime(600, 700);
     }else if (selectValue == '2') {
        return randomTime(400, 500)
     }  
}


function startGame() {
    // Get value options in select
    let optionValue = select.value;
    // Reset counter DOM
    scoreView.textContent = 0;
    timeUp = false;
    // reset counter
    score = 0;
    peep(setTime(optionValue));
    setTimeout(() => timeUp = true, 10000)
}

// When clicked, score up and delete class Up
function bonk(e) {
    if(!e.isTrusted) return;
    // update counter
    score++;
    this.parentNode.classList.remove('up');
    // update counter DOM
    scoreView.textContent = score;
}

  