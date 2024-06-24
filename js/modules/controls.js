import {createRow} from './createElements.js';
import {
  generateID,
  addUserTask,
  removeUserTask,
  completeUserTask,
} from './serviceStorage.js';

const addTaskPage = (list, task) => {
  const taskRow = createRow(task);
  list.append(taskRow);
};

export const formControl = (form, list, userName) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newTask = Object.fromEntries(formData);
    newTask.id = generateID(userName);

    addUserTask(userName, newTask);
    addTaskPage(list, newTask);

    form.reset();
    form.btnAdd.disabled = true;
  });

  form.addEventListener('reset', () => {
    form.btnAdd.disabled = true;
  });

  form.addEventListener('keyup', () => {
    form.btnAdd.disabled = !form.task.value.trim();
  });
};

export const removeTaskControl = (list, userName) => {
  list.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.delete')) {
      const userAnswer = confirm('Вы точно хотите удалить задачу?');

      if (userAnswer) {
        const row = target.closest('tr');
        removeUserTask(userName, row.dataset.id);
        row.remove();
      }
    }
  });
};

export const completeTaskControl = (list, userName) => {
  list.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.complete')) {
      const row = target.closest('tr');
      row.className = 'table-success';

      const task = row.querySelector('.task');
      task.className = 'text-decoration-line-through';

      const status = row.querySelector('.task-status');
      status.textContent = 'Выполнена';

      completeUserTask(userName, row.dataset.id);
    }
  });
};
