 const menuToggle = document.getElementById('menuToggle');
    const hamburger = document.getElementById('hamburger');
    const close = document.getElementById('close');
    const mobileMenu = document.getElementById('mobileMenu');

    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('-translate-y-full');
      mobileMenu.classList.toggle('menu-open');
      hamburger.classList.toggle('hidden');
      close.classList.toggle('hidden');
    });