/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  cardGenerator();
};

let cardGenerator = () => {
  const numbers = ["2", "3", "5", "7", "8"];
  const suit = ["heart", "diamond", "club", "spade"];
  let randomSuit = suit[Math.floor(Math.random() * suit.length)];
  let randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];

  if (randomSuit == "heart" || randomSuit == "diamond") {
    document.querySelector("#top-suit").style.color = "red";
    document.querySelector("#bottom-suit").style.color = "red";
  } else {
    document.querySelector("#top-suit").style.color = "black";
    document.querySelector("#bottom-suit").style.color = "black";
  }
  document.querySelector("#top-suit").innerHTML = randomSuit;
  document.querySelector("#number").innerHTML = randomNumbers;
  document.querySelector("#bottom-suit").innerHTML = randomSuit;
};
