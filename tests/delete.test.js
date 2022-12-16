/**
 * @jest-environment jsdom
 */

import Task from '../src/task.js';
import ToDoList from '../src/list.js';

const section = document.createElement('div');
const toDoList = new ToDoList(section, []);
describe('delete task using the delete method', () => {
  test('delete one task', () => {
    const task = new Task('write a task', false, toDoList);
    toDoList.add(task);
    toDoList.remove(task);

    expect(toDoList.array.length).toBe(0);
  });
  test('delete multiple tasks', () => {
    const tasks = [new Task('write a task', false, toDoList),
      new Task('write a book', false, toDoList),
      new Task('write a letter', false, toDoList),
      new Task('write a email', false, toDoList),
      new Task('write a assignmet', false, toDoList),
    ];
    tasks.forEach((task) => {
      toDoList.add(task);
    });
    const numberOfDeletedTasks = Math.floor(Math.random() * 5);
    for (let i = numberOfDeletedTasks; i > 0; i -= 1) {
      toDoList.remove(tasks[i]);
    }

    expect(toDoList.array.length).toBe(5 - numberOfDeletedTasks);
  });
});
