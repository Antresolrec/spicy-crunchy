import ShowBlock from './modules/showBlock';
import AnimDecor from './modules/animDecor';

// заглушка для бразуера IE
// new Ie();

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('_loaded');

  const initModule = (item, selectors) => {
    const Module = item;
    if (selectors) {
      const elements = document.querySelectorAll(selectors);
      elements.forEach((el) => {
        new Module(el);
      });
    } else {
      new Module();
    }
  };

  initModule(ShowBlock, '.js-anim');
  initModule(AnimDecor);
});
