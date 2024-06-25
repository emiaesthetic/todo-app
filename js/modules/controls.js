import {createRow} from './createElements.js';
import {
  generateID,
  addUserTask,
  editUserTask,
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

  form.addEventListener('input', () => {
    form.btnAdd.disabled = !form.desc.value.trim();
  });
};

export const editTaskControl = (list, userName) => {
  list.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.edit')) {
      const row = target.closest('tr');
      const desc = row.querySelector('.task-desc');

      if (desc.contentEditable === 'true') {
        desc.contentEditable = false;
        target.textContent = 'Редактировать';
        editUserTask(userName, row.dataset.id, desc.textContent);
      } else {
        console.log(desc);
        desc.contentEditable = true;
        target.textContent = 'Сохранить';
      }
    }
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

      const desc = row.querySelector('.task-desc');
      desc.className = 'text-decoration-line-through';

      const status = row.querySelector('.task-status');
      status.textContent = 'Выполнена';

      row.querySelector('.edit').remove();
      row.querySelector('.complete').remove();
      row.querySelector('.delete').classList.add('btn-centered');

      completeUserTask(userName, row.dataset.id);
    }
  });
};
