const loginForm = document.getElementById('loginForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('pass');
const confirmPasswordInput = document.getElementById('cnPass');

loginForm.addEventListener('submit', function (e) {

    e.preventDefault();

    const nameValue = nameInput.value.trim();
    const passwordValue = passwordInput.value;
    const confirmPasswordValue = confirmPasswordInput.value;


    if (passwordValue !== confirmPasswordValue) {
        alert("Password match nahi ho rahe hain!");
        return; 
    }

    window.location.href = "index1.html"; 
});