/**
 * @jest-environment jsdom
 */

import Task from '../src/task.js';
import ToDoList from '../src/list.js';



describe('ticking the checkBox', () => {
    beforeEach(() => {
        window.localStorage.clear();
      });
    
    test('there is a local storage', () => {
        const section = document.createElement('div');
const toDoList = new ToDoList(section, []);

      toDoList.add(new Task('we', false, toDoList))
      toDoList.store(localStorage)
      expect(localStorage.__STORE__).toBeFalsy()
    })

    test('test', () => {
        const section = document.createElement('div');
        const toDoList = new ToDoList(section, []);
        
        const mockId = "222";
    const mockOldData = { data: "json data" };
    const mockNewData = { data: " new data" };

    window.localStorage.setItem(mockId, JSON.stringify(mockOldData));
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockOldData));
    })
})

