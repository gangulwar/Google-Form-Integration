function validatePassword() {
  const str = document.getElementById("password").value;
  if (str.length < 7) {
    alert("Password should contain at least one special character, one digit, and one capital letter");
    document.getElementById("password").value = "";
    return false;
  }
  const regex = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*\d)(?=.*[A-Z])/;
  if (!regex.test(str)) {
    alert("Password should contain at least one special character, one digit, and one capital letter");
    document.getElementById("password").value = "";
    return false;
  }
  return true;
}


function validatePhoneNumber() {
  // Remove all non-numeric characters
  const cleanNumber = document.getElementById("phone").value;

  if (/\D/.test(cleanNumber)) {
    alert('Phone number should contain only numeric characters');
    document.getElementById("phone").value = "";
  }
  if (cleanNumber.length !== 10) {
    alert('Phone number should be 10 digits long');
    document.getElementById("phone").value = "";
  }
  if (/^[01]/.test(cleanNumber)) {
    alert('Phone number should not start with 0 or 1');
    document.getElementById("phone").value = "";
    return false;
  }

  
  return true;
}


function validateFirstName() {
  const firstNameInput = document.getElementById("fname");
  const firstName = firstNameInput.value;

  if (!firstName) {
    alert("Please enter your first name");
    return false;
  }

  if (!/^[a-zA-Z]+$/.test(firstName)) {
    alert("First name can only contain alphabets");
    firstNameInput.value = "";
    return false;
  }
}


let emailValidated = false;
let usernameValidated = false;

function validateEmail() {
  if (emailValidated) {
    return;
  }

  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  if (!email) {
    alert("Please enter an email address");
    emailValidated = true;
    return false;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email address");
    document.getElementById("email").value = "";
    emailValidated = true;
    return false;
  }

  emailValidated = true;
}

function validateUsername() {
  if (usernameValidated) {
    return;
  }

  var username = document.getElementById("username").value;
  if (username.length < 6) {
    alert("Username must be at least 6 characters long.");
    document.getElementById("username").value = "";
    usernameValidated = true;
    return false;
  }

  usernameValidated = true;
}

const form = document.querySelector('#my-form');
    form.addEventListener('submit', submitForm);

    async function submitForm(event) {
        event.preventDefault();

        const formData = new FormData(form);

        await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdKaRFIimK99RJTk8laTEPhJ6Qz9-Bq8FmYeLjpH-CjkkUxQA/formResponse', {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        });

        const successMessage = document.querySelector('#success-message');
        successMessage.style.display = 'block';
        const element = document.querySelector('#success-message');
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        form.reset();
    }


