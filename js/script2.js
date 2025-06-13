'use strict'; // Aktiverer streng tilstand for at forhindre potentielle fejl og forbedre kodekvaliteten

// Tilføjer en klik-eventlistener til alle FAQ-spørgsmål
document.querySelectorAll('.faq-question').forEach(question => {
    // Eventlistener: Når et FAQ-spørgsmål klikkes, udføres denne funktion
    question.addEventListener('click', () => {
        // Få fat i forældre-elementet, som repræsenterer hele FAQ-item
        const faqItem = question.parentElement; 

        // Toggler klassen 'active' for at vise eller skjule svaret
        faqItem.classList.toggle('active'); 

        // Opdaterer ikonet baseret på om FAQ-item er aktiv eller ej
        const icon = faqItem.querySelector('.faq-icon'); 
        icon.textContent = faqItem.classList.contains('active') ? '-' : '+'; // Viser '-' hvis aktiv, '+' hvis inaktiv
    });
});