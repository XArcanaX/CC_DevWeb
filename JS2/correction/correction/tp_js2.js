"use strict";

// exercice 1

const $style = document.createElement("style");
$style.innerText = ".highlight { background-color: coral; }";
document.querySelector("head").appendChild($style);
let btnCount = 0;

const $btn = document.getElementById("demo-btn");
$btn.onclick = function (_evt) {
  if (btnCount < 10) {
    const result = this.classList.toggle("highlight");
    console.log(`toggled = ${result}`);
    btnCount++;
  } else {
    this.setAttribute("disabled", true);
  }
};

// exercice 2

const $anchors = document.querySelectorAll("ul#images-list > li > a");
const $display = document.getElementById("image-container");
console.debug($anchors);
for (const $a of $anchors) {
  console.debug($a.href);
  $a.onclick = function (_evt) {
    const $img = document.createElement("img");
    $img.src = $a.href;
    $display.replaceChildren($img);
    // prevent default
    return false;
  };
}

// exercice 3

const konamiCode = [
  "arrowup",
  "arrowup",
  "arrowdown",
  "arrowdown",
  "arrowleft",
  "arrowright",
  "arrowleft",
  "arrowright",
  "b",
  "a",
];

let konamiCount = 0;

function konamiHandler(event) {
  console.debug(`konami: event.keyCode=${event.key}, konamiCount=${konamiCount}`);
  if (event.key.toLowerCase() === konamiCode[konamiCount++]) {
    if (konamiCount === konamiCode.length) {
      alert("Konami !!!");
      konamiCount = 0;
    }
  } else konamiCount = 0;
}

document.onkeydown = konamiHandler;

