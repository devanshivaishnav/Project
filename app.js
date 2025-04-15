const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const form = document.querySelector('form');
const passwordInput = document.getElementById('password');
const retypePasswordInput = document.getElementById('retype-password');

if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        const password = passwordInput.value;
        const retypePassword = retypePasswordInput.value;

        if (password !== retypePassword) {
            alert("Passwords do not match! Please re-enter."); // Show alert box
        } else {
            window.location.href = 'index.html'; // Redirect if passwords match
        }
    });
}