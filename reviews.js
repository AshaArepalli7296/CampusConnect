// Rating System for Reviews Page
if (document.querySelector('.rating-input')) {
    const stars = document.querySelectorAll('.rating-input i');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            
            // Update star display
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('active');
                    s.classList.remove('far');
                    s.classList.add('fas');
                } else {
                    s.classList.remove('active');
                    s.classList.remove('fas');
                    s.classList.add('far');
                }
            });
            
            // In a real app, you would store the rating value
            console.log(`User rated: ${rating} stars`);
        });
    });

    // Review Form Submission
    const reviewForm = document.querySelector('.review-form');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your review! It will be visible after moderation.');
            reviewForm.reset();
            
            // Reset stars
            stars.forEach(star => {
                star.classList.remove('active');
                star.classList.remove('fas');
                star.classList.add('far');
            });
        });
    }
}