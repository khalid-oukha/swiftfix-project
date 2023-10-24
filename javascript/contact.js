
/*  validation contact form */
const form = document.querySelector(".form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const select = document.querySelector("#select");
/*  get all spans */
const firstnameError = document.querySelector("#firstname-error");
const lastnameError = document.querySelector("#lastname-error");
const phoneError = document.querySelector("#phone-error");
const emailError = document.querySelector("#email-error");
const selectError = document.querySelector("#select-error");

/*  regex form for inputs */
const nameRegex = /^[A-Za-z]+$/;
const phoneRegex = /^\d{10}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function valideInput() {
  const nameValue = firstName.value.trim();
  const lastnameValue = lastName.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  const selectValue = select.value.trim();
  if (nameValue === "" || !nameRegex.test(nameValue)) {
    firstnameError.textContent = "first name is invalide";
  } else {
    firstnameError.textContent = "";
  }

  if (lastnameValue === "" || !nameRegex.test(lastnameValue)) {
    lastnameError.textContent = "last name invalide";
  } else {
    lastnameError.textContent = "";
  }

  if (phoneValue === "" || !phoneRegex.test(phoneValue)) {
    phoneError.textContent = "phone number is invalide";
  } else {
    phoneError.textContent = "";
  }

  if (emailValue === "" || !emailRegex.test(emailValue)) {
    emailError.textContent = "email is invalide";
  } else {
    emailError.textContent = "";
  }
  if (selectValue === "") {
    selectError.textContent = "select topic is invalide";
  } else {
    selectError.textContent = "";
  }
}
const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("valid form");
  valideInput();
});
