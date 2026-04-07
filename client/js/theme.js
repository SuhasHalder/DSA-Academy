// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.toggle('dark', savedTheme === 'dark');
  updateThemeButton();
}

function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeButton();
}

function updateThemeButton() {
  const button = document.getElementById('themeToggleBtn');
  if(!button) return;

  const isDark = document.body.classList.contains('dark');
  button.textContent = isDark ? '☀️' : '🌙';
  button.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
  button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

// Initialize theme on load
if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme);
} else {
  initTheme();
}

