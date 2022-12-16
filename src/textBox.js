class TextBox {
  constructor(task, list) {
    this.node = document.createElement('input');
    this.task = task
    this.list = list
    this.node.value = task.description;

    this.node.addEventListener('input', () => {
      task.description = this.node.value;
      list.store();
    });
  }

  updateDescription  = (text) => {
    this.task.description = text;
    this.node.value = text;
    this.list.store();
  }
}

export default TextBox;