// CARROUSEL 


document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('open');
});

window.addEventListener('scroll', function() {
    if (document.getElementById('nav-links').classList.contains('open')) {
        document.getElementById('nav-links').classList.remove('open');
    }
});



// HERO ANIMATION 

document.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 350) {
        hero.classList.add('scrolled');
    } else {
        hero.classList.remove('scrolled');
    }
});