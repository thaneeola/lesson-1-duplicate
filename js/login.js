const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector(".signup-link a");
const loginText = document.querySelector(".title-text .login");
const signupText = document.querySelector(".title-text .signup");

signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});

loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});

signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});

// Form submission handlers
loginForm.onsubmit = ((e) => {
    e.preventDefault();
    if (validateForm(loginForm)) {
        window.location.href = "landing.html";
    }
});

signupForm.onsubmit = ((e) => {
    e.preventDefault();
    if (validateForm(signupForm)) {
        window.location.href = "landing.html";
    }
});

// Function to validate form inputs
function validateForm(form) {
    let isValid = true;
    form.querySelectorAll('input[required]').forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    return isValid;
}

// Social media login handlers
function socialLogin(platform) {
    console.log(platform + " login clicked");
    // For demonstration, redirect to landing.html
    window.location.href = "landing.html";
}

// Add click event listeners to social media buttons
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = e.currentTarget.classList[0];
        socialLogin(platform);
    });
});