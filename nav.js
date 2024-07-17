// Menu Toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('open');
});

window.addEventListener('scroll', function() {
    if (document.getElementById('nav-links').classList.contains('open')) {
        document.getElementById('nav-links').classList.remove('open');
    }
});

// Hero Animation 
document.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 350) {
        hero.classList.add('scrolled');
    } else {
        hero.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Initialiser Splitting.js pour diviser le texte en lignes
    Splitting({ target: '#about-text', by: 'lines' });

    const lines = document.querySelectorAll('#about-text .line');

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        lines.forEach(line => {
            const lineTop = line.getBoundingClientRect().top;

            if (lineTop < triggerBottom) {
                line.classList.add('visible');
            } else {
                line.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});


function toggleDescription(element) {
    element.classList.toggle('active');
    let description = element.querySelector('.description');
    let arrow = element.querySelector('.arrow');
    if (element.classList.contains('active')) {
        description.style.maxHeight = description.scrollHeight + "px";
        description.style.opacity = 1;
        arrow.style.transform = 'rotate(180deg)';
    } else {
        description.style.maxHeight = 0;
        description.style.opacity = 0;
        arrow.style.transform = '';
    }
}











document.addEventListener('DOMContentLoaded', (event) => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const textElement = entry.target.querySelector('.text');
            if (entry.isIntersecting) {
                textElement.classList.add('animate');
            } else {
                textElement.classList.remove('animate');
            }
        });
    }, observerOptions);

    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        observer.observe(page);
    });
});



