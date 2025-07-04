// ===== Tugasfy Script.js =====

// Toggle Hamburger Menu
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// Cek apakah tombol hamburger ada & berikan event listener
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }

  // Inisialisasi AOS
  AOS.init({
    duration: 1000,
    once: true
  });

  // Scroll smooth untuk anchor
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }

      // Tutup menu setelah klik (di mobile)
      const menu = document.getElementById('mobile-menu');
      if (window.innerWidth < 768 && menu && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
      }
    });
  });
});
