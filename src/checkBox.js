class CheckBox {
    constructor (task, list){
        this.node = document.createElement('input');
        this.node.type = 'checkbox';

        this.checkbox.addEventListener('change', () => {
            task.complete = this.node.checked
            list.store()
        })
    }

    /**
     * @param {boolean} bool
     */
    set complete (bool){
        this.node.checked = bool
    }
}

export default Completion