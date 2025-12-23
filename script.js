document.addEventListener('DOMContentLoaded', () => {
    
    // --- Elements ---
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const modal = document.getElementById('registerModal');
    const registerForm = document.getElementById('registerForm');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    // --- Modal Logic ---
    function openModal() {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    if (openModalBtn) {
        openModalBtn.addEventListener('click', openModal);
    }

    // Close on X btn, Cancel btn, or clicking outside
    [closeModalBtn, cancelBtn].forEach(btn => {
        if (btn) btn.addEventListener('click', closeModal);
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // --- Form Handling ---
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulate API call / processing
            const btn = registerForm.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            
            btn.innerText = 'Registering...';
            btn.disabled = true;

            setTimeout(() => {
                // Success State
                alert('Registration Successful! Check your email for the joining link.');
                registerForm.reset();
                closeModal();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    // --- Mobile Menu (Simple Alert for demo, or expansion) ---
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            // For this single landing page, we might just scroll to top or show links
            // Implementing a simple toggle is better if we had a drawer.
            // For now, let's just alert or log, or toggle a class if we added CSS for it.
            console.log('Mobile menu clicked');
            // Check if we want to expand nav:
            // const nav = document.querySelector('.desktop-nav');
            // nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            // (Requires CSS adjustment for mobile nav specifically)
        });
    }

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
