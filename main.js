const hamburgerMenu = document.querySelector('.hamburger-menu')
const hamburgerNav = document.querySelector('.hamburger-nav')

hamburgerMenu.addEventListener('click', toggleHamburgerMenu)

function toggleHamburgerMenu(){
    hamburgerMenu.classList.toggle('active')
    hamburgerNav.classList.toggle('hidden')
}