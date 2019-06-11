import './hw13.scss';
import { AccordionCollection } from './scripts/accordion-collection.js';


const accordionCollection =  new AccordionCollection(document.querySelector('body')); 
accordionCollection.render();
accordionCollection.addAccordion(5);
accordionCollection.addAccordion(3);
accordionCollection.addAccordion(10);
accordionCollection.addAccordion(7);
accordionCollection.addAccordion(4);