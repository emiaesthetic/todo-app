import {renderToDo} from './modules/render.js';

{
  const init = (selectorApp, userName) => {
    const app = document.querySelector(selectorApp);
    app.classList.add(
      'vh-100',
      'w-100',
      'd-flex',
      'align-items-center',
      'justify-content-center',
      'flex-column',
    );
    renderToDo(app);
  };

  window.todoInit = init;
}
