// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        }
    });
});

// Scroll Animation
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Form Validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Sticky Header
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Image Loading Animation
const images = document.querySelectorAll('img');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
}, {
    rootMargin: '0px 0px 50px 0px'
});

images.forEach(img => {
    if (img.dataset.src) {
        imageObserver.observe(img);
    } else {
        img.classList.add('loaded');
    }
});

// Smooth Image Loading
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });
});

// Loading Screen
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading';
    loadingScreen.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loadingScreen);

    // Simulate loading time
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 1000);
});

// Initialize Particles.js
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#6366f1'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: true
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#6366f1',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    }
});

// Initialize Lottie Animation
const initHeroAnimation = () => {
    lottie.loadAnimation({
        container: document.getElementById('hero-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets10.lottiefiles.com/packages/lf20_M9p23l.json' // Modern AI/Digital transformation animation
    });
};

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initHeroAnimation();
});

// Sample blog posts
const samplePosts = [
    {
        title: 'The Future of AI in Digital Marketing',
        description: 'Explore how artificial intelligence is revolutionizing the way businesses approach digital marketing, from personalized content to predictive analytics.',
        cover_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tag_list: ['AI', 'Marketing', 'Technology'],
        user: {
            name: 'Marcometrix Team',
            profile_image: 'images/marco.jpeg'
        },
        published_at: new Date().toISOString()
    },
    {
        title: 'Maximizing ROI with Data-Driven Marketing',
        description: 'Learn how to leverage data analytics to optimize your marketing campaigns and achieve better results with your advertising budget.',
        cover_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tag_list: ['Analytics', 'ROI', 'Strategy'],
        user: {
            name: 'Marcometrix Team',
            profile_image: 'images/marco.jpeg'
        },
        published_at: new Date().toISOString()
    },
    {
        title: 'Building a Strong Digital Presence in 2024',
        description: 'Discover the essential strategies and tools needed to establish and maintain a powerful digital presence in today\'s competitive market.',
        cover_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tag_list: ['Digital Marketing', 'Strategy', 'Growth'],
        user: {
            name: 'Marcometrix Team',
            profile_image: 'images/marco.jpeg'
        },
        published_at: new Date().toISOString()
    }
];

// Update the fetchBlogPosts function
async function fetchBlogPosts() {
    try {
        // For now, we'll use the sample posts
        displayBlogPosts(samplePosts);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        displayBlogPosts(samplePosts);
    }
}

function displayBlogPosts(posts) {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    blogGrid.innerHTML = posts.map(post => `
        <div class="blog-card">
            <div class="blog-image">
                <img src="${post.cover_image || 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'}" 
                     alt="${post.title}" 
                     loading="lazy">
            </div>
            <div class="blog-content">
                <span class="blog-tag">${post.tag_list[0] || 'Marketing'}</span>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.description || 'Read our latest insights on digital marketing and technology.'}</p>
                <div class="blog-meta">
                    <div class="blog-author">
                        <img src="${post.user.profile_image || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'}" 
                             alt="${post.user.name}">
                        <span class="blog-author-name">${post.user.name}</span>
                    </div>
                    <span class="blog-date">${new Date(post.published_at).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize blog posts when the page loads
document.addEventListener('DOMContentLoaded', fetchBlogPosts); 