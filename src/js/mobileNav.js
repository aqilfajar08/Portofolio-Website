const burgerButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
const navbarMenu = document.getElementById('navbar-default');

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