// smooth scroll + reveal + nav active (scroll spy)
document.addEventListener('DOMContentLoaded', function(){
  // Smooth anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      const href = a.getAttribute('href');
      if(href && href.length > 1){
        e.preventDefault();
        const target = document.querySelector(href);
        if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
        // update hash without jumping
        history.replaceState(null, null, href);
      }
    });
  });

  // Reveal on scroll
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add('inview');
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.card, .project, .skill').forEach(el => obs.observe(el));

  // Scroll spy - highlight nav items based on viewport
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav a'));

  function onScrollSpy(){
    const fromTop = window.scrollY + (window.innerHeight * 0.15);
    let current = sections[0] ? sections[0].id : null;
    for(const sec of sections){
      if(sec.offsetTop <= fromTop) current = sec.id;
    }
    navLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#','');
      if(href === current) link.classList.add('active'); else link.classList.remove('active');
    });
  }

  window.addEventListener('scroll', onScrollSpy, {passive: true});
  // initial call
  onScrollSpy();
});

