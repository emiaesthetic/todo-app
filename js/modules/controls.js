import {createRow} from './createElements.js';
import {
  getNextTaskID,
  addUserTask,
  editUserTask,
  removeUserTask,
  completeUserTask,
  getTaskPriority,
} from './serviceStorage.js';

const addTaskPage = (list, task) => {
  const taskRow = createRow(task);
  list.append(taskRow);
};

export const addTaskControl = (form, list, userName) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newTask = Object.fromEntries(formData);
    newTask.id = getNextTaskID(userName);

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
      desc.contentEditable = 'true';

      desc.addEventListener('blur', () => {
        desc.contentEditable = false;
        editUserTask(userName, row.dataset.id, desc.textContent);
      });
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
      const desc = row.querySelector('.task-desc');
      const status = row.querySelector('.task-status');
      const btnEdit = row.querySelector('.edit');
      const btnComplete = row.querySelector('.complete');

      desc.classList.toggle('text-decoration-line-through');
      if (btnComplete.textContent === 'Завершить') {
        row.className = 'table-success';
        status.textContent = 'Выполнена';
        btnEdit.disabled = true;
        btnComplete.textContent = 'Возобновить';
      } else {
        row.className = getTaskPriority(userName, row.dataset.id);
        status.textContent = 'В процессе';
        btnEdit.disabled = false;
        btnComplete.textContent = 'Завершить';
      }

      completeUserTask(userName, row.dataset.id);
    }
  });
};
