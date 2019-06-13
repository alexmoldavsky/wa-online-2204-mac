class AccordionButton {
    constructor(rootElement) {
        //protected
        this._rootElement = rootElement;
        //public
        this.isExpanded = false;
        this.panelText = '';
        this.buttonText = '';
        this.onExpand = null;
    }

    render() {
        this.button = document.createElement('button');
        this.button.classList.add('accordion__button');
        this.button.textContent = this.buttonText;
    
        this.panel = document.createElement('div');
        this.panel.classList.add('accordion__panel');
        this.panel.innerHTML = '<p class="panel-text">'+this.panelText+'</p>';
    
        this.button.addEventListener('click', () => {
    
            if (this.isExpanded) {
                this.collapse();
            } else {
                if (this.onExpand !== null) {
                    this.onExpand();
                }
                this.expand();
            }
            
        });   
        
        this._rootElement.appendChild(this.button);
        this._rootElement.appendChild(this.panel);
     
    }
    
    expand() {
        if (!this.isExpanded) {
            this.panel.style.maxHeight = this.panel.scrollHeight + "px";
            this.panel.classList.add('expanded');
            this.button.classList.add('expanded');
            this.isExpanded = true;
        }
    }
    
    collapse() {
        if (this.isExpanded) {
            this.panel.style.maxHeight = 0;
            this.panel.classList.remove('expanded');
            this.button.classList.remove('expanded');
            this.isExpanded = false;
        }
    }
}




export { AccordionButton };