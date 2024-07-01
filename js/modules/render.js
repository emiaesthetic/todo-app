import {
  createRow,
  createTable,
  createForm,
  createLogin,
  createConfirm,
  createTitle,
} from './createElements.js';

export const renderToDo = (app) => {
  const {table, tableWrapper} = createTable();
  const form = createForm();
  const {loginOverlay, loginForm} = createLogin();
  const {confirmOverlay, confirmForm} = createConfirm();

  app.append(form, tableWrapper, loginOverlay, confirmOverlay);

  return {
    list: table.tbody,
    confirmOverlay,
    loginOverlay,
    confirmForm,
    loginForm,
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
