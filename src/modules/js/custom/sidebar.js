export function initSidebar() {
  const toggle = document.querySelector('[data-sidebar-toggle]');
  const backdrop = document.querySelector('[data-sidebar-backdrop]');
  const sidebar = document.querySelector('[data-sidebar]');

  if (!toggle || !sidebar || !backdrop) return;

  const open = () => {
    sidebar.classList.remove('-translate-x-full');
    backdrop.classList.remove('hidden');
  };

  const close = () => {
    sidebar.classList.add('-translate-x-full');
    backdrop.classList.add('hidden');
  };

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    open();
  });

  backdrop.addEventListener('click', close);

  sidebar.querySelectorAll('.nav-item').forEach((item) => {
    item.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 767px)').matches) close();
    });
  });

  const mql = window.matchMedia('(min-width: 768px)');
  mql.addEventListener('change', (e) => {
    if (e.matches) close();
  });
}
