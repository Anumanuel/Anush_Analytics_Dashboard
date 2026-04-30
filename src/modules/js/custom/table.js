const TABLE_DATA = [
  { customer: 'Jane Doe', initials: 'JD', avatarColor: 'blue', date: 'May 15, 2024', region: 'North America', product: 'Alpha V2', status: 'active', amount: 35.0, rep: 'Sarah Lin', lastContact: '3:06 PM', source: 'Referral', score: 8.5 },
  { customer: 'Jane Names', initials: 'JN', avatarColor: 'purple', date: 'May 15, 2024', region: 'Europe', product: 'Beta v1.1', status: 'active', amount: 45.0, rep: 'Mark Patel', lastContact: '5:05 PM', source: 'Direct', score: 8.5 },
  { customer: 'Ravi Hernandez', initials: 'RH', avatarColor: 'orange', date: 'May 15, 2024', region: 'Europe', product: 'Beta v1.1', status: 'pending', amount: 25.0, rep: 'Sarah Lin', lastContact: '3:05 AM', source: 'Campaign', score: 7.2, highlighted: true },
  { customer: 'Jane Doe', initials: 'JD', avatarColor: 'green', date: 'May 15, 2024', region: 'Europe', product: 'Beta v1.1', status: 'active', amount: 35.0, rep: 'Tom Kim', lastContact: '6:28 PM', source: 'Search', score: 8.0 },
  { customer: 'Jane Names', initials: 'JN', avatarColor: 'pink', date: 'May 15, 2024', region: 'North America', product: 'Beta v1.1', status: 'active', amount: 35.0, rep: 'Mark Patel', lastContact: '5:08 PM', source: 'Direct', score: 8.5 },
  { customer: 'Liam Walsh', initials: 'LW', avatarColor: 'cyan', date: 'May 14, 2024', region: 'Europe', product: 'Alpha V2', status: 'active', amount: 65.0, rep: 'Sarah Lin', lastContact: '11:30 AM', source: 'Referral', score: 9.1 },
  { customer: 'Maya Singh', initials: 'MS', avatarColor: 'indigo', date: 'May 14, 2024', region: 'Asia Pacific', product: 'Pro Plan', status: 'active', amount: 85.0, rep: 'Tom Kim', lastContact: '2:14 PM', source: 'Direct', score: 7.9 },
  { customer: 'Diego Romero', initials: 'DR', avatarColor: 'amber', date: 'May 14, 2024', region: 'South America', product: 'Beta v1.1', status: 'pending', amount: 28.0, rep: 'Mark Patel', lastContact: '9:45 AM', source: 'Campaign', score: 6.5 },
  { customer: 'Aisha Khan', initials: 'AK', avatarColor: 'teal', date: 'May 13, 2024', region: 'Asia Pacific', product: 'Pro Plan', status: 'active', amount: 120.0, rep: 'Sarah Lin', lastContact: '4:50 PM', source: 'Search', score: 9.5 },
  { customer: 'Noah Park', initials: 'NP', avatarColor: 'rose', date: 'May 13, 2024', region: 'North America', product: 'Alpha V2', status: 'active', amount: 55.0, rep: 'Tom Kim', lastContact: '1:22 PM', source: 'Referral', score: 8.3 },
  { customer: 'Elena Costa', initials: 'EC', avatarColor: 'fuchsia', date: 'May 13, 2024', region: 'Europe', product: 'Beta v1.1', status: 'pending', amount: 30.0, rep: 'Mark Patel', lastContact: '10:08 AM', source: 'Direct', score: 7.0 },
  { customer: 'Omar Riveiro', initials: 'OR', avatarColor: 'lime', date: 'May 12, 2024', region: 'South America', product: 'Pro Plan', status: 'active', amount: 95.0, rep: 'Sarah Lin', lastContact: '6:40 PM', source: 'Campaign', score: 8.7 },
  { customer: 'Hana Tanaka', initials: 'HT', avatarColor: 'sky', date: 'May 12, 2024', region: 'Asia Pacific', product: 'Alpha V2', status: 'active', amount: 70.0, rep: 'Tom Kim', lastContact: '8:15 AM', source: 'Search', score: 9.0 },
  { customer: 'Carlos Mendes', initials: 'CM', avatarColor: 'violet', date: 'May 12, 2024', region: 'Europe', product: 'Beta v1.1', status: 'active', amount: 42.0, rep: 'Mark Patel', lastContact: '12:50 PM', source: 'Direct', score: 8.2 },
  { customer: 'Priya Iyer', initials: 'PI', avatarColor: 'emerald', date: 'May 11, 2024', region: 'Asia Pacific', product: 'Pro Plan', status: 'pending', amount: 110.0, rep: 'Sarah Lin', lastContact: '3:30 PM', source: 'Referral', score: 7.5 },
  { customer: 'Ethan Brooks', initials: 'EB', avatarColor: 'red', date: 'May 11, 2024', region: 'North America', product: 'Alpha V2', status: 'active', amount: 60.0, rep: 'Tom Kim', lastContact: '5:45 PM', source: 'Direct', score: 8.4 },
  { customer: 'Nadia Ali', initials: 'NA', avatarColor: 'orange', date: 'May 11, 2024', region: 'Europe', product: 'Beta v1.1', status: 'active', amount: 38.0, rep: 'Mark Patel', lastContact: '11:11 AM', source: 'Search', score: 8.6 },
  { customer: 'Yuki Sato', initials: 'YS', avatarColor: 'blue', date: 'May 10, 2024', region: 'Asia Pacific', product: 'Pro Plan', status: 'active', amount: 130.0, rep: 'Sarah Lin', lastContact: '9:55 AM', source: 'Campaign', score: 9.3 },
  { customer: 'Mateo Silva', initials: 'MS', avatarColor: 'purple', date: 'May 10, 2024', region: 'South America', product: 'Alpha V2', status: 'pending', amount: 32.0, rep: 'Tom Kim', lastContact: '2:00 PM', source: 'Direct', score: 6.8 },
  { customer: 'Sofia Reyes', initials: 'SR', avatarColor: 'pink', date: 'May 10, 2024', region: 'North America', product: 'Beta v1.1', status: 'active', amount: 50.0, rep: 'Mark Patel', lastContact: '7:20 PM', source: 'Referral', score: 8.8 },
  { customer: 'Felix Wagner', initials: 'FW', avatarColor: 'green', date: 'May 9, 2024', region: 'Europe', product: 'Pro Plan', status: 'active', amount: 100.0, rep: 'Sarah Lin', lastContact: '4:00 PM', source: 'Search', score: 9.0 },
  { customer: 'Layla Hassan', initials: 'LH', avatarColor: 'cyan', date: 'May 9, 2024', region: 'Asia Pacific', product: 'Alpha V2', status: 'active', amount: 75.0, rep: 'Tom Kim', lastContact: '10:30 AM', source: 'Direct', score: 8.5 },
  { customer: 'Marco Bianchi', initials: 'MB', avatarColor: 'indigo', date: 'May 8, 2024', region: 'Europe', product: 'Beta v1.1', status: 'pending', amount: 27.0, rep: 'Mark Patel', lastContact: '6:50 PM', source: 'Campaign', score: 7.1 },
  { customer: 'Isabella Rossi', initials: 'IR', avatarColor: 'rose', date: 'May 8, 2024', region: 'South America', product: 'Pro Plan', status: 'active', amount: 88.0, rep: 'Sarah Lin', lastContact: '1:15 PM', source: 'Referral', score: 8.9 },
  { customer: 'Asher Cohen', initials: 'AC', avatarColor: 'amber', date: 'May 8, 2024', region: 'North America', product: 'Alpha V2', status: 'active', amount: 48.0, rep: 'Tom Kim', lastContact: '3:33 PM', source: 'Search', score: 8.1 },
];

