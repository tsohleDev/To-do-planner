/**
 * @jest-environment jsdom
 */

import Task from '../src/task.js';
import ToDoList from '../src/list.js';

const section = document.createElement('div');
const toDoList = new ToDoList(section, []);

describe('Adding falsey Tasks', () => {
  test('null case', () => {
    const task = null;
    toDoList.add(task);

    expect(toDoList.array.length).toBe(0);
  });

  test('wrong type', () => {
    const tasks = ['fsghj', 64];
    tasks.forEach((task) => {
      toDoList.add(task);
    });

    expect(toDoList.array.length).toBe(0);
  });
});

describe('Adding Truthy Tasks', () => {
  test('add one task to the list', () => {
    const task = new Task('write a book', false, toDoList);

    toDoList.add(task);

    expect(toDoList.array.length).toBe(1);
  });

  test('add number of task', () => {
    const numberOfTasks = Math.floor(Math.random() * 7) + 1;
    for (let i = 0; i < numberOfTasks; i += 1) {
      toDoList.add(new Task('Read', false, toDoList));
    }

    expect(toDoList.array.length).toBe(numberOfTasks + 1);
  });
});