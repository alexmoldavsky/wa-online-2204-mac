import { AccordionButton } from './accordion-button.js';

class Accordion {
    constructor(rootElement) {
        //protected
        this._rootElement = rootElement;
        //public
        this.buttons = [];
    }

    render () {
        this.accordion = document.createElement('div');
        this.accordion.classList.add('accordion'); 
        this._rootElement.appendChild(this.accordion);
    }
    
    addButton (buttonText, panelText) {
        const accordBtn = new AccordionButton(this.accordion);
        accordBtn.buttonText = buttonText;
        accordBtn.panelText = panelText;
        accordBtn.onExpand = () => {
            for (let i = 0; i < this.buttons.length; i++) {
                this.buttons[i].collapse();
            }
        };
        accordBtn.render();
        this.buttons.push(accordBtn);
    
    }
}



export { Accordion }