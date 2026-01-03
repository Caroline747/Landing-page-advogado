// Initialize Bootstrap accordion
document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('[data-bs-toggle="collapse"]');
    
    accordionItems.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-bs-target');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.classList.toggle('show');
            }
        });
    });
});