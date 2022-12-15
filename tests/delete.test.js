/**
 * @jest-environment jsdom
 */

import Task from '../src/task.js';
import ToDoList from '../src/list.js';

test('delete one task to the list', () => {
  const section = document.createElement('div');
  const toDoList = new ToDoList(section, []);
  const task = new Task('write a task', false, toDoList);
  toDoList.add(task);
  toDoList.remove(task);

  expect(toDoList.array.length).toBe(0);
});