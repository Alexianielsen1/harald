const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');

if (menu && navLinks) {
    menu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
} else {
    console.error('menu eller nav-links blev ikke fundet i DOM.');
}