const fs = require('fs/promises');
const path = require('path');

const TASKS_FILE = path.join(__dirname, 'tasks.json');

async function getData() {
  try {
    const data = await fs.readFile(TASKS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return { lastId: 0, tasks: [] };
    }
    throw error;
  }
}

async function saveData(data) {
  await fs.writeFile(TASKS_FILE, JSON.stringify(data, null, 2));
}

async function getTasks() {
  const data = await getData();
  return data.tasks;
}

async function addTask(title) {
  const data = await getData();
  data.lastId += 1;
  const newTask = {
    id: data.lastId,
    title: title,
    completed: false
  };
  data.tasks.push(newTask);
  await saveData(data);
  return newTask;
}

async function markComplete(id) {
  const data = await getData();
  const task = data.tasks.find(t => t.id === id);
  if (!task) {
    throw new Error('Tugas tidak ditemukan');
  }
  task.completed = true;
  await saveData(data);
  return task;
}

async function deleteTask(id) {
  const data = await getData();
  const index = data.tasks.findIndex(t => t.id === id);
  if (index === -1) {
    throw new Error('Tugas tidak ditemukan');
  }
  data.tasks.splice(index, 1);
  await saveData(data);
}

module.exports = {
  getTasks,
  addTask,
  markComplete,
  deleteTask
};