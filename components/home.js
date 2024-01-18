import './styles/home.css';
import renderFooter from './footer';
import { removeContent, elementCreator, attributeCreator } from './functions';

const content = document.getElementById('content');


// Handles rendering of the Home page content
const renderHome = () => {
    removeContent();
    content.appendChild(divAppender());
    appendCards(populateCards(createInfoCards()));
    renderFooter();
};
// Handles appending divs
const divAppender = () => {
    const homeDiv = createHomeDiv();
    const gridDivArray = gridDivs();
    gridDivArray.forEach((element) => {
        homeDiv.appendChild(element);
    });

    return homeDiv;
};
// Creates div inside which Home page content will be stored
const createHomeDiv = () => {
    const homeDiv = document.createElement('div');
    homeDiv.setAttribute('class', 'homeDiv');

    return homeDiv;
};
// Creates and appends two children divs to createHomeDiv
// They are used to create default grid layout of the home page
const gridDivs = () => {
    const gridDiv_1 = document.createElement('div');
    const gridDiv_2 = document.createElement('div');
    const gridDiv_3 = document.createElement('div');

    gridDiv_1.setAttribute('class', 'grid-div-1');
    gridDiv_2.setAttribute('class', 'grid-div-2');
    gridDiv_3.setAttribute('class', 'grid-div-3');
    gridDiv_3.setAttribute('id', 'card-container');


    appendContentToDiv_1(gridDiv_1);

    return [gridDiv_1, gridDiv_2, gridDiv_3];
};
// Appends all the required content to the home drig div 1
const appendContentToDiv_1 = (gridDiv_1) => {
    const contentDiv = elementCreator('div', '');
    attributeCreator(contentDiv, 'class', 'home-content');

    // Elements to be appended to contentDiv
    const para = elementCreator('para', 'Discover your taste');
    const h1 = elementCreator('h1', 'Healthy, natural and outstanding!');
    const btn = elementCreator('button', 'Reserve now!');

    attributeCreator(para, 'class', 'para');
    attributeCreator(h1, 'class', 'home-h1');
    attributeCreator(btn, 'class', 'home-btn');

    contentDiv.appendChild(para);
    contentDiv.appendChild(h1);
    contentDiv.appendChild(btn);

    return gridDiv_1.appendChild(contentDiv);
};


// Creates information cards
const createInfoCards = () => {
    const cards = [];
    for (let i = 0; i < 4; i++) {
        const card = elementCreator('div', '');
        attributeCreator(card, 'class', 'card');
        cards.push(card);
    }
    return cards;
};
// Populates information cards
const populateCards = (cards) => {
    const icons = [
        'public/img/card-1-white.png',
        'public/img/card-2-white.png',
        'public/img/card-3-white.png',
        'public/img/card-4-white.png',
    ];
    const headers = [
        'Top chefs',
        'Wide veriety of food',
        'Tasty Pizza',
        'Curated wine selection',
    ];
    const texts = [
        'Because life is too short to eat boring food. Get ready for a taste party in your mouth!',
        'Variety is the spice of life, and our menu is the spice rack. Eat like nobody\'s watching!',
        'The only circle of trust you need. Cheesy, saucy, and always there for you.',
        'Because adulting is hard, but choosing wine shouldn’t be. Sip, savor, repeat.',
    ];


    // Goes through each card in cards array
    // Takes the values from given arrays
    // Sets those values for each card
    for (let i = 0; i < cards.length; i++) {
        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', icons[i]);
        attributeCreator(imgElement, 'class', 'png-container');
        const h2 = elementCreator('h2', headers[i]);
        attributeCreator(h2, 'class', 'card-header');
        const text = elementCreator('p', texts[i]);
        attributeCreator(text, 'class', 'card-text');


        // Appends elements to card
        cards[i].appendChild(imgElement);
        cards[i].appendChild(h2);
        cards[i].appendChild(text);
    }
    return cards;
};
// Appends cards from the cards array to the parent element
const appendCards = (cards) => {
    cards.forEach((card) => {
        const gridDiv_3 = document.getElementById('card-container');
        gridDiv_3.appendChild(card);
    });
};


export default renderHome;
