document.addEventListener('DOMContentLoaded', (event) => {
    console.log('JavaScript is successfully linked and running!');
    
    // Example: Add a click event listener to all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('JavaScript is successfully linked and running!');
    
    // Example: Add a click event listener to all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    });

    // Add flip effect to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('is-flipped');
        });
    });
});