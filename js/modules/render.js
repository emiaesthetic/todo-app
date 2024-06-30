import {
  createRow,
  createTable,
  createForm,
  createLogin,
  createTitle,
} from './createElements.js';

export const renderToDo = (app) => {
  const {table, tableWrapper} = createTable();
  const form = createForm();
  const {overlay, login} = createLogin();

  app.append(form, tableWrapper, overlay);

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

export const greetUser = (app, userName) => {
  const title = createTitle(userName);
  app.prepend(title);
};
