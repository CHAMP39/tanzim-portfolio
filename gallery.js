(() => {
  const filters = document.querySelectorAll('[data-gallery-filter]');
  const items = document.querySelectorAll('.pf-gallery-item');
  const box = document.querySelector('.pf-lightbox');

  filters.forEach((button) => button.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    const kind = button.dataset.galleryFilter;
    items.forEach((item) => {
      item.hidden = kind !== 'all' && item.dataset.galleryKind !== kind;
    });
  }));

  if (!box) return;
  const image = box.querySelector('img');
  const title = box.querySelector('h3');
  const copy = box.querySelector('p');
  const close = box.querySelector('.pf-lightbox-close');

  items.forEach((item) => item.addEventListener('click', () => {
    image.src = item.dataset.gallerySrc;
    image.alt = item.querySelector('img').alt;
    title.textContent = item.dataset.galleryTitle;
    copy.textContent = item.dataset.galleryCopy;
    box.showModal();
  }));
  close.addEventListener('click', () => box.close());
  box.addEventListener('click', (event) => {
    if (event.target === box) box.close();
  });
})();
