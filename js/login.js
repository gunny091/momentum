const hi = document.querySelector("#hi")
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input:first-child")

const HIDDEN = "hidden";
const NAME_KEY = "username";

function loginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN);

    const username = loginInput.value;
    localStorage.setItem(NAME_KEY, username);
    paintHi(username);

}

function paintHi(username) {
    hi.innerText = `Hello, ${username}`;
    hi.classList.remove(HIDDEN);
}

const savedUsername = localStorage.getItem(NAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", loginSubmit);
} else {
    paintHi(savedUsername);
}

hi.addEventListener("click", (event) => {
    if (confirm("logout?")) {
        localStorage.clear(NAME_KEY);
        location.reload();
    }
})