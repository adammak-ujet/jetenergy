// Visual-only interactions for the demo mockup. No backend, no real functionality.
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
});
