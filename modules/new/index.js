import '../BookForm.js';
import { library } from '../Library.js';
import { DateTime } from '../luxon.js';
import Router from '../Router.js';

const todayContainer = document.getElementById('today');
const routerLinks = document.querySelectorAll('[data-to]');

todayContainer.textContent = DateTime.now().toFormat('DDD, tt');

library.render();

const router = new Router('list');

routerLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    router.navigate(link.dataset.to);
  });
});
