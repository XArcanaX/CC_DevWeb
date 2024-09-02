"use strict";


const $startBtn = document.getElementById("start-btn");
const $guessBtn = document.getElementById("guess-btn");
const $cowBtn = document.getElementById("cow-btn");
const $output = document.getElementById("output");
const $numUsr = document.getElementById("num-usr");
const $maxUsr = document.getElementById("max-usr");

let secretNumber = 0;
let nbGuesses = 0;
let maxGuesses = 0;

function launchGame(_evt) {
  const maxVal = +$maxUsr.value
  secretNumber = Math.floor(Math.random() * $maxUsr.value) + 1;
  maxGuesses = Math.ceil(Math.log($maxUsr.value)) + 1;
  nbGuesses=0;

  $guessBtn.removeAttribute('disabled');
  $output.innerHTML = `Le jeu a commencé ! Vous avez ${maxGuesses} tentatives pour trouver un nombre entre 1 et ${maxVal}.`;

  $numUsr.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
      $guessBtn.click();
    }
  })

  $guessBtn.addEventListener('click', () => {
    const usrGuess= +$numUsr.value;
    nbGuesses++;

    if(usrGuess < secretNumber){
      $output.innerHTML= 'La dernière tentative est trop basse ! ';
    }
    else if (usrGuess > secretNumber){
      $output.innerHTML= 'La derniere tentative est trop haute ! ';
    }
    else{
      $output.innerHTML = `Félicitations ! Vous avez trouvé le nombre ${secretNumber}`;
      return;
    }
    

    if(nbGuesses >= maxGuesses){
      $guessBtn.setAttribute('disabled',true)
      $output.innerHTML= `Vous avez utilisé toutes vos tentatives pour trouver le ${secretNumber}.`
    }
  });
}

$startBtn.addEventListener("click", launchGame);



function addCow(evt) {
  console.debug(evt.clientX, evt.clientY);

  const $cow = document.createElement("img");
  $cow.src = "https://upload.wikimedia.org/wikipedia/commons/3/30/Cowicon.svg";

  $cow.classList.add("cow");
  $cow.style.position = "fixed";
  $cow.style.left = (evt.clientX - 25) + "px"; 
  $cow.style.top = (evt.clientY - 25) + "px";
  $cow.style.width = "50px";
  $cow.style.height = "50px";
  document.body.appendChild($cow);

  const transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
  $cow.style.transform = transform;
}

function toggleCow(_evt) {
  if (document.onmousedown instanceof Function) {
    document.onmousedown = null;
  } else {
    document.onmousedown = addCow;
  }
}
$cowBtn.addEventListener("click", toggleCow);

