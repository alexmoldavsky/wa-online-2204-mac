import './hw13.scss';
import { AccordionCollection } from './scripts/accordion-collection.js';


const accordionCollection =  new AccordionCollection(document.querySelector('body')); 
accordionCollection.render();
let defCaption = 'Button';
let defText = `Lorem ipsum dolor sit amet, consectetur adipisicing 
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
let defArr = [{caption : defCaption, text : defText}, 
               {caption : defCaption, text : defText}, 
               {caption : defCaption, text : defText}, 
               {caption : defCaption, text : defText}];                
accordionCollection.addAccordion(defArr);
accordionCollection.addAccordion(defArr);
accordionCollection.addAccordion(defArr);
accordionCollection.addAccordion(defArr);
accordionCollection.addAccordion(defArr);