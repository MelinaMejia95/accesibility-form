
/*var button = document.querySelector('.button');
var closeModalButton = document.querySelector('.modal__action--negative');
var modal = document.querySelector('.modal');
var backdrop = document.querySelector('.backdrop');
var infoMessage = document.querySelector('#schedule-page__message');
var form = document.querySelector('.schedule-page__form');
var disabledHandle, tabHandle;

function openModal() {
  modal.hidden = false;
  backdrop.hidden = false;
  disabledHandle = ally.maintain.disabled({
    filter: modal,
  });
  tabHandle = ally.maintain.tabFocus({
    context: modal,
  });
}

function closeModal() {
  modal.hidden = true;
  backdrop.hidden = true;
  disabledHandle.disengage();
  tabHandle.disengage();
  infoMessage.hidden = false;
  form.hidden = true;
}

button.addEventListener('click', openModal, false);
closeModalButton.addEventListener('click', closeModal, false);
*/

var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var button = document.querySelector('.button');
var closeModalButton = document.querySelector('.modal__action--negative');


/* button.addEventListener('click', () => {
  modal.classList.add('open');
  backdrop.style.display = 'block';
        setTimeout(() => {
            backdrop.classList.add('open');
        }, 10);
}); */

function openModal() {
  modal.classList.add('open');
  backdrop.style.display = 'block';
        setTimeout(() => {
            backdrop.classList.add('open');
        }, 10);
}

if (closeModalButton) {
  closeModalButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', () => {
  this.closeModal();
});

function closeModal() {
  if (modal) {
      modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
  setTimeout(() => {
      backdrop.style.display = 'none';
  }, 200);
}

const element = document.querySelector('form');
element.addEventListener('submit', (event) => {
  event.preventDefault();
  try {
    const nameInput = document.querySelector('#names');
    const labelNameError = document.querySelector('#namesError');
    validateName(nameInput, labelNameError);
    const lastnameInput = document.querySelector('#lastname');
    const labelLastnameError = document.querySelector('#lastnameError');
    validateName(lastnameInput, labelLastnameError);
    /* const emailInput = document.querySelector('#email');
    const labelEmailError = document.querySelector('#emailError');
    validateEmail(emailInput, labelEmailError); */
    openModal();
  }
  catch (err){
    console.log(err.message)
  }
  
})

function validateName(field, errorField) {
  if(field.value === '' || field.value === undefined ) {
    field.focus();
    throw new Error(`Whooops!' ${field.id} field is empty`);
  } else {
    errorField.hidden = true;
  }
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}