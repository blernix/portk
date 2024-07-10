// CARROUSEL 

document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
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