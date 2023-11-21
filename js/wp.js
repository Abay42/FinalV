//alert on wp buttons
let button = document.getElementsByClassName("btn btn-outline-warning mt-0 justify-content-center font-weight-bold");
let text = document.getElementsByClassName("h1 font-weight-bold")

button[0].addEventListener("click", () => {
    alert("You've registered to the course named -> " + text[0].textContent);
})

button[1].addEventListener("click", () => {
    alert("You've registered to the course named -> " + text[1].textContent);
})

button[2].addEventListener("click", () => {
    alert("You've registered to the course named -> " + text[2].textContent);
})

button[3].addEventListener("click", () => {
    alert("You've registered to the course named -> " + text[3].textContent);
})

button[4].addEventListener("click", () => {
    alert("You've registered to the course named -> " + text[4].textContent);
})

//incrementation wp count buttons
var buttons = document.querySelectorAll('.btn-outline-warning');

function incrementCount(wp) {
    var button = wp.target;
    var currentCount = parseInt(button.getAttribute('count'));

    currentCount++;
    button.textContent = currentCount + " People Tried";

    button.setAttribute('count', currentCount);
}

buttons.forEach(function (button) {
    button.addEventListener('click', incrementCount);
});

//contact form and then prompt

function validateForm() {
    var email = document.getElementById("inputEmailAddress").value;
    var password = document.getElementById("inputPassword").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Invalid email address");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    var inputText = prompt("Write your text")
    while (inputText.length > 300) {
        alert("Text you wrote over 300 characters, exactly -> " + inputText.length + "\nTry again please");
        inputText = prompt("Write less then 300 characters now")
    }

    alert("Thank you for your message!!!!")
    return true;
}