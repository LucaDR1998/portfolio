'use strict'

// document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('mouseover', function() {
//         this.classList.add('with-arrow');
//     });

//     link.addEventListener('mouseout', function() {
//         this.classList.remove('with-arrow');
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let currentSection = null;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
            const sectionHeight = section.clientHeight;
            const scrollPos = window.pageYOffset;

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    });
});

