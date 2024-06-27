import {
  createTitle,
  createRow,
  createTable,
  createForm,
  createLogin,
} from './createElements.js';

export const renderToDo = (app) => {
  const title = createTitle();
  const {table, tableWrapper} = createTable();
  const form = createForm();
  const {overlay, login} = createLogin();

  app.append(title, form, tableWrapper, overlay);

  return {
    overlayLogin: overlay,
    list: table.tbody,
    login,
    form,
  };
};

export const renderTasks = (elem, data) => {
  const allRow = data.map(createRow);
  elem.append(...allRow);
  return allRow;
};
