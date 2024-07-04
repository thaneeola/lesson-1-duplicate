let dive = document.getElementById("toggle");
let link = document.getElementById("link");
let cart = document.getElementById("cart-icon");
let cart__show = document.getElementById("cart__show");
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

function carts() {
  if (cart__show.style.display == "none") {
    cart__show.style.display = "block";
  } else {
    cart__show.style.display = "none";
  }
}
cart.addEventListener("click", carts);
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
