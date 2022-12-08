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

//Eigen code - Openen van menu en kleur veranderen

const nav = document.querySelector("nav");
const hamburgericon = document.querySelector(".open-menu");

function togglemenu() {
    nav.classList.toggle("slide-in-top");
    nav.classList.toggle("open");
}

hamburgericon.addEventListener("click", togglemenu);

document
    .querySelectorAll("svg, header span")
    .forEach((item) =>
        hamburgericon.addEventListener("click", (togglemenu) =>
            item.classList.toggle("color-black")
        )
    );

//Product pagina: drie buttons (show / hide)
const blok1 = document.querySelector(".project-page article:nth-of-type(1)");
const blok2 = document.querySelector(".project-page article:nth-of-type(2)");
const blok3 = document.querySelector(".project-page article:nth-of-type(3)");

const knop1 = document.querySelector(
    ".project-page > section:nth-of-type(6) li:nth-of-type(1) button"
);
const knop2 = document.querySelector(
    ".project-page > section:nth-of-type(6) li:nth-of-type(2) button"
);
const knop3 = document.querySelector(
    ".project-page > section:nth-of-type(6) li:nth-of-type(3) button"
);

function toggleblok1() {
    blok3.classList.add("hide-article");
    blok2.classList.add("hide-article");
    blok1.classList.remove("hide-article");
    blok1.classList.add("show-article");
}
function toggleblok2() {
    blok1.classList.add("hide-article");
    blok3.classList.add("hide-article");
    blok2.classList.remove("hide-article");
    blok2.classList.add("show-article");
}
function toggleblok3() {
    blok2.classList.add("hide-article");
    blok1.classList.add("hide-article");
    blok3.classList.remove("hide-article");
    blok3.classList.add("show-article");
}

knop1.addEventListener("click", toggleblok1);
knop2.addEventListener("click", toggleblok2);
knop3.addEventListener("click", toggleblok3);

//Product pagina: switch calibre
const calibre1 = document.querySelector(".project-page article:nth-of-type(2) img:first-of-type");
const calibre2 = document.querySelector(".project-page article:nth-of-type(2) img:last-of-type");

const calibreknop = document.querySelector(".project-page article:nth-of-type(2) button");

//Bron voor img src veranderen: https://khaalipaper.com/javascript/javascript-change-image-onclick-event.php#parentHorizontalTab2
function togglecalibre() {
    if (calibre1.src.match("images/project-page/watch-img-7.png")) {
        calibre1.src = "images/project-page/watch-img-8.png";
    } else {
        calibre2.src = "images/project-page/watch-img-7.png";
    }
}

calibreknop.addEventListener("click", togglecalibre);
