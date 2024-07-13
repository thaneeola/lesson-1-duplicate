let dive = document.getElementById("toggle");
let link = document.getElementById("link");
let blurEffect = document.querySelector(".blurEffect");
dive.addEventListener("click", show);

function show() {
  if (link.style.display == "flex") {
    link.style.display = "none";
    blurEffect.classList.remove("blur");
  } else {
    link.style.display = "flex";
    blurEffect.classList.add("blur");
  }
}

const heroSection = document.querySelector(".body-text");
const images = [
  "url('./img/EAR3.png')",
  "url('./img/image (1).png')",
  "url('./img/EAR.png')",
];
let currentIndex = 0;

function changeBackgroundImage() {
  heroSection.style.backgroundImage = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
  // console.log(currentIndex);
}
setInterval(changeBackgroundImage, 5000);

const addButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minu");
const counts = document.querySelectorAll(".count");
const num = [1, 2, 3, 4, 5, 6];

counts.forEach((count, index) => {
  let counter = 0;
  count.innerHTML = num[counter];

  addButtons[index].addEventListener("click", function () {
    if (counter < num.length - 1) {
      counter++;
      count.innerHTML = num[counter];
    }
  });

  minusButtons[index].addEventListener("click", function () {
    if (counter > 0) {
      counter--;
      count.innerHTML = num[counter];
    }
  });
});

import { ScrollMagic } from 'scrollmagic';

// Create a ScrollMagic controller
const controller = new ScrollMagic.Controller();

// Select the elements you want to animate
const hero = document.querySelector('.body-text');
const containers = document.querySelectorAll('.scroll-container');

// Create a scene for the hero section
new ScrollMagic.Scene({
  triggerElement: hero,
  triggerHook: 0.5, // trigger when the element is 50% in view
  duration: 1000, // animation duration
})
.setClassToggle(hero, 'animate-hero') // add class "animate-hero" to heroSection
.addTo(controller);

// Create scenes for the containers
containers.forEach((container) => {
  new ScrollMagic.Scene({
    triggerElement: container,
    triggerHook: 0.5, // trigger when the element is 50% in view
    duration: 1000, // animation duration
  })
  .setClassToggle(container, 'animate-container') // add class "animate-container" to container
  .addTo(controller);
});

// Add a global scroll handler
controller.scrollTo(function (newScrollPos) {
  console.log(`Scrolling to ${newScrollPos}...`);
});

// Add a throttle to the global scroll handler
const throttledScrollHandler = _.throttle(controller.scrollTo, 200);
window.addEventListener('scroll', throttledScrollHandler);
// addButtons.addEventListener("click", add_minus);
// minusButtons.addEventListener("click", minus_minus);

// let cartItems = [
//   {
//     productName: "speaker",
//     productImage: "image"
//   },
//   {
//     productName: "headset",
//     productImage: "image"
//   }
// ]

// console.log(cartItems[0].productName);

// const singleitem = cartItems.find(item => item.productName == "speaker" )

// ScrollReveal().reveal(".headline");

// _.defaults({ a: 1 }, { a: 3, b: 2 });
// → { 'a': 1, 'b': 2 }
// _.partition([1, 2, 3, 4], (n) => n % 2);
// → [[1, 3], [2, 4]]
