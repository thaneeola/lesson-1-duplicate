document.addEventListener("DOMContentLoaded", function () {

const input__text = document.querySelectorAll(".input__text");
const button = document.querySelector("#checkout-btn"), ordered__section = document.querySelector("#ordered__section")
let blurEffects = document.querySelector(".blurEffect");
const cart_total = document.querySelector(".cart-pad h2")
const checkoutTotal = document.querySelector("#total")
const shipping = document.querySelector(".shipping")


button.addEventListener("click", input__validation);

function input__validation() {
    // event.preventDefault();
    input__text.forEach(input => {
        if (input.value === "" || input.value == null) {
            input.style.border = "2px solid #CD2C2C";
            
        } else{
            ordered__section.style.display = "flex"
            blurEffects.classList.add("blur");
        }
    });
}
checkoutTotal.textContent = cart_total.textContent.replace(/[^\d\.]/g, ''); // remove non-numeric characters
const checkoutTotalValue = Number(checkoutTotal.textContent.replace('$', '')); // remove dollar sign
const shippingValue = checkoutTotalValue / 7;
shipping.textContent = `${shippingValue.toFixed(2)}`;

})
