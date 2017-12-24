/**
 * Created by sumit_bagga on 12/10/17.
 */

"use strict";

let game = {
  numColors: 6,

  // get random int between min and max, both inclusive
  getRandomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  randomRGB: function () {
    let r = this.getRandomInt(0, 255);
    let g = this.getRandomInt(0, 255);
    let b = this.getRandomInt(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
  },

  init: function () {
    this.initializeColors(this.numColors);
    document.querySelector("#reset").addEventListener('click', this.reset);
    document.querySelector("#easy").addEventListener('click', function () {
      game.numColors = 3;
      document.querySelector("#hard").classList.remove('selected');
      this.classList.add('selected');
      game.reset();
    });
    document.querySelector("#hard").addEventListener('click', function () {
      game.numColors = 6;
      document.querySelector("#easy").classList.remove('selected');
      this.classList.add('selected');
      game.reset();
    });
  },

  createColorList: function (n) {
    let colorList = [];
    for (let i = 0; i < n; i++) {
      colorList.push(this.randomRGB());
    }
    return colorList;
  },

  initializeColors: function (n) {
    let colorList = this.createColorList(n);
    let chosenColorIndex = this.getRandomInt(0, n - 1);
    //console.log('chosen', chosenColorIndex);
    document.querySelector("#rgb-color").textContent = colorList[chosenColorIndex];
    let elColorSet = document.querySelector('.color-set');
    for (let i = 0; i < n; i++) {

      let elColorNode = document.createElement('li');
      elColorNode.style.backgroundColor = colorList[i];
      elColorNode.addEventListener('click', this.clickColor.bind(elColorNode, i, chosenColorIndex));
      elColorSet.appendChild(elColorNode);
    }
  },

  clickColor: function (idx, chosenColorIndex) {
    // console.log("this", this);
    // console.log('color index: ', chosenColorIndex);
    // console.log('idx: ', idx);
    let elMessage = document.querySelector("#message");
    if (idx === chosenColorIndex) {
      elMessage.textContent = "Correct";
      game.colorAllElements(this.style.backgroundColor)
    } else {
      elMessage.textContent = "Try Again!";
      this.classList.add('vanish');
    }
  },

  colorAllElements: function (color) {
    document.querySelector('header').style.backgroundColor = color;
    document.querySelectorAll('.color-set li').forEach(function (elColorNode) {
      elColorNode.style.backgroundColor = color;
    });
  },

  reset: function () {
    console.log('reset this: ', this);
    document.querySelector('header').style.backgroundColor = '#3498db';
    document.querySelector('.color-set').innerHTML = '';
    document.querySelector("#message").textContent = '';
    game.initializeColors(game.numColors);
  }
};

document.addEventListener("DOMContentLoaded", function() {
  game.init();
});
