import './styles/footer.css';
import { elementWithLink, elementCreator, attributeCreator } from './functions';


// Handles rendering of the Footer component
const renderFooter = () => {
    const content = document.getElementById('content');
    const lastElement = content.lastElementChild;

    const footer = createFooterElements(createFooter());
    lastElement.appendChild(footer);
};
// Creates div inside which Footer page content will be stored
const createFooter = () => {
    const footer = document.createElement('footer');
    footer.setAttribute('class', 'footer-container');

    return footer;
};
// Creates footer elements
const createFooterElements = (footer) => {
    const text = [
        'Created by',
        '',
        'Icons taken from<br>',
    ];

    // Div container for elements
    const el = elementCreator('div', '');
    attributeCreator(el, 'class', 'footer-element');

    for (let i = 0; i < 3; i++) {
        // Text element for footer
        const para = elementCreator('para', text[i]);
        el.appendChild(para);
        if (i === 1) {
            const linkedElement = elementWithLink('Nikola Milinkovic', 'https://github.com/NikolaMilinkovic');
            linkedElement.classList.add('linked-element');
            el.appendChild(linkedElement);
        }
        if (i === 2) {
            const linkedElement = elementWithLink('www.flaticon.com', 'https://www.flaticon.com');
            linkedElement.classList.add('linked-element');
            el.appendChild(linkedElement);
        }
    }
    footer.appendChild(el);
    return footer;
};

export default renderFooter;
