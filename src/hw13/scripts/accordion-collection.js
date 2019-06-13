import { Accordion } from './accordion.js';

class AccordionCollection {
    constructor(rootElement) {
        //protected
        this._rootElement = rootElement;
        //public
        this.accordions = [];
    }

    render () {
        this.accordionCollection = document.createElement('div');
        this.accordionCollection.classList.add('accordion__container'); 
        this._rootElement.appendChild(this.accordionCollection);
    }
    
    addAccordion (buttons = []) {
    
        const accordion = new Accordion(this.accordionCollection);
        accordion.render();
        for (let i = 0; i < buttons.length; i++) {
            accordion.addButton(buttons[i].caption + ` ${i}`, buttons[i].text);
            this.accordions.push(accordion);
        }
    }
}



export { AccordionCollection }