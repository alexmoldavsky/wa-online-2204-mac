export class Task {
    constructor (rootElem, title) {
        this._rootElem = rootElem;
        this._title = title;
        this._isDone = false;
    }

    render() {
        this.task = document.createElement('li');
        this.task.classList.add('todo-list__task'); 
        this.task.addEventListener('click', () => {
            this.state = !this.state;
        });
        this._rootElem.appendChild(this.task);

        this.title = document.createElement('span');
        this.title.classList.add('task-text'); 
        this.title.textContent = this._title;
        this.task.appendChild(this.title);
    }

    set state(isDone) {
        this._isDone = isDone;
        if (isDone) {
            this.task.classList.add('done');  
        } else {
            this.task.classList.remove('done');  
        }
    }

    get state() {
        return this._isDone;
    }

}    