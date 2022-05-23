import "./style.scss";
import "./node_modules/scrollreveal/dist/scrollreveal.js";
import "./node_modules/waypoints/lib/noframework.waypoints.min.js";

"use strict";

// toggle nav open, close
const btnMobile = document.querySelector(".btn-mobile");
btnMobile.addEventListener("click", function () {
  this.closest(".myNav").classList.toggle("nav-open");
  this.querySelector(".open").classList.toggle("d-none");
  this.querySelector(".close").classList.toggle("d-none");
});

//way point nav sticky
const navBar = document.querySelector(".myNav");
const infoSec = document.querySelector("#info");
const navBarHeight = navBar.getBoundingClientRect().height;

new Waypoint({
  element: infoSec,
  handler: function (direction) {
    if (direction === "down") {
      infoSec.style.marginTop = navBarHeight + "px";
      navBar.classList.toggle("mySticky");
    }
    if (direction === "up") {
      infoSec.style.marginTop = 0 + "px";
      navBar.classList.toggle("mySticky");
    }
  },
  offset: -80,
});

// scroll reveal

const slideLeft = {
  distance: "70px",
  origin: "left",
  duration: 1000,
  interval: 300,
  cleanup: true,
  delay: 10,
};
ScrollReveal().reveal(".slideLeft", slideLeft);

const slideBot = {
  distance: "100px",
  origin: "bottom",
  duration: 1000,
  interval: 250,
  cleanup: true,
  delay: 200,
};
ScrollReveal().reveal(".slideBot", slideBot);

// footer
const slideLeftAtOnce = {
  distance: "100px",
  origin: "left",
  interval: 10,
  duration: 1000,
  cleanup: true,
  delay: 300,
};
ScrollReveal().reveal(".slideLeftAll", slideLeftAtOnce);

const slideTopAtOnce = {
  distance: "50px",
  origin: "top",
  interval: 5,
  duration: 1000,
  cleanup: true,
  delay: 200,
};
ScrollReveal().reveal(".slideTopAll", slideTopAtOnce);

const slideBotAtOnce = {
  distance: "50px",
  origin: "bottom",
  interval: 5,
  duration: 1000,
  cleanup: true,
  delay: 200,
};
ScrollReveal().reveal(".slideBotAll", slideBotAtOnce);
