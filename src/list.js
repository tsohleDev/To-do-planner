import Task from './task.js';

class ToDoList {
  constructor(section, array = null) {
    this.section = section;
    if (!array) {
      this.array = [];
      return;
    }

    this.array = array;
    this.array.sort((a, b) => a.index - b.index);
  }

  get count() {
    return this.array.length;
  }

    add = (task) => {
      if (!task.textBox.value) {
        return;
      }

      task.index = this.array.length + 1;
      this.array.push(task);
      this.#appendToDIv(task);
      this.store();
    }

    remove = (task) => {
      const i = task.index;
      this.array.splice(i - 1, 1);
      task.removeSelf();
      this.store();
    }

    removeAll = () => {
      this.array = this.array.filter((task) => {
        if (task.completed) {
          task.removeSelf();
        }

        return !task.completed;
      });

      this.store();
    }

    #appendToDIv = (task) => {
      const div = document.createElement('div');
      task.appendTo(div);
      task.readOnly = true;
      this.section.appendChild(div);
    }

    loadItems = () => {
      this.array.forEach((task) => this.#appendToDIv(task));
    }

    store = () => {
      if (!this.array) return;

      let string = '';
      this.array.forEach((task, index) => {
        task.index = index + 1;
        string = `${string}${JSON.stringify(task)}|`;
      });
      string = string.substring(0, string.length - 1);
      localStorage.setItem('tasks', string);
    }

    loadFromStorage = () => {
      const storage = localStorage.getItem('tasks');
      this.removeAll();

      if (!storage) { return; }

      const objects = storage.split('|');

      if (objects[0] === '') { return; }

      this.array = objects.map((object) => {
        const obj = JSON.parse(object);
        return new Task(obj.description, obj.completed, this);
      });

      this.array.forEach((task) => {
        if (!task.textBox.value) {
          return;
        }

        task.index = this.array.length;
        this.#appendToDIv(task);
      });

      this.store();
    }
}

export default ToDoList;