document.addEventListener("DOMContentLoaded", () => {
    const burgerButton = document.querySelector('[data-collapse-toggle="navbar-custom"]');
    const navbarMenu = document.getElementById('navbar-custom');
  
    // Mengatur tombol navbar (burger)
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
  
    // Menutup navbar saat link diklik
    document.querySelectorAll(".nav-link-custom").forEach((link) => {
      link.addEventListener("click", () => {
        navbarMenu.style.maxHeight = '0';
        setTimeout(() => {
          navbarMenu.classList.add("hidden");
        }, 500);
      });
    });
  });
  