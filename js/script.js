// ===== Tugasfy Script.js =====

// 🔸 1. Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden'); // buka/tutup menu mobile
}

// 🔸 2. AOS - Animasi masuk ketika di-scroll
AOS.init({
  duration: 1000,  // durasi animasi 1 detik
  once: true       // hanya muncul sekali, tidak berulang saat scroll balik
});

// 🔸 3. Scroll Smooth ke section
const links = document.querySelectorAll('a[href^=\"#\"]');
links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