const AVATAR_COLORS = {
  blue: 'bg-blue-100 text-blue-600',
  purple: 'bg-purple-100 text-purple-600',
  orange: 'bg-orange-100 text-orange-600',
  green: 'bg-green-100 text-green-600',
  pink: 'bg-pink-100 text-pink-600',
  cyan: 'bg-cyan-100 text-cyan-600',
  indigo: 'bg-indigo-100 text-indigo-600',
  amber: 'bg-amber-100 text-amber-600',
  teal: 'bg-teal-100 text-teal-600',
  rose: 'bg-rose-100 text-rose-600',
  fuchsia: 'bg-fuchsia-100 text-fuchsia-600',
  lime: 'bg-lime-100 text-lime-600',
  sky: 'bg-sky-100 text-sky-600',
  violet: 'bg-violet-100 text-violet-600',
  emerald: 'bg-emerald-100 text-emerald-600',
  red: 'bg-red-100 text-red-600',
};

const STATUS_PILLS = {
  active:
    '<span class="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-[10px] font-semibold px-2 py-0.5 rounded-full"><span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>Active</span>',
  pending:
    '<span class="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 text-[10px] font-semibold px-2 py-0.5 rounded-full"><span class="w-1.5 h-1.5 rounded-full bg-orange-500"></span>Pending</span>',
};

