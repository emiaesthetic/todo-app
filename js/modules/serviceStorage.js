const getStorage = (key) => JSON.parse(localStorage.getItem(key)) || {};

const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getUserTasks = (userName) => {
  const accounts = getStorage('accounts');
  return accounts[userName] || [];
};

export const generateID = (userName) => {
  const userTasks = getUserTasks(userName);
  const allTaskID = userTasks.map((task) => +task.id);

  return allTaskID.length ? Math.max(...allTaskID) + 1 : 1;
};

export const addUserTask = (userName, task) => {
  const accounts = getStorage('accounts');
  const userTasks = getUserTasks(userName);

  task.status = 'В процессе';
  userTasks.push(task);
  accounts[userName] = userTasks;

  setStorage('accounts', accounts);
};

export const removeUserTask = (userName, taskID) => {
  const accounts = getStorage('accounts');
  const userTasks = getUserTasks(userName);

  accounts[userName] = userTasks.filter((task) => task.id !== +taskID);

  setStorage('accounts', accounts);
};

export const completeUserTask = (userName, taskID) => {
  const accounts = getStorage('accounts');
  const userTasks = getUserTasks(userName);

  accounts[userName] = userTasks.map((task) => {
    task.status = task.id === +taskID ? 'Выполнена' : task.status;
    return task;
  });

  setStorage('accounts', accounts);
};
