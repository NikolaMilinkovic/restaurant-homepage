import './styles/footer.css';
const content = document.getElementById('content');

// Handles rendering of the Contact page content
const renderContact = () => {
    removeContent();
    content.appendChild(createContactDiv());
}
// Creates div inside which Contact page content will be stored
const createContactDiv = () => {
    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('class', 'contactDiv');

    return contactDiv;
}
// Removes the last child of the content element
const removeContent = () => {
    if (content.childElementCount > 1)
        content.removeChild(content.lastChild);
}

export { renderContact };