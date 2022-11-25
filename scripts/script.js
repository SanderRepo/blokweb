//Header code, bron: https://github.com/amdhanwate/reveal-unreveal-on-scroll/blob/main/main.js
const body = document.body;
const header = document.querySelector("header");
const main = document.querySelector("main");
const headerHeight = document.querySelector("header").offsetHeight;

main.style.top = headerHeight + "px";

let lastScroll = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll - lastScroll > 0) {
    header.classList.add("scroll-down");
    header.classList.remove("scroll-up");
  } else {
    header.classList.add("scroll-up");
    header.classList.remove("scroll-down");
  }

  lastScroll = currentScroll;
});

//Eigen code

const ul = document.querySelector("ul");
const button = document.querySelector("button");
const svg = document.querySelector('svg');

function togglemenu() {
  ul.classList.toggle("slide-in-top");
  ul.classList.toggle("open");
  svg.classList.toggle("color-black");
  svg.classList.toggle("color-black-2");

}

button.addEventListener("click", togglemenu);
