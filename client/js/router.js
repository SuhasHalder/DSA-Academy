// Router functionality
function navigate(page) {
  if(typeof closeDsaDrawer === 'function') closeDsaDrawer();
  if(typeof currentPage !== 'undefined') currentPage = page;
  if(typeof updateActiveNav === 'function') updateActiveNav();
  if(typeof initializePage === 'function') initializePage();
}

// Initialize with home page on load
if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    navigate('home');
  });
} else {
  navigate('home');
}
