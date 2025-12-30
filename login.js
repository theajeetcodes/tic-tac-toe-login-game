const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const errorMsg = document.getElementById("errorMsg");

const correctUser = "admin";
const correctPass = "1234";

loginBtn.addEventListener("click", () => {
    if (username.value === correctUser && password.value === correctPass) {
        window.location.href = "game.html";
    } else {
        errorMsg.textContent = "Invalid username or password";
    }
});
