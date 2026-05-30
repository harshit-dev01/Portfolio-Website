const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

const reveals = document.querySelectorAll('.reveal');

function revealSections() {
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            section.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealSections);
revealSections();

const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', e => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active-link');

        if (
            link.getAttribute('href') === '#' + current
        ) {
            link.classList.add('active-link');
        }

    });

});

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {
        header.style.boxShadow =
            '0 10px 30px rgba(0,0,0,0.08)';
    } else {
        header.style.boxShadow = 'none';
    }

});

const cards = document.querySelectorAll(
    '.project-card, .skill-card, .achievement-card, .contact-card, .edu-card'
);

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {
        card.style.transform =
            'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform =
            'translateY(0px)';
    });

});

window.addEventListener('load', () => {

    document.body.classList.add('loaded');

});

const heroTitle = document.querySelector('.hero-content h1');

if (heroTitle) {

    heroTitle.style.opacity = '0';
    heroTitle.style.transform = 'translateY(30px)';

    setTimeout(() => {

        heroTitle.style.transition =
            'all 1s ease';

        heroTitle.style.opacity = '1';
        heroTitle.style.transform =
            'translateY(0)';

    }, 300);

}