const form = document.querySelector("form");
const submitButton = document.querySelector("button");
const input = document.querySelectorAll("input");
const [firstName, lastName, email, password] = input;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  //check firstName
  if (firstName.value.trim() === "") {
    //show error
    showErrorFor(firstName, "First name cannot be empty");
  } else {
    showSuccessFor(firstName);
  }

  //check lastName
  if (lastName.value.trim() === "") {
    showErrorFor(lastName, "Last name cannot be empty");
  } else {
    showSuccessFor(lastName);
  }

  //check email
  if (email.value.trim() === "") {
    showErrorFor(email, "Email cannot be empty");
  } else {
    showSuccessFor(email);
  }

  //check password
  if (password.value === "") {
    showErrorFor(password, "Password cannot be empty");
  } else if (password.value.length < 5) {
    showErrorFor(password, "Password too short");
  } else if (password.value.trim() === "password") {
    showErrorFor(password, " Can't set password to 'password'");
  } else {
    showSuccessFor(password);
  }
}

function showErrorFor(input, message) {
  const formControl = input.parentElement; //form control for the input type
  const errorMessage = formControl.querySelector(".error__message");

  errorMessage.innerText = message;
  formControl.classList.add("error");
}

function showSuccessFor(input) {
  const formControl = input.parentElement; //form control for the input type
  const errorMessage = formControl.querySelector(".error__message");

  formControl.classList.remove("error");
  errorMessage.style.display = "none";
}

// function throwError() {
//     if(firstName.value.trim() === ""){

//     }
// }
