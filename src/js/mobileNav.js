const burgerButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
const navbarMenu = document.getElementById('navbar-default');
const navLinks = document.querySelectorAll('#navbar-default a'); // Menangkap semua link di dalam navbar

// Fungsi untuk membuka dan menutup navbar saat burger button diklik
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

// Menutup navbar saat link di klik
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
