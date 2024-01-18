import './styles/contact.css';
import renderFooter from './footer';
import { removeContent, elementCreator, attributeCreator } from './functions';

const content = document.getElementById('content');
const mapLink = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1414.4817328536326!2d20.38096979533035!3d44.84267737268497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a658c8214fe9f%3A0x45b760c2cb127def!2sZaga!5e0!3m2!1sen!2srs!4v1705535098695!5m2!1sen!2srs" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

// Handles rendering of the Contact page content
const renderContact = () => {
    removeContent();


    const mainContainer = createContactDiv();
    const contentContainer = getContainer('content-container');
    const mapContainer = getContainer('map-container');
    const infoContainer = getContainer('info-container');


    contentContainer.appendChild(mapContainer);
    contentContainer.appendChild(infoContainer);
    mainContainer.appendChild(contentContainer);

    content.appendChild(mainContainer);
    renderFooter();
};

// Creates div inside which Contact page content will be stored
const createContactDiv = () => {
    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('class', 'contact-div');

    return contactDiv;
};
// Created map container
const getContainer = (className) => {
    const Container = elementCreator('div', '');
    Container.classList.add(`${className}`);
    return Container;
};



export default renderContact;
