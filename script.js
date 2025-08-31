// script.js
    
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu after clicking a link
                document.getElementById('mobile-menu').classList.add('hidden');
            });
        });

        // Mobile menu toggle
        document.getElementById('menu-toggle').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Contact form submission handler
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const subject = 'New Message from your Portfolio';
            
            const mailtoLink = `mailto:aishaali184@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message)}`;
            
            window.location.href = mailtoLink;
        });

        // Show/hide resume modal
        const resumeModal = document.getElementById('resume-modal');
        const showResumeBtn = document.getElementById('show-resume-btn');
        const closeModalBtn = document.getElementById('close-modal-btn');

        showResumeBtn.addEventListener('click', () => {
            resumeModal.classList.remove('hidden');
        });

        closeModalBtn.addEventListener('click', () => {
            resumeModal.classList.add('hidden');
        });
    