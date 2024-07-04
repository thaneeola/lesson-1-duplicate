document.addEventListener("DOMContentLoaded", function () {
  const addToCartBtn = document.querySelector(".buttons");
  let cartShow = document.getElementById("cart__show");
  const cartItemCount = document.querySelector(".cart-header h2");
  const cartItems = document.querySelector(".cart__show");
  const cartTotal = document.querySelector(".cart-pad h2");
  const removeAllBtn = document.querySelector(".cart-header a");
  const productImage = document.querySelector(".speak")?.src;
  let itemPrice = document.querySelector("#Price")?.textContent;
  let itemName = document.querySelector("#itemName")?.textContent;
  let productWrapper = document.querySelector(".product-wrapper");

  // Clean and parse the item price
  if (itemPrice) {
    itemPrice = itemPrice.replace(/[^\d.-]/g, ""); // Remove any non-numeric characters except decimal point and minus sign
    itemPrice = parseFloat(itemPrice);
    if (isNaN(itemPrice)) {
      console.error(
        "Failed to parse item price:",
        document.querySelector("#Price").textContent
      );
      itemPrice = 0; // Set a default value or handle the error as appropriate
    }
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function updateCart() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    cartItemCount.textContent = `CART (${totalItems})`;
    cartTotal.textContent = `$${totalPrice}`;

    // Remove existing cart items
    const existingItems = cartShow.querySelectorAll(".cart-item");
    existingItems.forEach((item) => item.remove());

    // Add updated cart items
    cart.forEach((item) => {
      const cartItemHTML = `
            <div class="cart-item" data-id="${item.id}">
              <div class="item-image">
                <img src="${item.image}" alt="${item.name}" />
              </div>
              <div class="item-details">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
              </div>
              <section class="add">
                <span class="minu">-</span>
                <p class="count">${item.quantity}</p>
                <span class="plus">+</span>
              </section>
            </div>
          `;
      cartShow.insertAdjacentHTML("afterbegin", cartItemHTML);
    });

    attachCartItemListeners();
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function attachCartItemListeners() {
    document.querySelectorAll(".cart-item .minu").forEach((btn) => {
      btn.addEventListener("click", () =>
        updateQuantity(btn.closest(".cart-item").dataset.id, -1)
      );
    });
    document.querySelectorAll(".cart-item .plus").forEach((btn) => {
      btn.addEventListener("click", () =>
        updateQuantity(btn.closest(".cart-item").dataset.id, 1)
      );
    });
  }

  function updateQuantity(id, change) {
    const item = cart.find((item) => item.id === id);
    if (item) {
      item.quantity += change;
      if (item.quantity <= 0) {
        cart = cart.filter((item) => item.id !== id);
      }
      updateCart();
    }
  }

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      const product = {
        id: "X99MK2",
        name: itemName,
        price: itemPrice,
        image: productImage,
        quantity: 1,
      };

      const existingItem = cart.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push(product);
      }

      updateCart();
      // Removed: cartShow.style.display = 'block';
    });
  }

  removeAllBtn.addEventListener("click", (e) => {
    e.preventDefault();
    cart = [];
    updateCart();
  });

  // Initially update the cart to reflect any existing items
  updateCart();
});
