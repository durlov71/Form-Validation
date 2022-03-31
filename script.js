const form = document.querySelector('#form');
const message = document.querySelector('#message');
const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');

let isValid = false;
let passMatch = false;

function validateForm() {
    isValid = form.checkValidity();
    if (!isValid) {
        message.innerText = "Please fill the Form correctly";
        message.style.color = "red"
    } else {
        if (password1.value === password2.value) {
            passMatch = true;
            password1.style.borderColor = "green"
            password2.style.borderColor = "green"
        } else {
            message.innerText = "password doesn't match";
            message.style.color = "red"
            password1.style.borderColor = "red"
            password2.style.borderColor = "red"
        }
    }
    if (isValid && passMatch) {
        message.innerText = "Successfully Registered";
        message.style.color = "green"
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm()
    if (isValid && passMatch) {
        const user = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            website: form.website.value,
            password: form.password.value,
        }
        console.log(user);
    }
})