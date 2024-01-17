import './styles/contact.css';
import renderFooter from './footer';
import { removeContent, elementCreator, attributeCreator } from './functions';

const content = document.getElementById('content');

// Handles rendering of the Contact page content
const renderContact = () => {
    removeContent();
    content.appendChild(createContactDiv());
    renderFooter();
};

// Creates div inside which Contact page content will be stored
const createContactDiv = () => {
    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('class', 'contactDiv');

    return contactDiv;
};

export default renderContact;
