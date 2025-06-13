'use strict'; // Aktiverer streng tilstand for at forhindre potentielle fejl og forbedre kodekvaliteten

// Henter menu-knappen og navigation-links fra DOM
const menu = document.querySelector('.menu'); // Refererer til menu-knappen, der bruges til at åbne/lukke navigationen
const navLinks = document.querySelector('.nav-links'); // Refererer til containeren, der indeholder navigation-links

// Kontrollerer om menu og navLinks eksisterer i DOM
if (menu && navLinks) {
    // Tilføjer en klik-eventlistener til menu-knappen
    menu.addEventListener('click', () => {
        // Toggler klassen 'active' på navigation-links for at vise eller skjule dem
        navLinks.classList.toggle('active');
    });
} else {
    // Logger en fejl i konsollen, hvis menu eller navLinks ikke blev fundet i DOM
    console.error('menu eller nav-links blev ikke fundet i DOM.');
}