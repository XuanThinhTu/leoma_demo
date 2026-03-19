window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');

  if (window.scrollY > 50) {
    header.style.background = 'rgba(226, 228, 225, 0.85)';
    header.style.backdropFilter = 'blur(15px)';
    header.style.borderBottom = '1px solid rgba(0,0,0,0.05)';
  } else {
    header.style.background = 'transparent';
    header.style.backdropFilter = 'none';
    header.style.borderBottom = 'none';
  }
});
