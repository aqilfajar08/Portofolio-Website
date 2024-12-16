const burgerButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
const navbarMenu = document.getElementById('navbar-default');
const navLinks = document.querySelectorAll('#navbar-default a');

burgerButton.addEventListener('click', () => {
    if (navbarMenu.classList.contains('hidden')) {
        navbarMenu.classList.remove('hidden');
        navbarMenu.style.maxHeight = navbarMenu.scrollHeight + 'px';
    } else {
        navbarMenu.style.maxHeight = '0';
        setTimeout(() => {
            navbarMenu.classList.add('hidden');
        }, 500);
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!navbarMenu.classList.contains('hidden')) {
            navbarMenu.style.maxHeight = '0';
            setTimeout(() => {
                navbarMenu.classList.add('hidden');
            }, 500);
        }
    });
});
