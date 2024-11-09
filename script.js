// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function toggleTheme() {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', document.body.dataset.theme);
}

// Set initial theme
const savedTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
document.body.dataset.theme = savedTheme;

themeToggle.addEventListener('click', toggleTheme);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    try {
        // Replace with your actual form submission endpoint
        const response = await fetch('your-form-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        
        if (response.ok) {
            alert('Message sent successfully!');
            contactForm.reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        alert('Error sending message. Please try again later.');
        console.error('Error:', error);
    }
});

// Add this to your existing script.js
document.querySelectorAll('.gallery-image').forEach(image => {
    image.addEventListener('click', () => {
        image.classList.toggle('active');
        
        // Add overlay when image is active
        if (image.classList.contains('active')) {
            const overlay = document.createElement('div');
            overlay.className = 'gallery-overlay';
            document.body.appendChild(overlay);
            
            // Close image when clicking overlay
            overlay.addEventListener('click', () => {
                image.classList.remove('active');
                overlay.remove();
            });
        }
    });
});
