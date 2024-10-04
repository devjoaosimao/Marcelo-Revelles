document.getElementById('menu-icon').addEventListener('click', function (event) {
    event.stopPropagation(); // Impede que o clique no ícone do menu seja capturado pelo evento global
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show-menu');
});

document.addEventListener('click', function (event) {
    var navMenu = document.getElementById('nav-menu');
    var menuIcon = document.getElementById('menu-icon');

    // Verifica se o clique foi fora do menu e do ícone do menu
    if (!navMenu.contains(event.target) && !menuIcon.contains(event.target)) {
        navMenu.classList.remove('show-menu');
    }
});
