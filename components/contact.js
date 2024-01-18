import './styles/contact.css';
import renderFooter from './footer';
import { removeContent, elementCreator } from './functions';

const content = document.getElementById('content');

// Handles rendering of the Contact page content
const renderContact = () => {
    removeContent();


    const mainContainer = createContactDiv();
    const contentContainer = getContainer('content-container');
    const mapSection = getContainer('map-section');
    const infoSection = getContainer('info-section');

    // Creates and appends google map
    appendGoogleMap(mapSection);
    // Creates and appends form
    formCreator(infoSection);


    contentContainer.appendChild(mapSection);
    contentContainer.appendChild(infoSection);
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
// Appends google map link
const appendGoogleMap = (parent) => {
    const iframeContainer = document.createElement('div');
    iframeContainer.classList.add('iframe-container');
    const iframe = document.createElement('iframe');

    iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1414.4817328536326!2d20.38096979533035!3d44.84267737268497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a658c8214fe9f%3A0x45b760c2cb127def!2sZaga!5e0!3m2!1sen!2srs!4v1705535098695!5m2!1sen!2srs';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.border = '0';
    iframe.allowfullscreen = true;
    iframe.loading = 'lazy';
    iframe.referrerpolicy = 'no-referrer-when-downgrade';

    iframeContainer.appendChild(iframe);
    parent.appendChild(iframeContainer);
};
// Crates a form element and appends it to parent element
const formCreator = (parent) => {
    // Handles form
    const form = document.createElement('form');
    form.id = 'form';
    form.classList.add('form');

    // Creates form elements
    const name = formElCreator('input', 'text', 'input-name', 'input-el', 'Name *', 'Name', 'input-el-container');

    const email = formElCreator('input', 'email', 'input-email', 'input-el', 'Email Adress *', 'Email Adress', 'input-el-container');

    const phone = formElCreator('input', 'text', 'input-phone', 'input-el', 'Phone *', 'Phone', 'input-el-container');

    const message = formElCreator('textarea', 'text', 'input-message', 'input-el', 'Message *', 'Message', 'input-el-container');

    // Creates form button container
    const formButtonContainer = document.createElement('div');
    formButtonContainer.classList.add('form-btn-container');

    // Creates form button
    const formButton = document.createElement('button');
    // Change this to make the button into submit button
    formButton.type = 'button';
    formButton.textContent = 'Contact Us';
    formButton.classList.add('form-btn');
    formButtonContainer.appendChild(formButton);
    formButton.addEventListener('click', () => {
        clearInput();
    });

    // Handles appending elements to the form
    form.appendChild(name);
    form.appendChild(email);
    form.appendChild(phone);
    form.appendChild(message);
    form.appendChild(formButtonContainer);

    parent.appendChild(form);
};
// Creates a form element and returns itself
const formElCreator = (element, type, id, className, placeholder, labelTxt, containerClassName) => {
    // Container
    const elementContainer = document.createElement('div');
    elementContainer.classList.add(`${containerClassName}`);

    // Label
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = `${labelTxt}`;

    // Element
    const el = document.createElement(`${element}`);
    el.id = `${id}`;
    el.classList.add(`${className}`);
    el.placeholder = `${placeholder}`;
    if (element.toLowerCase() === 'textarea') {
        el.rows = 4;
    } else {
        el.type = `${type}`;
    }

    // Handles appening elements
    elementContainer.appendChild(label);
    elementContainer.appendChild(el);

    return elementContainer;
};
// Clears all input fields
const clearInput = () => {
    const inputs = document.querySelectorAll('input');
    const txtInputs = document.querySelectorAll('textarea');

    inputs.forEach((input) => {
        input.value = '';
    });

    txtInputs.forEach((input) => {
        input.value = '';
    });
};

export default renderContact;
