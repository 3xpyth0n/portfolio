// theme toggle + smooth scroll
(function(){
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const key = 'saad_theme';
  const get = () => localStorage.getItem(key) || 'light';
  const apply = (t) => {
    if(t === 'dark'){ root.style.backgroundColor = '#0b0b0b'; root.style.color = '#ddd'; btn.textContent = '☀️'; }
    else { root.style.backgroundColor = ''; root.style.color = ''; btn.textContent = '🌙'; }
    localStorage.setItem(key, t);
  };
  btn.addEventListener('click', ()=> apply(get() === 'dark' ? 'light' : 'dark'));
  // apply saved
  apply(get());

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
        history.replaceState(null,null,href);
      }
    });
  });
})();

