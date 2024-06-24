import {
  createTitle,
  createRow,
  createTable,
  createForm,
} from './createElements.js';

export const renderToDo = (app) => {
  const title = createTitle();
  const {table, tableWrapper} = createTable();
  const form = createForm();

  app.append(title, form, tableWrapper);

  return {
    list: table.tbody,
    form,
  };
};

export const renderTasks = (elem, data) => {
  const allRow = data.map(createRow);
  elem.append(...allRow);
  return allRow;
};
