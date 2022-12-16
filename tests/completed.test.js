/**
 * @jest-environment jsdom
 */

import Task from '../src/task.js';
import ToDoList from '../src/list.js';

const section = document.createElement('div');
const toDoList = new ToDoList(section, []);

describe('toggling the complete checkbox', () => {
    beforeEach(() => {
        localStorage.clear();
      });
      
    test('change complete to incomplete', () => {
        const task = new Task('write a task', true, toDoList);
        toDoList.add(task);

        task.readOnly = false
        toDoList.store()

        expect(task.readOnly).toBe(false)
        expect(task.completed).toBe(false)
        expect(task.checkBox.node.checked).toBe(false)
        expect(localStorage.getItem('tasks')).toBe(`${JSON.stringify(task)}`)
    })

    test('change from incomplete to complete', () => {
        toDoList.array = []
       
        const task = new Task('write a task', false, toDoList);
        toDoList.add(task);

        task.readOnly = true
        toDoList.store()

        expect(task.readOnly).toBe(true)
        expect(task.completed).toBe(true)
        expect(task.checkBox.node.checked).toBe(true)
        expect(localStorage.getItem('tasks')).toBe(`${JSON.stringify(task)}`)
    })
})