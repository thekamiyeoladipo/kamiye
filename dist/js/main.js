 const menuToggle = document.getElementById('menuToggle');
    const hamburger = document.getElementById('hamburger');
    const close = document.getElementById('close');
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;

    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('-translate-y-full');
      mobileMenu.classList.toggle('menu-open');
      hamburger.classList.toggle('hidden');
      close.classList.toggle('hidden');
       body.classList.toggle('overflow-hidden');
    });

barba.init({
  transitions: [
    {
      name: 'simple-fade',
      async leave(data) {
        // Add fade-out animation to old container
        data.current.container.classList.add('fade-out');
        await delay(500); // match the CSS animation duration
      },
      enter(data) {
        // Add fade-in animation to new container
        data.next.container.classList.add('fade-in');
      }
    }
  ]
});

// Helper delay function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', function() {
  const currentPage = location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
});