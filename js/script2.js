document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement; // Få fat i forældre-elementet
        faqItem.classList.toggle('active'); // Tilføj/fjern klassen 'active'
   
        const icon = faqItem.querySelector('.faq-icon');
        icon.textContent = faqItem.classList.contains('active') ? '-' : '+';
    });
});