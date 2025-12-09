document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio Loaded');

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade-in on scroll
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.classList.add('fade-section'); // Base class for fade
        observer.observe(section);
    });

    // Typing Effect
    const typingTextSpan = document.querySelector('.typing-text');
    const cursorSpan = document.querySelector('.cursor');

    if (typingTextSpan) {
        const textArray = ["experiences.", "interfaces.", "magic."];
        let textArrayIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentWord = textArray[textArrayIndex];

            if (!isDeleting) {
                typingTextSpan.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                if (charIndex > currentWord.length) {
                    isDeleting = true;
                    setTimeout(type, 2000);
                } else {
                    setTimeout(type, 100);
                }
            } else {
                typingTextSpan.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    textArrayIndex = (textArrayIndex + 1) % textArray.length;
                    setTimeout(type, 500);
                } else {
                    setTimeout(type, 50);
                }
            }
        };

        type();

        // Cursor Blink
        setInterval(() => {
            if (cursorSpan) cursorSpan.style.opacity = cursorSpan.style.opacity === '0' ? '1' : '0';
        }, 500);
    }
});