const state = {
  currentPage: 1,
  perPage: 5,
};

function scoreClasses(score) {
  if (score >= 8) return 'text-green-600 font-semibold';
  if (score >= 7) return 'text-orange-500 font-semibold';
  return 'text-red-500 font-semibold';
}

function renderRow(row) {
  const avatarClasses = AVATAR_COLORS[row.avatarColor] || AVATAR_COLORS.blue;
  const highlight = row.highlighted ? 'bg-brand-light/30' : '';
  const checked = row.highlighted ? 'checked' : '';
  return `
    <tr class="table-row ${highlight}">
      <td class="py-3 pl-4 pr-2"><input type="checkbox" aria-label="Select row" ${checked}></td>
      <td class="py-3 px-3 whitespace-nowrap">
        <div class="flex items-center gap-2.5">
          <div class="w-7 h-7 rounded-full ${avatarClasses} flex items-center justify-center text-[10px] font-semibold shrink-0">${row.initials}</div>
          <span class="font-medium text-slate-700">${row.customer}</span>
        </div>
      </td>
      <td class="py-3 px-3 text-gray-500 whitespace-nowrap">${row.date}</td>
      <td class="py-3 px-3 text-gray-500 whitespace-nowrap">${row.region}</td>
      <td class="py-3 px-3 text-gray-500 whitespace-nowrap">${row.product}</td>
      <td class="py-3 px-3">${STATUS_PILLS[row.status] || ''}</td>
      <td class="py-3 px-3 text-slate-700 font-medium whitespace-nowrap text-right">$${row.amount.toFixed(2)}</td>
      <td class="py-3 px-3 text-gray-500 whitespace-nowrap">${row.rep}</td>
      <td class="py-3 px-3 text-gray-500 whitespace-nowrap">${row.lastContact}</td>
      <td class="py-3 px-3 text-gray-500 whitespace-nowrap">${row.source}</td>
      <td class="py-3 px-3 whitespace-nowrap text-right"><span class="${scoreClasses(row.score)}">${row.score.toFixed(1)}</span></td>
      <td class="py-3 pr-4 pl-2 text-right whitespace-nowrap">
        <div class="flex items-center justify-end gap-1">
          <button class="tooltip p-1.5 rounded hover:bg-gray-100 text-gray-400 hover:text-brand-blue transition-colors" data-tooltip="Edit"><i class="fa-solid fa-pen text-[11px]"></i></button>
          <button class="tooltip p-1.5 rounded hover:bg-gray-100 text-gray-400 hover:text-red-500 transition-colors" data-tooltip="Delete"><i class="fa-regular fa-trash-can text-[11px]"></i></button>
        </div>
      </td>
    </tr>
  `;
}

