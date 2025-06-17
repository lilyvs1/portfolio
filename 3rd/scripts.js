// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 3 + 1;
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        
        // Random delay
        const delay = Math.random() * 20;
        
        particle.style.left = `${posX}vw`;
        particle.style.top = `${posY}vh`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `-${delay}s`;
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        particlesContainer.appendChild(particle);
    }
}

// Scroll progress indicator
function updateScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    scrollProgress.style.width = `${scrolled}%`;
}

// Initialize
window.addEventListener('load', () => {
    createParticles();
    updateScrollProgress();
});

window.addEventListener('scroll', updateScrollProgress);

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        
        // Here you would typically send the data to a server
        // For demo purposes, we'll just log it and show an alert
        const formValues = Object.fromEntries(formData.entries());
        console.log('Form submitted:', formValues);
        
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}