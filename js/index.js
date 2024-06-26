//  alert("hello Our site is having issues with javascript");
let dive = document.getElementById("toggle");
let link = document.getElementById("link");
let cart = document.getElementById("cart-icon")
let cart__show = document.getElementById("cart__show")
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

function carts(){
  if(cart__show.style.display == "none"){
    cart__show.style.display = "block";
  } else {
    cart__show.style.display = "none";
  }
}
cart.addEventListener("click", carts)
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

const add = document.querySelector(".plus")
const minus = document.querySelector(".minu")
const count = document.querySelector(".count")
const num = [1, 2, 3, 4, 5, 6]
let counter = 1
count.innerHTML = num[0]

function add_minus() {
    if (counter < num.length) {
        count.innerHTML = num[counter]
        counter++
    }
}

function minus_minus() {
    if (counter > 0) {
        counter--
        count.innerHTML = num[counter]
    }
}

add.addEventListener("click", add_minus)
minus.addEventListener("click", minus_minus)

let cartItems = [
  {
    productName: "speaker",
    productImage: "image"
  },
  {
    productName: "headset",
    productImage: "image"
  }
]

console.log(cartItems[0].productName);

// const singleitem = cartItems.find(item => item.productName == "speaker" )