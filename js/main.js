import {renderToDo, renderTasks} from './modules/render.js';
import {getUserTasks} from './modules/serviceStorage.js';
import {
  formControl,
  removeTaskControl,
  completeTaskControl,
} from './modules/controls.js';

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

    const {list, form} = renderToDo(app);

    const userTasks = getUserTasks(userName);
    renderTasks(list, userTasks);

    formControl(form, list, userName);
    removeTaskControl(list, userName);
    completeTaskControl(list, userName);
  };

  window.todoInit = init;
}
