//  alert("hello Our site is having issues with javascript");
let dive = document.getElementById("toggle");
let link = document.getElementById("link");
let blurEffect = document.querySelector(".blurEffect");
dive.addEventListener("click", show);
function show() {
  if (link.style.display == "flex") {
    link.style.display = "none";
    blurEffect.classList.remove("blur");
    console.log(blurEffect);
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

// import image1 from './img/Bitmap (1).png';
// import image2 from './img/speaker.png'
// import image3 from './img/profile.png'

// Change background image every 5 seconds
// const heroImage = document.querySelector('.body-text');

// const images = [
//   'https://source.unsplash.com/1600x900/?speaker,dark',
//   'https://source.unsplash.com/1600x900/?earphones,dark',
//   'https://source.unsplash.com/1600x900/?headset,dark'
// ];
// let currentIndex = 0;
// let fadeInterval;

// function fadeOutImage() {
//   heroImage.style.opacity = 1;
//   const fadeEffect = setInterval(() => {
//     heroImage.style.opacity -= 0.1;
//     if (heroImage.style.opacity <= 0) {
//       clearInterval(fadeEffect);
//       changeBackgroundImage();
//       fadeInImage();
//     }
//   }, 50);
// }

// function fadeInImage() {
//   heroImage.style.opacity = 0;
//   const fadeEffect = setInterval(() => {
//     heroImage.style.opacity = parseFloat(heroImage.style.opacity) + 0.1;
//     if (heroImage.style.opacity >= 1) {
//       clearInterval(fadeEffect);
//       fadeInterval = setTimeout(fadeOutImage, 1000);
//     }
//   }, 50);
// }

// function changeBackgroundImage() {
//   heroImage.style.backgroundImage = `url('${images[currentIndex]}')`;
//   currentIndex = (currentIndex + 1) % images.length;
// }

// changeBackgroundImage();
// fadeInImage();
