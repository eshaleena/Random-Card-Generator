/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const numbers = ["2", "3", "5", "7", "8"];
  const suit = ["heart", "diamond", "club", "spade"];
  let random = len => {
    return Math.floor(Math.random() * len);
  };

  let randomNumber = numbers[random(numbers.length - 1)];
  let randomSuit = suit[random(suit.length - 1)];
  document.querySelector(".card").classList.add(".randomNumber");
  console.log(randomNumber, randomSuit);
};
