var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal-overlay');
var button = document.querySelector('.button');
var closeModalButton = document.querySelector('.modal__action--negative');
var lastFocus;
var modalOpen = false;
const form = document.querySelector('form');
const elements = [
  {
    field: 'name',
    labelError: 'nameError',
    errorMessage: 'Please enter your name'
  },
  {
    field: 'lastname',
    labelError: 'lastnameError',
    errorMessage: 'Please enter your lastname'
  },
  {
    field: 'email',
    labelError: 'emailError',
    errorMessage: 'Make sure your email is correct'
  },
  {
    field: 'city',
    labelError: 'cityError',
    errorMessage: 'Please select your city'
  }
];
document.querySelector('#main-label').focus();

// restrict tab focus on elements only inside modal window
window.addEventListener('keypress', () => focusRestrict());

//open modal only when all fields are valid
form.addEventListener('submit', (event) => {
  event.preventDefault();
  try {
    elements.map((el) => {
      if (el.field !== "email") {
        validateFields(el.field, el.labelError, el.errorMessage);
      } else {
        validateEmail(el.field, el.labelError, el.errorMessage);
      }
    });
    openModal();
  }
  catch (err) {
    console.log(err.message)
  }
});

openModal = () => {
  modalOpen = true;
  modal.setAttribute("aria-hidden", false);
  modal.setAttribute('tabindex', '0');
  document.querySelector('#modal-title').setAttribute('tabindex', '0');
  document.querySelector('#modal-title').focus();
}

closeModal = () => {
  modal.setAttribute("aria-hidden", true);
  lastFocus.focus();
  modalOpen = false;
}

focusRestrict = (event) => {
  document.addEventListener('focus', function (event) {
    if (modalOpen && !modal.contains(event.target)) {
      event.stopPropagation();
      modal.focus();
    }
  }, true);
}

showThanksMessage = () => {
  modal.setAttribute("aria-hidden", true);  
  form.hidden = true;
  const thanksMessage = document.querySelector('#schedule-page__message');
  thanksMessage.hidden = false;
  thanksMessage.setAttribute('tabindex', '0');
  thanksMessage.focus();
}

//validate fields are not empty
validateFields = (field, errorField, message) => {
  const inputElement = document.querySelector(`#${field}`);
  const labelElement = document.querySelector(`#${errorField}`);
  if (inputElement.value === '' || inputElement.value === undefined) {
    inputElement.focus();
    labelElement.innerHTML = message;
    labelElement.hidden = false;
    throw new Error(`Whooops!' ${inputElement.id} field is empty`);
  } else {
    labelElement.hidden = true;
  }
}

//validate email structure
validateEmail = (email, errorField, message) => {
  const emailInput = document.querySelector(`#${email}`);
  const labelEmailError = document.querySelector(`#${errorField}`);
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(emailInput.value)) {
    emailInput.focus();
    labelEmailError.innerHTML = message;
    labelEmailError.hidden = false;
    throw new Error(`Whooops!' Email field is empty`);
  } else {
    labelEmailError.hidden = true;
  }
}

//onChange handler
onChangeHandler = (input, errorLabel) => {
  lastFocus = document.activeElement;
  if(document.querySelector(`#${input}`).value !== undefined) {
    document.querySelector(`#${errorLabel}`).hidden = true;
  }
}

//onFocusHandler
onFocusHandler = (id) => {
  lastFocus = document.querySelector(`#${id}`);
  if(document.querySelector(`#${id}Error`)) {
    document.querySelector(`#${id}Error`).hidden = true;
  }
}

onBlurHandler = (errorLabel) => {
  if(document.querySelector(`#${errorLabel}`)) {
    document.querySelector(`#${errorLabel}`).hidden = true;
  }
}