function pageButtonHtml(label, page, options = {}) {
  const { active = false, disabled = false, isControl = false } = options;
  let classes;
  if (active) {
    classes =
      'w-7 h-7 flex items-center justify-center border border-brand-blue bg-brand-light text-brand-blue rounded font-medium text-xs';
  } else if (isControl) {
    classes = disabled
      ? 'w-7 h-7 flex items-center justify-center border border-gray-100 rounded text-gray-300 text-[11px] cursor-not-allowed'
      : 'w-7 h-7 flex items-center justify-center border border-gray-100 rounded text-[11px] text-gray-600 hover:bg-gray-50 hover:border-gray-200 transition-colors cursor-pointer';
  } else {
    classes =
      'w-7 h-7 flex items-center justify-center border border-transparent rounded hover:bg-gray-50 font-medium text-xs text-gray-600 cursor-pointer';
  }
  const disabledAttr = disabled ? 'disabled' : '';
  return `<button class="${classes}" data-page="${page}" ${disabledAttr}>${label}</button>`;
}

function buildPageList(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, '...', total];
  if (current >= total - 3) return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
  return [1, '...', current - 1, current, current + 1, '...', total];
}

function renderPagination() {
  const container = document.querySelector('[data-pagination]');
  if (!container) return;
  const totalPages = Math.max(1, Math.ceil(TABLE_DATA.length / state.perPage));

  let html = '';
  html += pageButtonHtml('<i class="fa-solid fa-angle-left"></i>', 'prev', {
    disabled: state.currentPage === 1,
    isControl: true,
  });

  buildPageList(state.currentPage, totalPages).forEach((p) => {
    if (p === '...') {
      html += `<span class="text-gray-400 px-1">…</span>`;
    } else {
      html += pageButtonHtml(p, p, { active: p === state.currentPage });
    }
  });

  html += pageButtonHtml('<i class="fa-solid fa-angle-right"></i>', 'next', {
    disabled: state.currentPage === totalPages,
    isControl: true,
  });

  container.innerHTML = html;
}

function renderInfo() {
  const info = document.querySelector('[data-table-info]');
  if (!info) return;
  if (TABLE_DATA.length === 0) {
    info.textContent = 'No results';
    return;
  }
  const start = (state.currentPage - 1) * state.perPage + 1;
  const end = Math.min(state.currentPage * state.perPage, TABLE_DATA.length);
  info.textContent = `Showing ${start} to ${end} of ${TABLE_DATA.length} results`;
}

function renderTable() {
  const tbody = document.querySelector('[data-table-body]');
  if (!tbody) return;
  const totalPages = Math.max(1, Math.ceil(TABLE_DATA.length / state.perPage));
  if (state.currentPage > totalPages) state.currentPage = totalPages;
  const start = (state.currentPage - 1) * state.perPage;
  const end = start + state.perPage;
  tbody.innerHTML = TABLE_DATA.slice(start, end).map(renderRow).join('');
  renderPagination();
  renderInfo();
}

export function initTable() {
  const tbody = document.querySelector('[data-table-body]');
  if (!tbody) return;

  renderTable();

  const pagination = document.querySelector('[data-pagination]');
  if (pagination) {
    pagination.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-page]');
      if (!btn || btn.disabled) return;
      const page = btn.dataset.page;
      const totalPages = Math.max(1, Math.ceil(TABLE_DATA.length / state.perPage));
      if (page === 'prev') {
        if (state.currentPage > 1) state.currentPage--;
      } else if (page === 'next') {
        if (state.currentPage < totalPages) state.currentPage++;
      } else {
        const n = parseInt(page, 10);
        if (Number.isFinite(n)) state.currentPage = n;
      }
      renderTable();
    });
  }

  const perPageDropdown = document.querySelector('[data-per-page]');
  if (perPageDropdown) {
    perPageDropdown.addEventListener('dropdown:change', (e) => {
      const newPerPage = parseInt(e.detail.value, 10);
      if (Number.isFinite(newPerPage)) {
        state.perPage = newPerPage;
        state.currentPage = 1;
        renderTable();
      }
    });
  }
}
