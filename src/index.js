import "./style.css";
import Task from "./task.js";

const section = document.querySelector('#list')
let list = [new Task(0, 'Read', false), new Task(1, 'Eat', true),new Task(2, 'Write', false)]

const loadItems = () => {
    list.forEach(task => {
        const {i, description, com} = task

        const div = document.createElement('div')
        const display = [document.createElement('input'), document.createElement('input'), document.createElement('button')]
        display[0].type = 'checkbox'
        display[1].readOnly = true
        display[1].value = description
        console.log(display[1].value);
        display.forEach(element => {
            div.appendChild(element)
        });
        section.appendChild(div)
    });
}

loadItems()