class Task {
  constructor(description, completed, list) {
    this.index = list.count;
    this.completed = completed;
    this.description = description;

    this.checkBox = document.createElement('input');
    this.checkBox.type = 'checkbox';
    this.textBox = document.createElement('input');
    this.textBox.value = description;
    this.button = document.createElement('button');
    this.button.addEventListener('click', () => {
      if (!this.#readOnly) list.remove(this);

      this.readOnly = true;
    });
    this.save = document.createElement('button');
    this.save.innerHTML = '<i class="fa-solid save fa-floppy-disk"></i>';
    this.save.style.visibility = 'hidden';
    this.save.addEventListener('click', () => {
      this.readOnly = true;
    });
  }

  #readOnly = false

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
    this.#readOnly = !this.#readOnly;
    this.#updateHtmlNode();
  }

  removeSelf = () => {
    this.checkBox.parentNode.remove();
  }

  appendTo(div) {
    div.appendChild(this.checkBox);
    div.appendChild(this.textBox);
    div.appendChild(this.save);
    div.appendChild(this.button);
  }
}

export default Task;