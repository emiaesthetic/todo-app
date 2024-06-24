const createButton = ({className, type, text}) => {
  const button = document.createElement('button');
  button.type = type;
  button.className = className;
  button.textContent = text;

  return button;
};

export const createTitle = () => {
  const h3 = document.createElement('h3');
  h3.textContent = 'Todo App';

  return h3;
};

export const createRow = ({id, task, status}) => {
  const tr = document.createElement('tr');
  tr.className = status === 'Выполнена' ? 'table-success' : 'table-light';
  tr.dataset.id = id;

  const tdID = document.createElement('td');
  tdID.className = 'task-id';

  const tdTask = document.createElement('td');
  tdTask.className =
    status === 'Выполнена' ? 'text-decoration-line-through' : 'task';
  tdTask.textContent = task;

  const tdStatus = document.createElement('td');
  tdStatus.className = 'task-status';
  tdStatus.textContent = status;

  const tdAction = document.createElement('td');
  const btnDelete = createButton({
    className: 'btn btn-danger me-3 delete',
    type: 'button',
    text: 'Удалить',
  });
  const btnComplete = createButton({
    className: 'btn btn-success complete',
    type: 'button',
    text: 'Завершить',
  });
  tdAction.append(btnDelete, btnComplete);

  tr.append(tdID, tdTask, tdStatus, tdAction);
  return tr;
};

export const createTable = () => {
  const tableWrapper = document.createElement('div');
  tableWrapper.classList.add('table-wrapper');

  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'table-bordered');

  const thead = document.createElement('thead');
  thead.insertAdjacentHTML(
      'afterbegin',
      `
      <tr>
          <th>№</th>
          <th>Задача</th>
          <th>Статус</th>
          <th>Действия</th>
      </tr>
    `,
  );
  const tbody = document.createElement('tbody');

  table.append(thead, tbody);
  table.thead = thead;
  table.tbody = tbody;

  tableWrapper.append(table);

  return {
    table,
    tableWrapper,
  };
};

export const createForm = () => {
  const form = document.createElement('form');
  form.classList.add('d-flex', 'align-items-center', 'mb-3');
  form.insertAdjacentHTML(
      'afterbegin',
      `
      <label class="form-group me-3 mb-0">
        <input
          class="form-control"
          type="text"
          name="task"
          placeholder="ввести задачу"
        >
      </label>
    `,
  );

  const btnAdd = createButton({
    className: 'btn btn-primary me-3',
    type: 'submit',
    text: 'Сохранить',
  });
  btnAdd.disabled = true;

  const btnReset = createButton({
    className: 'btn btn-warning',
    type: 'reset',
    text: 'Очистить',
  });

  form.btnAdd = btnAdd;
  form.btnReset = btnReset;
  form.append(btnAdd, btnReset);

  return form;
};
