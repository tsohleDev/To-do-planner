import './style.css';
import ToDoList from './list.js';
import Task from './task.js';

const section = document.querySelector('#list');
const addButton = document.querySelector('.add__task');
const description = document.querySelector('#description');
const removeAll = document.querySelector('#clear');
const list = new ToDoList(section);

addButton.addEventListener('click', () => {
  list.add(new Task(description.value, false, list));
  description.value = null;
});

removeAll.addEventListener('click', () => {
  list.removeAllComplete();
});

window.addEventListener('DOMContentLoaded', () => {
  list.loadFromStorage();
});