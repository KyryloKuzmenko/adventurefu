document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('open');
    });

    const toggleBtn = item.querySelector('.faq-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', e => {
        e.stopPropagation(); 
        item.classList.toggle('open');
      });
    }
  });
});
