import './hw16.scss';
import { TodoList } from './scripts/todo-list.js';

const todo = new TodoList(document.querySelector('body'), 'https://evening-dawn-11092.herokuapp.com/list');
todo.render();
todo.fetchTasks();