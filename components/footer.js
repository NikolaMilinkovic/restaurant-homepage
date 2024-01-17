import './styles/footer.css';


// Handles rendering of the Footer component
const renderFooter = () => {
    const content = document.getElementById('content');
    const lastElement = content.lastElementChild;

    lastElement.appendChild(createFooter());
};
// Creates div inside which Footer page content will be stored
const createFooter = () => {
    const footer = document.createElement('footer');
    footer.setAttribute('class', 'footer-container');

    return footer;
};

export default renderFooter;
