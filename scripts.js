document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
    const loginBackBtn = document.getElementById("login-back-btn");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // Handle login form submission
    });

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // Handle signup form submission
    });

    loginBtn.addEventListener("click", () => {
        signupBtn.checked = false;
    });

    signupBtn.addEventListener("click", () => {
        loginBtn.checked = false;
    });

    loginBackBtn.addEventListener("click", () => {
        signupBtn.checked = true;
    });
});loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Handle login form submission
});

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Handle signup form submission
});

loginBtn.addEventListener("click", () => {
    signupBtn.checked = false;
});

signupBtn.addEventListener("click", () => {
    loginBtn.checked = false;
});

loginBackBtn.addEventListener("click", () => {
    signupBtn.checked = true;
});