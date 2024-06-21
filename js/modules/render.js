import {
  createTitle,
  createTable,
  createForm,
} from "./createElements.js";

export const renderToDo = (app) => {
  const title = createTitle();
  const {table, tableWrapper} = createTable();
  const {form, btnAdd, btnReset} = createForm();

  app.append(title, form, tableWrapper);

  return {
    thead: table.thead,
    list: table.tbody,
    form,
    btnAdd,
    btnReset,
  };
};
