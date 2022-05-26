const menu_button = document.getElementsByClassName('menu-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

menu_button.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

function fun() {  
  window.location.href='Login.html'
};
