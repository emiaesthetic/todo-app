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

export const createRow = ({id, desc, status, priority}) => {
  const tr = document.createElement('tr');
  tr.className = status ? 'table-success' : priority;
  tr.dataset.id = id;

  const tdID = document.createElement('td');
  tdID.className = 'task-id';

  const tdDesc = document.createElement('td');
  tdDesc.className = 'task-desc';
  if (status) {
    tdDesc.classList.add('text-decoration-line-through');
  }
  tdDesc.textContent = desc;

  const tdStatus = document.createElement('td');
  tdStatus.className = 'task-status';
  tdStatus.textContent = status ? 'Выполнена' : 'В процессе';

  const btnEdit = createButton({
    className: 'btn btn-primary me-3 edit',
    type: 'button',
    text: 'Редактировать',
  });
  btnEdit.disabled = status;

  const btnDelete = createButton({
    className: 'btn btn-danger me-3 delete',
    type: 'button',
    text: 'Удалить',
  });

  const btnComplete = createButton({
    className: 'btn btn-success complete',
    type: 'button',
    text: status ? 'Возобновить' : 'Завершить',
  });

  const tdAction = document.createElement('td');
  tdAction.append(btnEdit, btnDelete, btnComplete);

  tr.append(tdID, tdDesc, tdStatus, tdAction);
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
          name="desc"
          placeholder="ввести задачу"
        >
      </label>
      <select class="form-select me-3" name="priority">
        <option value="table-light" selected>Обычная</option>
        <option value="table-warning">Важная</option>
        <option value="table-danger">Срочная</option>
      </select>
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

export const createLogin = () => {
  const overlay = document.createElement('div');
  overlay.classList.add('form-overlay');

  const login = document.createElement('form');
  login.classList.add('form', 'form-centered');
  login.insertAdjacentHTML(
      'afterbegin',
      `
        <h2 class="form-title mb-3">Авторизация</h2>
        <div class="form-group">
          <input
            class="form-input w-100 mb-3"
            name="user-name"
            type="text"
            placeholder="Введите логин..."
            autofocus
            required
          >
        </div>
  `,
  );

  const btnLogin = createButton({
    className: 'btn btn-primary me-3 w-75',
    type: 'submit',
    text: 'Войти',
  });

  login.append(btnLogin);
  overlay.append(login);

  return {
    overlay,
    login,
  };
};

export const openModal = (overlay) => {
  overlay.classList.add('is-visible');
};

export const closeModal = (overlay) => {
  overlay.classList.remove('is-visible');
};
