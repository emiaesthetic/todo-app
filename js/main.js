import {renderToDo, renderTasks} from './modules/render.js';

const data = {
  'xcode': [
    {
      id: 1,
      task: 'Buy elephant',
      status: 'Process',
    },
    {
      id: 2,
      task: 'Buy milk',
      status: 'Process',
    }
  ],
};

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

    const {list} = renderToDo(app);
    renderTasks(list, data['xcode']);

  };

  window.todoInit = init;
}
