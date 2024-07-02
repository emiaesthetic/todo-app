import {getUserTasks} from './modules/serviceStorage.js';
import {openModal, closeModal} from './modules/createElements.js';
import {renderToDo, renderTasks, greetUser} from './modules/render.js';
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

    const {
      list,
      confirmOverlay,
      loginOverlay,
      confirmForm,
      loginForm,
      form,
    } = renderToDo(app);
    openModal(loginOverlay);

    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const userName = formData.get('user-name');
      greetUser(app, userName);

      const userTasks = getUserTasks(userName);
      renderTasks(list, userTasks);

      addTaskControl(form, list, userName);
      editTaskControl(list, userName),
      completeTaskControl(list, userName);
      removeTaskControl(list, userName, confirmOverlay, confirmForm);

      closeModal(loginOverlay);
    });
  };

  window.todoInit = init;
}
