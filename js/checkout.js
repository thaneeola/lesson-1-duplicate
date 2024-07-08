document.addEventListener("DOMContentLoaded", function () {
  // Checkout form validation
  const input__text = document.querySelectorAll(".input__text");
  const button = document.querySelector("#checkout-btn");
  const ordered__section = document.querySelector("#ordered__section");
  let blurEffects = document.querySelector(".blurEffect");
  const cart_total = document.querySelector(".cart-pad h2");
  const checkoutTotal = document.querySelector("#total");
  const shipping = document.querySelector(".shipping");

  button.addEventListener("click", input__validation);

  function input__validation(event) {
    event.preventDefault();

    let allValid = true;

    input__text.forEach((input) => {
      if (input.value === "" || input.value == null) {
        input.style.border = "2px solid #CD2C2C";
        allValid = false;
      } else {
        input.style.border = ""; // Reset border if input is valid
      }
    });

    if (allValid) {
      ordered__section.style.display = "flex";
      blurEffects.classList.add("blur");
      // Clear the cart
      let cart = [];
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCart();
      // Remove cart items from DOM
      const cartItems = document.querySelectorAll(".cart-item");
      cartItems.forEach((item) => item.remove());
    }
  }

  // Radio button event listeners
 

  // Calculate totals
  checkoutTotal.textContent = `$${Number(cart_total.textContent.replace(/[^\d\.]/g, ""))}`;
  const checkoutTotalValue = Number(checkoutTotal.textContent.replace("$", ""));
  const shippingValue = checkoutTotalValue / 7;
  shipping.textContent = `$${shippingValue.toFixed(2)}`;

  const grandTotals = document.querySelectorAll(".grandTotal");
  grandTotals.forEach((grandtotal) => {
    grandtotal.textContent = `$${(checkoutTotalValue + shippingValue + 1079).toFixed(2)}`;
  });
});