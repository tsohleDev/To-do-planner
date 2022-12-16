/**
 * @jest-environment jsdom
 */

import Task from '../src/task.js';
import ToDoList from '../src/list.js';
import TextBox from '../src/textBox.js';

const section = document.createElement('div');
const toDoList = new ToDoList(section, []);

describe('textbox Editing', () => {
  test('change text', () => {
    const task = new Task('write a task', true, toDoList);
    const textBox = new TextBox(task, toDoList);

    const string = 'play a musical piece';
    textBox.updateDescription(string);

    expect(textBox.node.value).toBe(string);
  });

  test('append multiple times', () => {
    const task = new Task('write a task', true, toDoList);
    const textBox = new TextBox(task, toDoList);

    let string = '';

    for (let i = 0; i < 5; i += 1) {
      string = `${string}eat `;
      textBox.updateDescription(string);
    }

    expect(textBox.node.value).toBe(string);
  });
});
