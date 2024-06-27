import {getUserTasks} from './modules/serviceStorage.js';
import {renderToDo, renderTasks} from './modules/render.js';
import {openModal, closeModal} from './modules/createElements.js';
import {
  addTaskControl,
  editTaskControl,
  removeTaskControl,
  completeTaskControl,
} from './modules/controls.js';

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

    const {overlayLogin, login, form, list} = renderToDo(app);
    openModal(overlayLogin);

    login.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const userName = formData.get('user-name');

      const userTasks = getUserTasks(userName);
      renderTasks(list, userTasks);

      addTaskControl(form, list, userName);
      editTaskControl(list, userName),
      removeTaskControl(list, userName);
      completeTaskControl(list, userName);

      closeModal(overlayLogin);
    });
  };

  window.todoInit = init;
}
