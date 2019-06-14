import { Comment } from './comment.js';

class CommentsWidget {
    constructor (rootElem, buttonCaption) {
        this._rootElem = rootElem;
        this._buttonCaption = buttonCaption;
    } 

    render () {
        this.commentsWidget = document.createElement('div');
        this.commentsWidget.classList.add('comments-widget'); 
        this._rootElem.appendChild(this.commentsWidget);

        this.commentsForm = document.createElement('form');
        this.commentsForm.classList.add('comments-form');
        this.commentsForm.onsubmit = () => false;
        this.commentsWidget.appendChild(this.commentsForm);

        this.inputFrom = document.createElement('input');
        this.inputFrom.classList.add('input', 'comments-form__from');
        this.inputFrom.name = 'from';
        this.inputFrom.type = 'text';
        this.inputFrom.placeholder = 'Enter your name';
        this.commentsForm.appendChild(this.inputFrom);

        this.inputText = document.createElement('textarea');
        this.inputText.classList.add('input', 'comments-form__text');
        this.inputText.name = 'comment';
        this.inputText.placeholder = 'Enter your message';
        this.commentsForm.appendChild(this.inputText);

        this.inputMessage = document.createElement('div');
        this.inputMessage.classList.add('comments-form__message'); 
        this.commentsForm.appendChild(this.inputMessage);

        this.inputSubmit = document.createElement('input');
        this.inputSubmit.classList.add('input', 'comments-form__submit');
        this.inputSubmit.type = 'submit';
        this.inputSubmit.value = this._buttonCaption;
        this.inputSubmit.addEventListener('click', () => this.submitClick());
        this.commentsForm.appendChild(this.inputSubmit);

        this.commentsView = document.createElement('div');
        this.commentsView.classList.add('comments-view'); 
        this.commentsWidget.appendChild(this.commentsView);
       
    }

    submitClick () {
        if (this.validateForm() === true) {
            this.comment = new Comment(this.commentsView, 
                                       this.inputFrom.value,
                                       this.inputText.value);
            this.comment.render();

        }
    }

    validateForm () {
        let isOk = false;
        if (this.inputFrom.value == '') {
            this.showMessage ('Please enter your name');
        } else if (this.inputText.value == '') {
            this.showMessage ('Please enter your message');
        } else {
            this.hideMessage ();
            isOk = true;
        }
        return isOk;
    }

    showMessage (message) {
        this.inputMessage.classList.add('visible');
        this.inputMessage.textContent = message;
    }

    hideMessage () {
        this.inputMessage.classList.remove('visible');
    }
}

export { CommentsWidget }