function closeAllPopups(except) {
  document.querySelectorAll('[data-dropdown-menu], [data-date-menu]').forEach((m) => {
    if (m !== except) m.classList.add('hidden');
  });
}

function initDropdown(root) {
  const trigger = root.querySelector('[data-dropdown-trigger]');
  const menu = root.querySelector('[data-dropdown-menu]');
  const label = root.querySelector('[data-dropdown-label]');
  const options = menu.querySelectorAll('[data-value]');

  options.forEach((opt) => {
    if (opt.textContent.trim() === label.textContent.trim()) {
      opt.classList.add('is-selected');
    }
  });

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const wasHidden = menu.classList.contains('hidden');
    closeAllPopups(menu);
    menu.classList.toggle('hidden', !wasHidden);
  });

  options.forEach((opt) => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      label.textContent = opt.textContent.trim();
      options.forEach((o) => o.classList.remove('is-selected'));
      opt.classList.add('is-selected');
      menu.classList.add('hidden');
      root.dispatchEvent(
        new CustomEvent('dropdown:change', {
          detail: { value: opt.dataset.value, label: opt.textContent.trim() },
          bubbles: true,
        })
      );
    });
  });
}

function initDateRange(root) {
  const trigger = root.querySelector('[data-date-trigger]');
  const menu = root.querySelector('[data-date-menu]');
  const label = root.querySelector('[data-date-label]');
  const startInput = root.querySelector('[data-date-start]');
  const endInput = root.querySelector('[data-date-end]');
  const applyBtn = root.querySelector('[data-date-apply]');

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const wasHidden = menu.classList.contains('hidden');
    closeAllPopups(menu);
    menu.classList.toggle('hidden', !wasHidden);
  });
  menu.addEventListener('click', (e) => e.stopPropagation());

  applyBtn.addEventListener('click', () => {
    if (!startInput.value || !endInput.value) return;
    const startDate = new Date(startInput.value + 'T00:00:00');
    const endDate = new Date(endInput.value + 'T00:00:00');
    if (startDate > endDate) return;

    const monthOf = (d) => d.toLocaleDateString('en-US', { month: 'short' });
    const sameYear = startDate.getFullYear() === endDate.getFullYear();
    const sameMonth = sameYear && startDate.getMonth() === endDate.getMonth();

    let formatted;
    if (sameMonth) {
      formatted = `${monthOf(startDate)} ${startDate.getDate()} - ${endDate.getDate()}, ${endDate.getFullYear()}`;
    } else if (sameYear) {
      formatted = `${monthOf(startDate)} ${startDate.getDate()} - ${monthOf(endDate)} ${endDate.getDate()}, ${endDate.getFullYear()}`;
    } else {
      formatted = `${monthOf(startDate)} ${startDate.getDate()}, ${startDate.getFullYear()} - ${monthOf(endDate)} ${endDate.getDate()}, ${endDate.getFullYear()}`;
    }

    label.textContent = formatted;
    menu.classList.add('hidden');
  });
}

function initApplyFilters() {
  const btn = document.querySelector('[data-filters-apply]');
  if (!btn) return;
  const original = btn.innerHTML;
  let timer;
  btn.addEventListener('click', () => {
    clearTimeout(timer);
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-check text-xs"></i><span>Applied</span>';
    timer = setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = original;
    }, 1400);
  });
}

function initPriceRange(root) {
  const track = root.querySelector('[data-price-track]');
  const fill = root.querySelector('[data-price-fill]');
  const thumb = root.querySelector('[data-price-thumb]');
  const label = root.querySelector('[data-price-label]');
  const min = parseFloat(root.dataset.priceMin || '0');
  const max = parseFloat(root.dataset.priceMax || '10');
  const initialPct = parseFloat(root.dataset.priceInitial || '75');

  let dragging = false;

  const apply = (newPct) => {
    const pct = Math.max(0, Math.min(100, newPct));
    fill.style.width = pct + '%';
    thumb.style.left = pct + '%';
    if (label) {
      const value = min + (max - min) * (pct / 100);
      const display = Math.round(value * 10) / 10;
      label.textContent = `${min}k - ${display}k`;
    }
  };

  apply(initialPct);

  const updateFromX = (clientX) => {
    const rect = track.getBoundingClientRect();
    apply(((clientX - rect.left) / rect.width) * 100);
  };

  thumb.addEventListener('pointerdown', (e) => {
    dragging = true;
    thumb.setPointerCapture(e.pointerId);
    e.preventDefault();
  });
  thumb.addEventListener('pointermove', (e) => {
    if (dragging) updateFromX(e.clientX);
  });
  thumb.addEventListener('pointerup', () => {
    dragging = false;
  });
  thumb.addEventListener('pointercancel', () => {
    dragging = false;
  });

  track.addEventListener('pointerdown', (e) => {
    if (e.target === thumb) return;
    updateFromX(e.clientX);
  });
}

export function initControls() {
  document.querySelectorAll('[data-dropdown]').forEach(initDropdown);
  document.querySelectorAll('[data-date-range]').forEach(initDateRange);
  document.querySelectorAll('[data-price-range]').forEach(initPriceRange);
  initApplyFilters();
  document.addEventListener('click', () => closeAllPopups());
}
