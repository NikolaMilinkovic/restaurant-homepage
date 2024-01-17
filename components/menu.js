import './styles/menu.css';
import renderFooter from './footer';
import { removeContent, elementCreator, attributeCreator } from './functions';

// Handles rendering of the Menu page content
const renderMenu = () => {
    removeContent();
    const content = document.getElementById('content');
    content.appendChild(createMenuDiv());
    renderFooter();
};
// Creates div inside which Menu page content will be stored
const createMenuDiv = () => {
    const MenuDiv = document.createElement('div');
    MenuDiv.setAttribute('class', 'menu-div');

    return MenuDiv;
};
// Retrieves current content
const getContent = () => document.getElementById('content');

export default renderMenu;
