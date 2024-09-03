"use strict";
console.info("app.js loading...");
const $style = document.createElement('style'); 
$style.innerHTML = '.highlight {background-color: red;}';

document.head.appendChild($style)
let ctp = 0;
const $demoBtn = document.getElementById('demo-btn');
$demoBtn.addEventListener('click', function() {
    ctp++;
    document.body.classList.toggle('highlight');
    if(ctp>9) {
        this.disabled = true;
    }
});



const $imagesList = document.getElementById('images-list');
const $imageContainer = document.getElementById('image-container');
$imagesList.addEventListener('click', function(e) {
  if(e.target.tagName === 'A') {
    const $newImage = document.createElement('img');
    $newImage.src = e.target.href;
    $imageContainer.appendChild($newImage);

    const $delbutton = document.createElement('button');
    $delbutton.textContent = 'Supprimer';
    $delbutton.addEventListener('click', function() {
      $imageContainer.removeChild($newImage);
      $imageContainer.removeChild($delbutton);
    });
    $imageContainer.appendChild($delbutton);
  }
  e.preventDefault();
})

const konamiCode = ["arrowup", "arrowup", "arrowdown", "arrowdown", "arrowleft", "arrowright", "arrowleft", "arrowright", "b", "a"];
let konamiCount = 0;

document.addEventListener("keydown", function (e) {
  if (e.key.toLowerCase() === konamiCode[konamiCount++]) {
    if (konamiCount === konamiCode.length) {
      window.location.href = "https://github.com/XArcanaX"; // renvoyer sur le site
      konamiCount = 0;
    }
  } else {
    konamiCount = 0;
  }
});
console.info("...app.js loaded");



