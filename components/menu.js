import './styles/menu.css';
import renderFooter from './footer';
import { removeContent, elementCreator, attributeCreator } from './functions';

// Handles rendering of the Menu page content
const renderMenu = () => {
    removeContent();
    const content = document.getElementById('content');

    // Menu page main content div
    const menuContainer = createMenuDiv();

    // Child of menuContainer
    const menuContent = elementCreator('div', '');
    attributeCreator(menuContent, 'class', 'menu-content');

    // Child of menuContent
    // Displays all the cards
    const menuCardsContainer = elementCreator('div', '');
    attributeCreator(menuCardsContainer, 'class', 'menu-cards-container');

    cardAppender(menuCardsContainer, cards);

    // Child appending and displaying elements
    menuContent.appendChild(menuCardsContainer);
    menuContainer.appendChild(menuContent);
    content.appendChild(menuContainer);

    renderFooter();
};
// Creates div inside which Menu page content will be stored
const createMenuDiv = () => {
    const MenuDiv = document.createElement('div');
    MenuDiv.setAttribute('class', 'menu-container');

    return MenuDiv;
};
// Class & Method used for generating cards
class Card {
    constructor(imgUrl, header, text) {
        this.imgUrl = imgUrl;
        this.header = header;
        this.text = text;
        this.element = this.createCard();
    }

    // Method for card creation
    createCard() {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const imageElement = document.createElement('img');
        imageElement.classList.add('card-img');
        imageElement.src = this.imgUrl;
        cardElement.appendChild(imageElement);

        const headerElement = document.createElement('h2');
        headerElement.classList.add('card-header');
        headerElement.textContent = this.header;
        cardElement.appendChild(headerElement);

        const textElement = document.createElement('para');
        textElement.classList.add('card-para');
        textElement.textContent = this.text;
        cardElement.appendChild(textElement);

        return cardElement;
    }
}
// Handles appending an array of card objects to the parent element
const cardAppender = (parent, cards) => {
    cards.forEach((card) => {
        parent.appendChild(card.element);
    });
};

// An array that contains all generated card objects for dispay
const cards = [
    new Card('../public/img/food-icons/lasagna.png', 'Luscious Layers Delight', 'Layers of joy, cheese, and happiness. It\'s like a delicious opera in your mouth – an Italian masterpiece, no strings attached!'),

    new Card('../public/img/food-icons/burger.png', 'Sizzling Beef Bliss', 'Unleash your taste buds with Sizzling Beef Bliss: a burger symphony of juicy perfection and savory satisfaction!'),

    new Card('../public/img/food-icons/fried-fish.png', 'Golden Sea Symphony', 'Meet our Fried Fish: Crispy, golden, and downright delicious. A sea of flavor in every bite!'),

    new Card('../public/img/food-icons/pizza.png', 'Zesty Margherita Marvel', 'Savor the slice: our pizza, a flavor-packed delight that speaks in every bite!'),

    new Card('../public/img/food-icons/ramen.png', 'Zen Zest Ramen', 'Savor the simplicity of perfection in every noodle. Zen Zest Ramen: where flavor meets tranquility.'),

    new Card('../public/img/food-icons/salad.png', 'Lemon Infusion Delight', 'Crunch into freshness with our Garden Greens Salad. A burst of vibrant flavors in every crisp bite!'),

    new Card('../public/img/food-icons/spaguetti.png', 'Savory Serenade Spaghetti', 'Tangle with flavor in every forkful. Savory Serenade Spaghetti: a melody of taste in every twirl.'),

    new Card('../public/img/food-icons/sushi.png', 'Sakura Bliss Sushi', 'Dive into Sakura Bliss Sushi: a symphony of fresh flavors and delicate rolls.'),
];





export default renderMenu;
