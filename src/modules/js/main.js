import '../scss/main.scss';
import { initAnimations } from './custom/animations.js';
import { initControls } from './custom/controls.js';
import { initSidebar } from './custom/sidebar.js';
import { initTable } from './custom/table.js';

document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initControls();
  initTable();
  initAnimations();
});
