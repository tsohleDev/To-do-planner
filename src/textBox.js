class TextBox {
    constructor (task, list){
        this.node = document.createElement('input');
        this.node.value = task.description;

        this.node.addEventListener('input', () => {
            task.description = this.node.value
            list.store()
        })
    }
}

export default TextBox