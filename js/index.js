alert("hello Our site is having issues with javascript");
let dive = document.getElementById("toggle");
let link = document.getElementById("link");
console.log(dive, link);
dive.addEventListener("click", show);
function show() {
  if (link.style.display == "flex") {
    link.style.display = "none";
  } else {
    link.style.display = "flex";
  }
}
