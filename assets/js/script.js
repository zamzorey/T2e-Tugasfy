
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    once: true
  });
});
