import './styles/home.css';
const content = document.getElementById('content');

// Handles rendering of the Home page content
const renderHome = () => {
    removeContent();
    content.appendChild(createHomeDiv());
}
// Creates div inside which Home page content will be stored
const createHomeDiv = () => {
    const homeDiv = document.createElement('div');
    homeDiv.setAttribute('class', 'homeDiv');

    return homeDiv;
}
// Removes the last child of the content element
const removeContent = () => {
    if (content.childElementCount > 1)
        content.removeChild(content.lastChild);
}

export { renderHome };