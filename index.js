var navButton = document.querySelector('.menu-button');
navButton.addEventListener('click', function() {
    let expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    let menu = document.querySelector('#menu-list');
    menu.hidden = !menu.hidden;
});