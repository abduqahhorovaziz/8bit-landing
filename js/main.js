const link = document.querySelectorAll(".link");
const hoverReveal = document.querySelectorAll(".hover-reveal");
const linkImages = document.querySelectorAll(".hidden-img");

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("mousemove", (e) => {
    hoverReveal[i].style.opacity = 1;
    hoverReveal[i].style.transform = `translate(-100%, -50%) rotate(5deg)`;
    linkImages[i].style.transform = "scale(1, 1)";
    hoverReveal[i].style.left = e.clientX + "px";
  });
  link[i].addEventListener("mouseleave", (e) => {
    hoverReveal[i].style.opacity = 0;
    hoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
    linkImages[i].style.transform = "scale(0.8, 0.8)";
  });
}

const navMenu = document.querySelector(".navbar__menu");
const btnBurger = document.getElementById("nav-toggle");
const iconBurger = document.getElementById("nav-burger");
const iconClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".navbar__link");

btnBurger.addEventListener("click", () => {
  if (navMenu.classList.contains("navbar__menu-hidden")) {
    navMenu.classList.remove("navbar__menu-hidden");
    navMenu.classList.add("navbar__menu-active");
    // document.body.classList.add("no-scroll");
    iconBurger.classList.add("opacity-none");
    iconClose.classList.remove("opacity-none");
  } else {
    navMenu.classList.remove("navbar__menu-active");
    navMenu.classList.add("navbar__menu-hidden");
    // document.body.classList.remove("no-scroll");
    iconBurger.classList.remove("opacity-none");
    iconClose.classList.add("opacity-none");
  }
});

const closeNavMenu = () => {
  if (navMenu.classList.contains("navbar__menu-active")) {
    navMenu.classList.remove("navbar__menu-active");
    navMenu.classList.add("navbar__menu-hidden");
    iconBurger.classList.remove("opacity-none");
    iconClose.classList.add("opacity-none");
  }
};

navLink.forEach((link) => {
  link.addEventListener("click", closeNavMenu);
});

// for AOS animation
AOS.init();
