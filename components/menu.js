import './styles/menu.css';
const content = document.getElementById('content');

// Handles rendering of the Menu page content
const renderMenu = () => {
    removeContent();
    content.appendChild(createMenuDiv());
}
// Creates div inside which Menu page content will be stored
const createMenuDiv = () => {
    const MenuDiv = document.createElement('div');
    MenuDiv.setAttribute('class', 'menuDiv');

    return MenuDiv;
}
// Removes the last child of the content element
const removeContent = () => {
    if (content.childElementCount > 1)
        content.removeChild(content.lastChild);
}

export { renderMenu };