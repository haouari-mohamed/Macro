// Theme switching functionality
document.addEventListener('DOMContentLoaded', () => {
    // Create floating buttons container
    const floatingButtons = document.createElement('div');
    floatingButtons.className = 'floating-buttons';
    document.body.appendChild(floatingButtons);

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Create and append theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'floating-button theme-toggle';
    themeToggle.setAttribute('aria-label', 'Switch Theme');
    themeToggle.innerHTML = `<i class="fas ${savedTheme === 'dark' ? 'fa-sun' : 'fa-moon'}"></i>`;
    floatingButtons.appendChild(themeToggle);

    // Create and append back to top button
    const backToTop = document.createElement('button');
    backToTop.className = 'floating-button back-to-top';
    backToTop.setAttribute('aria-label', 'Back to Top');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    floatingButtons.appendChild(backToTop);

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Update theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        themeToggle.innerHTML = `<i class="fas ${newTheme === 'dark' ? 'fa-sun' : 'fa-moon'}"></i>`;
        
        // Add transition effect
        document.documentElement.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.documentElement.style.transition = '';
        }, 300);
    });

    // Back to top functionality
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/hide back to top button based on scroll position
    const toggleBackToTop = () => {
        if (window.pageYOffset > 200) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    };

    // Listen for scroll events
    window.addEventListener('scroll', toggleBackToTop);
    
    // Initial check for scroll position
    toggleBackToTop();

    // Add smooth transition when page loads
    setTimeout(() => {
        document.body.style.transition = 'background-color 0.3s ease';
    }, 100);
}); 