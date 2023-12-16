// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika hamburger menu di klik
document.querySelector('#coffee-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};
// Klik diluar sidebar untuk menghilangkan Nav
const hamburger = document.querySelector('#coffee-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})