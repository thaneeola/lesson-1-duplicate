const input__text = document.querySelectorAll(".input__text");
const button = document.querySelector("#checkout-btn");

button.addEventListener("click", input__validation);

function input__validation() {
    // event.preventDefault();
    input__text.forEach(input => {
        if (input.value === "" || input.value == null) {
            input.style.border = "2px solid #CD2C2C";
        } 
    });
}

