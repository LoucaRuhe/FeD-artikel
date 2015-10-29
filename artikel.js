var aanKnop = document.querySelector('body > header > nav > img');
var navUl = document.querySelector('body > header > nav > ul');

document.querySelector('body > header > nav > img').addEventListener('click', function() {
  navUl.classList.toggle('actief');
});
