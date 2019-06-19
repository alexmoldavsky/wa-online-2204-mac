import { Task } from './task.js';

export class TodoList {
    constructor (rootElem, url) {
        this._rootElem = rootElem;
        this.url = url;
        this.response = [];
    }

    render() {
        this.todoListPanel = document.createElement('div');
        this.todoListPanel.classList.add('todo-list-panel'); 
        this._rootElem.appendChild(this.todoListPanel);

        this.todoList = document.createElement('ul');
        this.todoList.classList.add('todo-list'); 
        this.todoListPanel.appendChild(this.todoList);

        this.taskAdd = document.createElement('button');
        this.taskAdd.classList.add('task-add'); 
        this.taskAdd.textContent = '+';
        this.taskAdd.addEventListener('click', () => {
            if (this.taskTitle.value !== '') {
                this.addTask(this.taskTitle.value);
            }
        });
        this.todoListPanel.appendChild(this.taskAdd);

        this.taskTitle = document.createElement('input');
        this.taskTitle.classList.add('task-title'); 
        this.taskTitle.name = 'task-title';
        this.taskTitle.type = 'text';  
        this.todoListPanel.appendChild(this.taskTitle);
    }

    fetchTasks() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.url);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                this.response = JSON.parse(xhr.response);
                this.fillTodoListFromResponse();
            }
        }
    }

    addTask(title, isDone = false) {
        const task = new Task(this.todoList, title);
        task.render();
        task.state = isDone;
    }

    fillTodoListFromResponse() {
        for (const task of this.response) {
            this.addTask(task.title, task.completed);
        }
    }
}