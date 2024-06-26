import {renderToDo} from './modules/render.js';
import {loginFormControl} from './modules/controls.js';

{
  const init = (selectorApp) => {
    const app = document.querySelector(selectorApp);
    app.classList.add(
        'vh-100',
        'w-100',
        'd-flex',
        'align-items-center',
        'justify-content-center',
        'flex-column',
    );

    const renderApp = renderToDo(app);
    loginFormControl(renderApp);
  };

  window.todoInit = init;
}
