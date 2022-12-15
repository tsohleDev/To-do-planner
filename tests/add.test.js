/**
 * @jest-environment jsdom
 */

import Task from '../src/task.js';
import ToDoList from '../src/list.js';

test('add one task to the list', () => {
  const section = document.createElement('div');
  const toDoList = new ToDoList(section, []);

  const task = new Task('write a book', false, toDoList);

  toDoList.add(task);

  expect(toDoList.array.length).toBe(1);
});