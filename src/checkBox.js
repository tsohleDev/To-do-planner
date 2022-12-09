class CheckBox {
  constructor(task, list) {
    this.node = document.createElement('input');
    this.node.type = 'checkbox';
    this.node.checked = task.completed;

    this.node.addEventListener('change', () => {
      task.completed = this.node.checked;
      if (task.completed) {
        task.textBox.style.textDecoration = 'line-through';
      } else {
        task.textBox.style.textDecoration = 'none';
      }
      list.store();
    });
  }
}

export default CheckBox;