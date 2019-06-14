class Comment {
    constructor (rootElem, user, message) {
        this._rootElem = rootElem; 
        this._user = user;
        this._message = message;
    }

    render () {
        this.comment = document.createElement('div');
        this.comment.classList.add('comment'); 
        this.comment.style.opacity = 1;
        this._rootElem.appendChild(this.comment);
        

        this.commentFrom = document.createElement('div');
        this.commentFrom.classList.add('comment__from'); 
        this.comment.appendChild(this.commentFrom);

        this.fromSpan = document.createElement('span');
        this.fromSpan.classList.add('from'); 
        this.fromSpan.textContent = this._user;
        this.commentFrom.appendChild(this.fromSpan);

        this.commentText = document.createElement('p');
        this.commentText.classList.add('comment__text'); 
        this.commentText.textContent = this._message;
        this.comment.appendChild(this.commentText);

        this.commentDate = document.createElement('div');
        this.commentDate.classList.add('comment__date'); 
        this.comment.appendChild(this.commentDate);

        this.dateSpan = document.createElement('span');
        this.dateSpan.classList.add('date'); 
        this.dateSpan.textContent = this.getDateTime();
        this.commentDate.appendChild(this.dateSpan);
    }

    getDateTime () {
        function FixDate(date) {
            if (String(date).split('').length === 1) {
                date = String(0) + date;
            }
            return date;
        }

        const dt = new Date();
        const dd = FixDate(dt.getDate());
        const mm = FixDate(Number(dt.getMonth()) + 1);
        const yyyy = dt.getFullYear();
        const hh = FixDate(dt.getHours());
        const mi = FixDate(dt.getMinutes());
        return `${dd}.${mm}.${yyyy} in ${hh}:${mi}`;
    }
}

export { Comment }