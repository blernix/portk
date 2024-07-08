document.addEventListener('DOMContentLoaded', function () {
    // Initial content reveal
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('content');
    const animationDuration = 1500; // Duration of the initial animation in milliseconds

    setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.classList.add('show');
    }, animationDuration);

});

