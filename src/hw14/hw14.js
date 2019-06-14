import './hw14.scss';
import { CommentsWidget } from './scripts/comments-widget.js';

const windget = new CommentsWidget(document.querySelector('body'), 'Add comment');
windget.render();
