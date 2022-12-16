import CheckBox from './checkBox.js';
import TextBox from './textBox.js';

class Task {
  constructor(description, completed, list) {
    this.index = list.count + 1;
    this.completed = completed;
    this.description = description;

    this.checkBox = new CheckBox(this, list);
    this.textBox = new TextBox(this, list).node;
    this.button = document.createElement('button');
    this.save = document.createElement('button');
    this.button.addEventListener('click', () => {
      if (!this.#readOnly) list.remove(this);

      this.readOnly = this.completed;
    });
    this.save = document.createElement('button');
    this.save.innerHTML = '<i class="fa-solid save fa-floppy-disk"></i>';
    this.save.style.visibility = 'hidden';
    this.save.addEventListener('click', () => {
      this.readOnly = this.completed;
    });
  }

  #readOnly = this.completed || false

  #updateHtmlNode = () => {
    if (this.#readOnly) {
      this.button.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
      this.textBox.readOnly = true;
      this.save.style.visibility = 'hidden';
    } else {
      this.button.innerHTML = '<i class="fa-solid fa-trash"></i>';
      this.textBox.readOnly = false;
      this.save.style.visibility = 'visible';
    }
  }

  set readOnly(b) {
    console.log(this.#readOnly)
    this.#readOnly = b;
    this.completed = this.#readOnly
    this.checkBox.node.checked = this.#readOnly
    console.log(this.#readOnly)
    this.#updateHtmlNode();
  } 

  get readOnly(){
    return this.#readOnly
  }

  removeSelf = () => {
    this.checkBox.node.parentNode.remove();
  }

  appendTo(div) {
    div.appendChild(this.checkBox.node);
    div.appendChild(this.textBox);
    div.appendChild(this.save);
    div.appendChild(this.button);
  }
}

export default Task;