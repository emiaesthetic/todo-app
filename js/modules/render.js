import {
  createTitle,
  createRow,
  createTable,
  createForm,
  createLoginForm,
} from './createElements.js';

export const renderToDo = (app) => {
  const title = createTitle();
  const {table, tableWrapper} = createTable();
  const form = createForm();
  const {overlay, loginForm} = createLoginForm();

  app.append(title, form, tableWrapper, overlay);

  return {
    overlayForm: overlay,
    list: table.tbody,
    loginForm,
    form,
  };
};

export const renderTasks = (elem, data) => {
  const allRow = data.map(createRow);
  elem.append(...allRow);
  return allRow;
};
