(() => {
  'use strict';
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.getElementById('site-menu');
  const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  const progress = document.querySelector('.scroll-progress');
  const toast = document.getElementById('toast');
  let toastTimer;

  function closeMenu() {
    if (!toggle || !menu) return;
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu de navegação');
  }

  toggle?.addEventListener('click', () => {
    const opening = toggle.getAttribute('aria-expanded') !== 'true';
    menu.classList.toggle('is-open', opening);
    toggle.setAttribute('aria-expanded', String(opening));
    toggle.setAttribute('aria-label', opening ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
  });
  navLinks.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  document.addEventListener('click', (e) => {
    if (!menu?.classList.contains('is-open')) return;
    if (!menu.contains(e.target) && !toggle.contains(e.target)) closeMenu();
  });

  const sectionNodes = document.querySelectorAll('main section[id]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          const isActive = link.getAttribute('href') === '#' + entry.target.id;
          link.classList.toggle('active', isActive);
          if (isActive) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-33% 0px -55% 0px', threshold: 0 });
    sectionNodes.forEach(section => observer.observe(section));
  }

  let updateScheduled = false;
  function onScroll() {
    if (updateScheduled) return;
    updateScheduled = true;
    requestAnimationFrame(() => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.width = (available > 0 ? window.scrollY / available * 100 : 0) + '%';
      updateScheduled = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  document.getElementById('year').textContent = String(new Date().getFullYear());

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  }
  // Personalize aqui com seu perfil completo. Exemplo: https://www.linkedin.com/in/seu-perfil/
  const LINKEDIN_URL = 'https://www.linkedin.com/in/agiovannamendes';
  const linkedinLinks = [...document.querySelectorAll('[data-linkedin-link]')];
  linkedinLinks.forEach(link => {
    if (/^https:\/\/([a-z]{2,3}\.)?linkedin\.com\/in\//i.test(LINKEDIN_URL)) {
      link.href = LINKEDIN_URL;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else {
      link.classList.add('is-pending');
      link.setAttribute('title', 'Link do LinkedIn a configurar');
      link.addEventListener('click', event => {
        event.preventDefault();
        showToast('LinkedIn: adicione o link do seu perfil para ativar.');
      });
    }
  });

  // Coloque o arquivo curriculo.pdf junto do index.html.
  // Em sites publicados, os links são ativados automaticamente quando o PDF existir.
  const resumeLinks = [...document.querySelectorAll('[data-resume-link]')];
  async function verifyResume() {
    if (location.protocol === 'file:') return; // Navegação local: o link usa o arquivo na mesma pasta.
    let ready = false;
    try {
      const response = await fetch('curriculo.pdf', { method: 'HEAD', cache: 'no-store' });
      ready = response.ok && (response.headers.get('content-type') || '').toLowerCase().includes('pdf');
    } catch { ready = false; }
    if (!ready) resumeLinks.forEach(link => {
      link.classList.add('is-pending');
      link.setAttribute('aria-disabled', 'true');
      link.setAttribute('title', 'Currículo disponível em breve');
      link.addEventListener('click', event => {
        event.preventDefault();
        showToast('O currículo em PDF estará disponível em breve.');
      });
    });
  }
  verifyResume();

  document.getElementById('copy-email')?.addEventListener('click', async () => {
    const email = 'gmasdevops@gmail.com';
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard indisponível');
      await navigator.clipboard.writeText(email);
      showToast('E-mail copiado!');
    } catch {
      showToast('E-mail: ' + email);
    }
  });
})();
