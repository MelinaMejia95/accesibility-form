var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var button = document.querySelector('.button');
var closeModalButton = document.querySelector('.modal__action--negative');

button.addEventListener('click', () => {
  modal.classList.add('open');
  backdrop.style.display = 'block';
        setTimeout(() => {
            backdrop.classList.add('open');
        }, 10);
});

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
