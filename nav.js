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

// Word Animation
const animatedWords = document.querySelectorAll('.animated-word');

const checkVisibility = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    animatedWords.forEach(word => {
        const wordTop = word.getBoundingClientRect().top;

        if (wordTop < triggerBottom) {
            word.classList.add('visible');
        } else {
            word.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', checkVisibility);
checkVisibility();



document.addEventListener("DOMContentLoaded", function() {
    Splitting();
  
    ScrollOut({
      targets: '.text',
      scrollingElement: '.introduction'
    });
  });