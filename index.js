// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Sample event data
    const events = [
        {
            id: 1,
            title: "Python Workshop",
            club: "coding",
            date: "2025-11-15",
            description: "Learn Python programming basics in this hands-on workshop. Perfect for beginners!",
            image: "https://tse1.mm.bing.net/th?id=OIP.8RQ4lmoSCxIuNks__5v1-gHaFj&pid=Api&P=0&h=180",
            location: "CS Lab 101",
            time: "3:00 PM - 5:00 PM"
        },
        {
            id: 2,
            title: "Flash Mob",
            club: "cine",
            date: "2025-11-18",
            description: "Participate in our exciting flash mob event at the college courtyard. Dance practice sessions every Wednesday.",
            image: "https://tse4.mm.bing.net/th?id=OIP.aw05xo6C4F54SFcGk5ZtKAAAAA&pid=Api&P=0&h=180",
            location: "College Courtyard",
            time: "4:30 PM - 6:00 PM"
        },
        {
            id: 3,
            title: "Dev Challenge",
            club: "GDG",
            date: "2025-11-20",
            description: "Join us for a day of coding challenges and competitions. Prizes for the top teams!",
            image: "https://tse1.mm.bing.net/th?id=OIP.96mv278bQb9hSiwmUSlrbwHaD3&pid=Api&P=0&h=180",
            location: "IT Center",
            time: "10:00 AM - 4:00 PM"
        },
        {
            id: 4,
            title: "Lolo Band",
            club: "music",
            date: "2025-11-22",
            description: "Lolo Band is the heartbeat of campus music culture. We specialize in live performances at college events, fests, and local venues.",
            image: "https://tse1.mm.bing.net/th?id=OIP.-vWECILPHw9eqc3fDkr2lQHaEK&pid=Api&P=0&h=180",
            location: "Auditorium",
            time: "6:00 PM - 8:00 PM"
        }
    ];

    // Display events
    function displayEvents() {
        const eventsContainer = document.querySelector('.events-container');
        eventsContainer.innerHTML = '';
        
        events.forEach(event => {
            const clubNames = {
                coding: "Coding Club",
                cine: "Cine Club",
                GDG: "GDG Club",
                music: "Music Club"
            };
            
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';
            eventCard.innerHTML = `
                <div class="event-image">
                    <img src="${event.image}" alt="${event.title}">
                </div>
                <div class="event-details">
                    <span class="event-date">${formatDate(event.date)} | ${event.time}</span>
                    <h3 class="event-title">${event.title}</h3>
                    <span class="event-club">${clubNames[event.club]}</span>
                    <p class="event-description">${event.description}</p>
                    
                </div>
            `;
            // <div class="event-actions">
            //             <button class="btn register-btn">Register</button>
            //             <a href="#" class="view-details">View Details</a>
            // </div>
            eventsContainer.appendChild(eventCard);
        });
    }

    // Format date
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    // Initialize
    displayEvents();

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    const authButtons = document.querySelector('.auth-buttons');
    const collegeLogo = document.querySelector('.college-logo');

    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        authButtons.classList.toggle('show');
        collegeLogo.classList.toggle('show');
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('nav a, .quick-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navMenu.classList.remove('show');
            authButtons.classList.remove('show');
            collegeLogo.classList.remove('show');
        });
    });

    // Search functionality
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', function() {
        const searchInput = document.querySelector('.search-input');
        alert(`Searching for: ${searchInput.value}`);
        // In a real app, you would filter events based on search input
    });

    // Login button
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.addEventListener('click', function() {
        alert('Login functionality will be implemented later');
    });

    // Register buttons
    // document.addEventListener('click', function(e) {
    //     if (e.target.classList.contains('register-btn')) {
    //         alert('Registration functionality will be implemented later');
    //     }
    // });

    // Get Started button
    const getStartedBtn = document.querySelector('.get-started-btn');
    getStartedBtn.addEventListener('click', function() {
        document.querySelector('#upcoming').scrollIntoView({
            behavior: 'smooth'
        });
    });
});