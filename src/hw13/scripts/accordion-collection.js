import { Accordion } from './accordion.js';

function AccordionCollection (rootElement) {
    this.accordions = [];
    this.rootElement = rootElement;

    this.render = render;
    this.addAccordion = addAccordion;
}

function render () {
    this.accordionCollection = document.createElement('div');
    this.accordionCollection.classList.add('accordion__container'); 
    this.rootElement.appendChild(this.accordionCollection);
}

function addAccordion(buttonsAmount = 10) {

    const accordion = new Accordion(this.accordionCollection);
    accordion.render();
    for (let i = 0; i < buttonsAmount; i++) {
        accordion.addButton('Button ' + i, `Lorem ipsum dolor sit amet, consectetur adipisicing 
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`);
        this.accordions.push(accordion);
    }
}

export { AccordionCollection }