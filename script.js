// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal Functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal(modal) {
    modal.style.display = 'none';
}

// Close Modal when clicking outside or on close button
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target.classList.contains('close-modal')) {
            closeModal(modal);
        }
    });
});

// Login Modal Trigger
document.querySelector('a[href="#login"]')?.addEventListener('click', () => {
    openModal('login-modal');
});

// Register Modal Trigger
document.querySelector('a[href="#register"]')?.addEventListener('click', () => {
    openModal('register-modal');
});

// Form Submission Handlers
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // TODO: Implement form submission logic
    alert('Message sent! We will get back to you soon.');
    this.reset();
});

document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // TODO: Implement login logic
    alert('Login functionality to be implemented');
    this.reset();
});

document.getElementById('register-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // TODO: Implement registration logic
    alert('Registration functionality to be implemented');
    this.reset();
});

// Portfolio Filter (placeholder)
function filterPortfolio(category) {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Dark Mode Toggle (optional)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Optional: Lazy Load Images
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
});