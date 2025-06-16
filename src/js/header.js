document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.burger-menu');
  const backdrop = document.querySelector('.backdrop');
  const links = document.querySelectorAll('.backdrop-list-item');

  burgerBtn?.addEventListener('click', () => {
    backdrop.classList.toggle('show');
  });

  backdrop?.addEventListener('click', e => {
    if (e.target === backdrop) {
      backdrop.classList.remove('show');
    }
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      backdrop.classList.remove('show');
    });
  });
});
