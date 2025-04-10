document.addEventListener('DOMContentLoaded', function() {
    // Get the toggle button
    const toggleButton = document.querySelector('.toggle-mode');
    const body = document.body;
    
    // Get the icon
    const modeIcon = toggleButton.querySelector('img');
    
    // Check for saved theme preference or use default
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Set initial theme based on saved preference
    if (currentTheme === 'dark') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        modeIcon.src = 'images/moon.svg';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeIcon.src = 'images/sun.svg';
    }
    
    // Toggle theme when button is clicked
    toggleButton.addEventListener('click', function() {
        if (body.classList.contains('light-mode')) {
            // Switch to dark mode
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            modeIcon.src = 'images/moon.svg';
            localStorage.setItem('theme', 'dark');
        } else {
            // Switch to light mode
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            modeIcon.src = 'images/sun.svg';
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Add click event listeners to pagination numbers
    const paginationNumbers = document.querySelectorAll('.pagination-number');
    
    paginationNumbers.forEach(function(number) {
        number.addEventListener('click', function() {
            // Remove active class from all numbers
            paginationNumbers.forEach(function(num) {
                num.classList.remove('active');
            });
            
            // Add active class to clicked number
            this.classList.add('active');
        });
    });
    
    // Add click functionality to blog cards
    const blogCards = document.querySelectorAll('.blog-post-card');
    
    blogCards.forEach(function(card) {
        card.addEventListener('click', function() {
            // In a real implementation, you would redirect to the blog post page
            console.log('Blog post clicked');
        });
    });
});