// Get the modal
var logInModal = document.getElementById('loginModal');

// Get the button that opens the modal
var logInbtn = document.getElementById("logInBtn");

// Get the signup modal
var signUpModal = document.getElementById('signupModal');

// Get the "Sign Up" button by its ID
var signUpBtn = document.getElementById("signUpBtn");

// Get the <span> element that closes the modal
var logInCloseBtn = document.getElementsByClassName("close")[0];

// Get the <span> element that closes the modal
var signUpCloseBtn = document.getElementsByClassName("close")[1];

var currentUrl = window.location.href;

// When the user clicks the button, open the modal 
logInbtn.onclick = function() {
    logInModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
signUpCloseBtn.onclick = function() {
    signUpModal.style.display = "none";
}

// When the user clicks the "Sign Up" button, open the modal 
signUpBtn.onclick = function() {
    signUpModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
logInCloseBtn.onclick = function() {
    logInModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == logInModal) {
        logInModal.style.display = "none";
    }
    if (event.target == signUpModal) {
        signUpModal.style.display = "none";
    }
}

document.getElementById('logInForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'admin@mail.ru' && password === 'admin2023') {
        window.location.href = 'admincopy.html';
    } else {
        window.history.back(); //previous page
    }
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailHelp = document.getElementById('emailHelpSign');
    const passwordHelp = document.getElementById('passwordHelpSign');

    let valid = true;

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(emailInput.value)) {
        emailHelp.textContent = 'Invalid email format. Please enter a valid email address.';
        emailHelp.style.display = 'block';
        valid = false;
    } else {
        emailHelp.style.display = 'none';
    }

    // Password validation
    if (passwordInput.value.length < 8) {
        passwordHelp.textContent = 'Password must be at least 8 characters long.';
        passwordHelp.style.display = 'block';
        valid = false;
    } else {
        passwordHelp.style.display = 'none';
    }

    if (valid) {
        const user = { name, surname, email, password };

        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        alert("You succesfully registered, now log in please");
        signUpModal.style.display = "none";
        logInModal.style.display = "block";
    }
});