document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Logout functionality
    const logoutBtn = document.querySelector('.logout-btn');
    logoutBtn.addEventListener('click', function() {
        // In a real app, this would handle logout logic
        alert('You have been logged out');
        window.location.href = 'index.html';
    });

    // Event card click handling (except for buttons and links)
    document.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on a button or link
            if (!e.target.classList.contains('join-btn') && 
                !e.target.classList.contains('view-details') &&
                e.target.tagName !== 'A' && 
                e.target.tagName !== 'BUTTON') {
                // In a real app, this would open event details
                alert('Opening event details');
            }
        });
    });
});