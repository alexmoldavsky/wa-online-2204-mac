import { AccordionButton } from './accordion-button.js';

function Accordion (rootElement) {
    this.buttons = [];
    this.rootElement = rootElement;

    this.render = render;
    this.addButton = addButton;
}

function render () {
    this.accordion = document.createElement('div');
    this.accordion.classList.add('accordion'); 
    this.rootElement.appendChild(this.accordion);
}

function addButton (buttonText, panelText) {
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

export { Accordion }