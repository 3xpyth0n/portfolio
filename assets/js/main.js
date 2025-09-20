// Theme toggle + smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // Check saved theme
  const saved = localStorage.getItem('theme') || 'light';
  setTheme(saved);

  btn.addEventListener('click', () => {
    const current = localStorage.getItem('theme') || 'light';
    setTheme(current === 'light' ? 'dark' : 'light');
  });

  function setTheme(mode){
    if(mode === 'dark'){
      root.style.backgroundColor = '#0b0b0b';
      root.style.color = '#ddd';
      btn.textContent = '☀️';
      localStorage.setItem('theme','dark');
    } else {
      root.style.backgroundColor = '#f3f6f7';
      root.style.color = '#111';
      btn.textContent = '🌙';
      localStorage.setItem('theme','light');
    }
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        history.replaceState(null,null,a.getAttribute('href'));
      }
    });
  });
});

