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

describe('delete all completed', () => {
  test('delete completed and leave incomplete', () => {
    const tasks = [new Task('write a task', false, toDoList),
      new Task('write a book', true, toDoList),
      new Task('write a letter', true, toDoList),
      new Task('write a email', true, toDoList),
      new Task('write a assignmet', false, toDoList),
    ];

    toDoList.array = [];
    tasks.forEach((task) => toDoList.add(task));

    toDoList.removeAllComplete();

    expect(toDoList.array.length).toBe(2);
  });

  test('when none is completed', () => {
    const tasks = [new Task('write a task', false, toDoList),
      new Task('write a book', false, toDoList),
      new Task('write a letter', false, toDoList),
      new Task('write a email', false, toDoList),
      new Task('write a assignmet', false, toDoList),
    ];

    toDoList.array = [];
    tasks.forEach((task) => toDoList.add(task));

    toDoList.removeAllComplete();

    expect(toDoList.array.length).toBe(5);
  });

  test('when all are completed', () => {
    const tasks = [new Task('write a task', true, toDoList),
      new Task('write a book', true, toDoList),
      new Task('write a letter', true, toDoList),
      new Task('write a email', true, toDoList),
      new Task('write a assignmet', true, toDoList),
    ];

    toDoList.array = [];
    tasks.forEach((task) => toDoList.add(task));

    toDoList.removeAllComplete();

    expect(toDoList.array.length).toBe(0);
  });
});
