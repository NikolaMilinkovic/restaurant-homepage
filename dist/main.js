/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/contact.js":
/*!*******************************!*\
  !*** ./components/contact.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_contact_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/contact.css */ "./components/styles/contact.css");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ "./components/functions.js");




const content = document.getElementById('content');

// Handles rendering of the Contact page content
const renderContact = () => {
    (0,_functions__WEBPACK_IMPORTED_MODULE_2__.removeContent)();


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
    (0,_footer__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

// Creates div inside which Contact page content will be stored
const createContactDiv = () => {
    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('class', 'contact-div');

    return contactDiv;
};
// Created map container
const getContainer = (className) => {
    const Container = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.elementCreator)('div', '');
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContact);


/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/footer.css */ "./components/styles/footer.css");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./components/functions.js");




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
    const el = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.elementCreator)('div', '');
    (0,_functions__WEBPACK_IMPORTED_MODULE_1__.attributeCreator)(el, 'class', 'footer-element');

    for (let i = 0; i < 3; i++) {
        // Text element for footer
        const para = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.elementCreator)('para', text[i]);
        el.appendChild(para);
        if (i === 1) {
            const linkedElement = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.elementWithLink)('Nikola Milinkovic', 'https://github.com/NikolaMilinkovic');
            linkedElement.classList.add('linked-element');
            el.appendChild(linkedElement);
        }
        if (i === 2) {
            const linkedElement = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.elementWithLink)('www.flaticon.com', 'https://www.flaticon.com');
            linkedElement.classList.add('linked-element');
            el.appendChild(linkedElement);
        }
    }
    footer.appendChild(el);
    return footer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderFooter);


/***/ }),

/***/ "./components/functions.js":
/*!*********************************!*\
  !*** ./components/functions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attributeCreator: () => (/* binding */ attributeCreator),
/* harmony export */   elementCreator: () => (/* binding */ elementCreator),
/* harmony export */   elementWithLink: () => (/* binding */ elementWithLink),
/* harmony export */   removeContent: () => (/* binding */ removeContent)
/* harmony export */ });
// Removes the last child of the content element
const removeContent = () => {
    const content = document.getElementById('content');
    if (content.childElementCount > 1) { content.removeChild(content.lastChild); }
};

// Element creator (elementType, text)
const elementCreator = (elementType, text) => {
    const newElement = document.createElement(elementType);
    newElement.innerHTML = text !== null ? text : '';
    return newElement;
};
// Attribute creator (element, type of attribute, name)
const attributeCreator = (element, attribute, attributeName) => element.setAttribute(`${attribute}`, `${attributeName}`);

// Creates an element with a link
// Function to create an element with a link
const elementWithLink = (text, link) => {
    const linkElement = elementCreator('a', text);
    attributeCreator(linkElement, 'href', link);
    attributeCreator(linkElement, 'target', '_blank');
    attributeCreator(linkElement, 'style', 'text-decoration: none; color: inherit;');
    return linkElement;
};




/***/ }),

/***/ "./components/home.js":
/*!****************************!*\
  !*** ./components/home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/home.css */ "./components/styles/home.css");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ "./components/functions.js");




const content = document.getElementById('content');


// Handles rendering of the Home page content
const renderHome = () => {
    (0,_functions__WEBPACK_IMPORTED_MODULE_2__.removeContent)();
    content.appendChild(divAppender());
    appendCards(populateCards(createInfoCards()));
    (0,_footer__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
    const contentDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.elementCreator)('div', '');
    (0,_functions__WEBPACK_IMPORTED_MODULE_2__.attributeCreator)(contentDiv, 'class', 'home-content');

    // Elements to be appended to contentDiv
    const para = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.elementCreator)('para', 'Discover your taste');
    const h1 = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.elementCreator)('h1', 'Healthy, natural and outstanding!');
    const btn = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.elementCreator)('button', 'Reserve now!');

    (0,_functions__WEBPACK_IMPORTED_MODULE_2__.attributeCreator)(para, 'class', 'para');
    (0,_functions__WEBPACK_IMPORTED_MODULE_2__.attributeCreator)(h1, 'class', 'home-h1');
    (0,_functions__WEBPACK_IMPORTED_MODULE_2__.attributeCreator)(btn, 'class', 'home-btn');

    contentDiv.appendChild(para);
    contentDiv.appendChild(h1);
    contentDiv.appendChild(btn);

    return gridDiv_1.appendChild(contentDiv);
};


// Creates information cards
const createInfoCards = () => {
    const cards = [];
    for (let i = 0; i < 4; i++) {
        const card = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.elementCreator)('div', '');
        (0,_functions__WEBPACK_IMPORTED_MODULE_2__.attributeCreator)(card, 'class', 'card');
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
        (0,_functions__WEBPACK_IMPORTED_MODULE_2__.attributeCreator)(imgElement, 'class', 'png-container');
        const h2 = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.elementCreator)('h2', headers[i]);
        (0,_functions__WEBPACK_IMPORTED_MODULE_2__.attributeCreator)(h2, 'class', 'card-header');
        const text = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.elementCreator)('p', texts[i]);
        (0,_functions__WEBPACK_IMPORTED_MODULE_2__.attributeCreator)(text, 'class', 'card-text');


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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);


/***/ }),

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/menu.css */ "./components/styles/menu.css");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ "./components/functions.js");




// Handles rendering of the Menu page content
const renderMenu = () => {
    (0,_functions__WEBPACK_IMPORTED_MODULE_2__.removeContent)();
    const content = document.getElementById('content');

    // Menu page main content div
    const menuContainer = createMenuDiv();

    // Child of menuContainer
    const menuContent = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.elementCreator)('div', '');
    (0,_functions__WEBPACK_IMPORTED_MODULE_2__.attributeCreator)(menuContent, 'class', 'menu-content');

    // Child of menuContent
    // Displays all the cards
    const menuCardsContainer = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.elementCreator)('div', '');
    (0,_functions__WEBPACK_IMPORTED_MODULE_2__.attributeCreator)(menuCardsContainer, 'class', 'menu-cards-container');

    cardAppender(menuCardsContainer, cards);

    // Child appending and displaying elements
    menuContent.appendChild(menuCardsContainer);
    menuContainer.appendChild(menuContent);
    content.appendChild(menuContainer);

    (0,_footer__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
    new Card('dist/public/img/food-icons/lasagna.png', 'Luscious Layers Delight', 'Layers of joy, cheese, and happiness. It\'s like a delicious opera in your mouth – an Italian masterpiece, no strings attached!'),

    new Card('public/img/food-icons/burger.png', 'Sizzling Beef Bliss', 'Unleash your taste buds with Sizzling Beef Bliss: a burger symphony of juicy perfection and savory satisfaction!'),

    new Card('public/img/food-icons/fried-fish.png', 'Golden Sea Symphony', 'Meet our Fried Fish: Crispy, golden, and downright delicious. A sea of flavor in every bite!'),

    new Card('public/img/food-icons/pizza.png', 'Zesty Margherita Marvel', 'Savor the slice: our pizza, a flavor-packed delight that speaks in every bite!'),

    new Card('public/img/food-icons/ramen.png', 'Zen Zest Ramen', 'Savor the simplicity of perfection in every noodle. Zen Zest Ramen: where flavor meets tranquility.'),

    new Card('public/img/food-icons/salad.png', 'Lemon Infusion Delight', 'Crunch into freshness with our Garden Greens Salad. A burst of vibrant flavors in every crisp bite!'),

    new Card('public/img/food-icons/spaguetti.png', 'Savory Serenade Spaghetti', 'Tangle with flavor in every forkful. Savory Serenade Spaghetti: a melody of taste in every twirl.'),

    new Card('public/img/food-icons/sushi.png', 'Sakura Bliss Sushi', 'Dive into Sakura Bliss Sushi: a symphony of fresh flavors and delicate rolls.'),
];





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);


/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_navbar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/navbar.css */ "./components/styles/navbar.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./components/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./components/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./components/contact.js");





const content = document.getElementById('content');

// Main function for rendering the Navbar
const renderNavbar = () => {
    const nav = createNav();
    const navElements = appendNavElements();

    content.appendChild(nav);
    nav.appendChild(createUl(navElements));

    document.getElementById('nav-ul').firstChild.classList.add('active');
    (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
};


// Function for creating the Navbar container
const createNav = () => {
    const navbar = document.createElement('nav');
    navbar.setAttribute('id', 'navbar');
    navbar.setAttribute('class', 'nav');
    return navbar;
};

// Creates UL and takes an array of li elements as input
// Appends each li element
const createUl = (liList) => {
    const ul = document.createElement('ul');
    ul.id = 'nav-ul';
    liList.forEach((li) => {
        ul.appendChild(li);
    });
    return ul;
};

// Function for creating each navbar element and returning it as an array
// Used to display each li element in an ul
const appendNavElements = () => {
    const elNames = ['Home', 'Menu', 'Contact'];
    const elDisplayMethod = [_home__WEBPACK_IMPORTED_MODULE_1__["default"], _menu__WEBPACK_IMPORTED_MODULE_2__["default"], _contact__WEBPACK_IMPORTED_MODULE_3__["default"]];
    const navElements = [];


    for (let i = 0; i < elNames.length; i++) {
        const element = document.createElement('li');
        element.setAttribute('class', 'li');
        element.innerHTML = elNames[i];

        element.addEventListener('click', () => {
            elDisplayMethod[i]();

            removeActiveClass();
            element.classList.add('active');
            elClickAnimation(element);
        });
        navElements.push(element);
    }
    return navElements;
};
// Removes all active class from li elements
const removeActiveClass = () => {
    const liElList = document.querySelectorAll('li');
    liElList.forEach((li) => {
        li.classList.remove('active');
    });
};
// Handles click animation on li element
const elClickAnimation = (element) => {
    element.classList.add('click-animation');
    setTimeout(() => {
        element.classList.remove('click-animation');
    }, 350);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderNavbar);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./components/styles/contact.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./components/styles/contact.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_src_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../../src/index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../public/img/contact-page-background-image.jpg */ "./public/img/contact-page-background-image.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_src_index_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.contact-div{
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: auto;
    overflow: hidden;
    overflow-y: auto;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.content-container{
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    box-sizing: border-box;
    padding: 5vh;
    padding-top: calc(5vh + var(--navbar-height));
}

/* GOOGLE MAP SECTION */
.map-section{
  background-color: rgba(11,11,11,0.5);
  order: 0;
  box-sizing: border-box;
  padding: 5vh;
  border-right: 2px solid #2C2C2C;
}
.iframe-container{
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(11,11,11,0.5);
  border: 2px solid #2C2C2C;
  box-sizing: border-box;
}
/* \\GOOGLE MAP SECTION */


/* FORM */
.info-section{
  background-color: rgba(11,11,11,0.5);
  order: -1;
  box-sizing: border-box;
  padding: 5vh;
}
.input-el-container{
  display: flex;
  flex-direction: column;
  color: #fff;
  font-weight: bold;
  font-size: clamp(18px, 2.5vw, 26px);
  margin: 0 5vh;
  margin-bottom: 1rem;
}
.input-el{
  font-size: 18px;
  background-color: rgba(11,11,11,0.7);
  color: #fff;
  border: 2px solid #2C2C2C;
  padding: 1rem;
}
input::placeholder, textarea::placeholder {
  color: #636262;
}
input, textarea{
  margin-top: 0.5rem;
}
.form-btn-container{
  display: flex;
  align-items: end;
  justify-content: end;
}
/* \\FORM */


/* BUTTON */
.form-btn {
  appearance: none;
  background-color: rgba(11,11,11,0.7);
  border: 2px solid #2C2C2C;
  border-radius: 15px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0 5vh;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 160px;
  will-change: transform;
}

.form-btn:disabled {
  pointer-events: none;
}

.form-btn:hover {
  color: #fff;
  background-color: #1A1A1A;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.form-btn:active {
  box-shadow: none;
  transform: translateY(0);
}
/* \\BUTTON */


@media screen and (max-width: 800px) {
    .content-container{
      grid-template-columns: 1fr;
    }
    .info-container{
        order: -1;
    }
}
  @media screen and (min-width: 800px) {
    .content-container{
      grid-template-columns: 1fr 1fr;
    }
    .info-container{
      order: -1;
  }
}`, "",{"version":3,"sources":["webpack://./components/styles/contact.css"],"names":[],"mappings":"AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,yDAA2E;IAC3E,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;AAChC;AACA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,sBAAsB;IACtB,YAAY;IACZ,6CAA6C;AACjD;;AAEA,uBAAuB;AACvB;EACE,oCAAoC;EACpC,QAAQ;EACR,sBAAsB;EACtB,YAAY;EACZ,+BAA+B;AACjC;AACA;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,yBAAyB;EACzB,sBAAsB;AACxB;AACA,wBAAwB;;;AAGxB,SAAS;AACT;EACE,oCAAoC;EACpC,SAAS;EACT,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,iBAAiB;EACjB,mCAAmC;EACnC,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,oCAAoC;EACpC,WAAW;EACX,yBAAyB;EACzB,aAAa;AACf;AACA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,gBAAgB;EAChB,oBAAoB;AACtB;AACA,UAAU;;;AAGV,WAAW;AACX;EACE,gBAAgB;EAChB,oCAAoC;EACpC,yBAAyB;EACzB,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;EACX,eAAe;EACf,qBAAqB;EACrB,kJAAkJ;EAClJ,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,mDAAmD;EACnD,iBAAiB;EACjB,yBAAyB;EACzB,0BAA0B;EAC1B,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,0CAA0C;EAC1C,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,wBAAwB;AAC1B;AACA,YAAY;;;AAGZ;IACI;MACE,0BAA0B;IAC5B;IACA;QACI,SAAS;IACb;AACJ;EACE;IACE;MACE,8BAA8B;IAChC;IACA;MACE,SAAS;EACb;AACF","sourcesContent":["@import '../../src/index.css';\n\n.contact-div{\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    height: auto;\n    overflow: hidden;\n    overflow-y: auto;\n    background-image: url('../../public/img/contact-page-background-image.jpg');\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n.content-container{\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    box-sizing: border-box;\n    padding: 5vh;\n    padding-top: calc(5vh + var(--navbar-height));\n}\n\n/* GOOGLE MAP SECTION */\n.map-section{\n  background-color: rgba(11,11,11,0.5);\n  order: 0;\n  box-sizing: border-box;\n  padding: 5vh;\n  border-right: 2px solid #2C2C2C;\n}\n.iframe-container{\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(11,11,11,0.5);\n  border: 2px solid #2C2C2C;\n  box-sizing: border-box;\n}\n/* \\GOOGLE MAP SECTION */\n\n\n/* FORM */\n.info-section{\n  background-color: rgba(11,11,11,0.5);\n  order: -1;\n  box-sizing: border-box;\n  padding: 5vh;\n}\n.input-el-container{\n  display: flex;\n  flex-direction: column;\n  color: #fff;\n  font-weight: bold;\n  font-size: clamp(18px, 2.5vw, 26px);\n  margin: 0 5vh;\n  margin-bottom: 1rem;\n}\n.input-el{\n  font-size: 18px;\n  background-color: rgba(11,11,11,0.7);\n  color: #fff;\n  border: 2px solid #2C2C2C;\n  padding: 1rem;\n}\ninput::placeholder, textarea::placeholder {\n  color: #636262;\n}\ninput, textarea{\n  margin-top: 0.5rem;\n}\n.form-btn-container{\n  display: flex;\n  align-items: end;\n  justify-content: end;\n}\n/* \\FORM */\n\n\n/* BUTTON */\n.form-btn {\n  appearance: none;\n  background-color: rgba(11,11,11,0.7);\n  border: 2px solid #2C2C2C;\n  border-radius: 15px;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-family: Roobert,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";\n  font-size: 16px;\n  font-weight: 600;\n  line-height: normal;\n  margin: 0 5vh;\n  min-height: 60px;\n  min-width: 0;\n  outline: none;\n  padding: 16px 24px;\n  text-align: center;\n  text-decoration: none;\n  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  width: 160px;\n  will-change: transform;\n}\n\n.form-btn:disabled {\n  pointer-events: none;\n}\n\n.form-btn:hover {\n  color: #fff;\n  background-color: #1A1A1A;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;\n  transform: translateY(-2px);\n}\n\n.form-btn:active {\n  box-shadow: none;\n  transform: translateY(0);\n}\n/* \\BUTTON */\n\n\n@media screen and (max-width: 800px) {\n    .content-container{\n      grid-template-columns: 1fr;\n    }\n    .info-container{\n        order: -1;\n    }\n}\n  @media screen and (min-width: 800px) {\n    .content-container{\n      grid-template-columns: 1fr 1fr;\n    }\n    .info-container{\n      order: -1;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./components/styles/footer.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./components/styles/footer.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.footer-container{
    display: flex;
    width: 100%;
    height: var(--footer-height);
    grid-column: span 2;
    background-color: rgba(33, 33, 33, 1);
    gap: 5vw;
}
.footer-element{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 20px;
    width: 100%;
    box-sizing: border-box;
    padding: 1.5rem;
    text-align: center;
}
.linked-element{
    font-weight: bold;
    margin-bottom: 0.5rem;
}`, "",{"version":3,"sources":["webpack://./components/styles/footer.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,WAAW;IACX,4BAA4B;IAC5B,mBAAmB;IACnB,qCAAqC;IACrC,QAAQ;AACZ;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,eAAe;IACf,WAAW;IACX,sBAAsB;IACtB,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,iBAAiB;IACjB,qBAAqB;AACzB","sourcesContent":[".footer-container{\n    display: flex;\n    width: 100%;\n    height: var(--footer-height);\n    grid-column: span 2;\n    background-color: rgba(33, 33, 33, 1);\n    gap: 5vw;\n}\n.footer-element{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    font-size: 20px;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 1.5rem;\n    text-align: center;\n}\n.linked-element{\n    font-weight: bold;\n    margin-bottom: 0.5rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./components/styles/home.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./components/styles/home.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_src_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../../src/index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../public/img/landing-page-dish.jpg */ "./public/img/landing-page-dish.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_src_index_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.homeDiv{
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 100vw;
    height: 100vh;
}
.grid-div-1{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(44, 44, 44);
    padding-left: 5vw;
    padding-right: 3rem;
    height: 100vh;
}
.grid-div-2{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
}
.grid-div-3{
  background-color: rgb(11, 11, 11);
  height: calc(100vh - var(--footer-height));
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  box-sizing: border-box;
  gap: 5vh;
  padding: 5vh;
  padding-top: calc(5vh + var(--navbar-height));
  justify-items: center;
  align-items: center;
}
.home-content{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
}
.para{
    font-size: 18px;
    color: white;
}
.home-h1{
    font-size: 46px;
    color: white;
    margin-top: 1.5rem;
    margin-bottom: 3rem;
}

/* BUTTON */
.home-btn {
  appearance: none;
  background-color: transparent;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 160px;
  will-change: transform;
}

.home-btn:disabled {
  pointer-events: none;
}

.home-btn:hover {
  color: #fff;
  background-color: #1A1A1A;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.home-btn:active {
  box-shadow: none;
  transform: translateY(0);
}
/* \\BUTTON */


/* CARD SECTION */
.card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(44, 44, 44);
  box-sizing: border-box;
  padding: 5vh;
  height: 40vh;
}
img{
  z-index: 0;
}
.png-container{
  width: 64px;
  height: 64px;
  margin-bottom: 1.5rem;
  user-select: none;
}
.card-header{
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0.5rem;
  user-select: none;
}
.card-text{
  color: #fff;
  font-size: 18px;
  text-align: center;
  user-select: none;
}
.card {
  appearance: none;
  background-color: transparent;
  border: 2px solid #2C2C2C;
  border-radius: 15px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
  max-width: 20vw;
  min-height: 320px;
}

.card:disabled {
  pointer-events: none;
}

.card:hover {
  color: #fff;
  background-color: #1A1A1A;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.card:active {
  box-shadow: none;
  transform: translateY(0);
}
/* \\CARD SECTION */



@media screen and (max-width: 800px) {
  .grid-div-3{
    grid-template-columns: 1fr;
    height: auto;
  }
  .card{
    max-width: 80vw;
  }
}
@media screen and (min-width: 800px) {
  .grid-div-3{
    grid-template-columns: 1fr 1fr;
    height: auto;
  }
  .card{
    max-width: 40vw;
  }
}
@media screen and (min-width: 1500px) {
  .grid-div-3{
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: calc(100vh - var(--footer-height));
  }
}`, "",{"version":3,"sources":["webpack://./components/styles/home.css"],"names":[],"mappings":"AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,aAAa;AACjB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iCAAiC;IACjC,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,yDAA+D;IAC/D,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;IAC5B,aAAa;AACjB;AACA;EACE,iCAAiC;EACjC,0CAA0C;EAC1C,mBAAmB;EACnB,aAAa;EACb,sCAAsC;EACtC,sBAAsB;EACtB,QAAQ;EACR,YAAY;EACZ,6CAA6C;EAC7C,qBAAqB;EACrB,mBAAmB;AACrB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,uBAAuB;AAC3B;AACA;IACI,eAAe;IACf,YAAY;AAChB;AACA;IACI,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA,WAAW;AACX;EACE,gBAAgB;EAChB,6BAA6B;EAC7B,yBAAyB;EACzB,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;EACX,eAAe;EACf,qBAAqB;EACrB,kJAAkJ;EAClJ,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,SAAS;EACT,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,mDAAmD;EACnD,iBAAiB;EACjB,yBAAyB;EACzB,0BAA0B;EAC1B,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,0CAA0C;EAC1C,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,wBAAwB;AAC1B;AACA,YAAY;;;AAGZ,iBAAiB;AACjB;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,iCAAiC;EACjC,sBAAsB;EACtB,YAAY;EACZ,YAAY;AACd;AACA;EACE,UAAU;AACZ;AACA;EACE,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,6BAA6B;EAC7B,yBAAyB;EACzB,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;EACX,eAAe;EACf,qBAAqB;EACrB,kJAAkJ;EAClJ,gBAAgB;EAChB,mBAAmB;EACnB,SAAS;EACT,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,qBAAqB;EACrB,mDAAmD;EACnD,iBAAiB;EACjB,yBAAyB;EACzB,0BAA0B;EAC1B,sBAAsB;EACtB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,0CAA0C;EAC1C,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,wBAAwB;AAC1B;AACA,kBAAkB;;;;AAIlB;EACE;IACE,0BAA0B;IAC1B,YAAY;EACd;EACA;IACE,eAAe;EACjB;AACF;AACA;EACE;IACE,8BAA8B;IAC9B,YAAY;EACd;EACA;IACE,eAAe;EACjB;AACF;AACA;EACE;IACE,sCAAsC;IACtC,0CAA0C;EAC5C;AACF","sourcesContent":["@import '../../src/index.css';\n\n.homeDiv{\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    width: 100vw;\n    height: 100vh;\n}\n.grid-div-1{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(44, 44, 44);\n    padding-left: 5vw;\n    padding-right: 3rem;\n    height: 100vh;\n}\n.grid-div-2{\n    background-image: url('../../public/img/landing-page-dish.jpg');\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    height: 100vh;\n}\n.grid-div-3{\n  background-color: rgb(11, 11, 11);\n  height: calc(100vh - var(--footer-height));\n  grid-column: span 2;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  box-sizing: border-box;\n  gap: 5vh;\n  padding: 5vh;\n  padding-top: calc(5vh + var(--navbar-height));\n  justify-items: center;\n  align-items: center;\n}\n.home-content{\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: center;\n}\n.para{\n    font-size: 18px;\n    color: white;\n}\n.home-h1{\n    font-size: 46px;\n    color: white;\n    margin-top: 1.5rem;\n    margin-bottom: 3rem;\n}\n\n/* BUTTON */\n.home-btn {\n  appearance: none;\n  background-color: transparent;\n  border: 2px solid #1A1A1A;\n  border-radius: 15px;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-family: Roobert,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";\n  font-size: 16px;\n  font-weight: 600;\n  line-height: normal;\n  margin: 0;\n  min-height: 60px;\n  min-width: 0;\n  outline: none;\n  padding: 16px 24px;\n  text-align: center;\n  text-decoration: none;\n  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  width: 160px;\n  will-change: transform;\n}\n\n.home-btn:disabled {\n  pointer-events: none;\n}\n\n.home-btn:hover {\n  color: #fff;\n  background-color: #1A1A1A;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;\n  transform: translateY(-2px);\n}\n\n.home-btn:active {\n  box-shadow: none;\n  transform: translateY(0);\n}\n/* \\BUTTON */\n\n\n/* CARD SECTION */\n.card{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(44, 44, 44);\n  box-sizing: border-box;\n  padding: 5vh;\n  height: 40vh;\n}\nimg{\n  z-index: 0;\n}\n.png-container{\n  width: 64px;\n  height: 64px;\n  margin-bottom: 1.5rem;\n  user-select: none;\n}\n.card-header{\n  color: #fff;\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n  user-select: none;\n}\n.card-text{\n  color: #fff;\n  font-size: 18px;\n  text-align: center;\n  user-select: none;\n}\n.card {\n  appearance: none;\n  background-color: transparent;\n  border: 2px solid #2C2C2C;\n  border-radius: 15px;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-family: Roobert,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";\n  font-weight: 600;\n  line-height: normal;\n  margin: 0;\n  min-height: 60px;\n  min-width: 0;\n  outline: none;\n  text-align: center;\n  text-decoration: none;\n  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  will-change: transform;\n  max-width: 20vw;\n  min-height: 320px;\n}\n\n.card:disabled {\n  pointer-events: none;\n}\n\n.card:hover {\n  color: #fff;\n  background-color: #1A1A1A;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;\n  transform: translateY(-2px);\n}\n\n.card:active {\n  box-shadow: none;\n  transform: translateY(0);\n}\n/* \\CARD SECTION */\n\n\n\n@media screen and (max-width: 800px) {\n  .grid-div-3{\n    grid-template-columns: 1fr;\n    height: auto;\n  }\n  .card{\n    max-width: 80vw;\n  }\n}\n@media screen and (min-width: 800px) {\n  .grid-div-3{\n    grid-template-columns: 1fr 1fr;\n    height: auto;\n  }\n  .card{\n    max-width: 40vw;\n  }\n}\n@media screen and (min-width: 1500px) {\n  .grid-div-3{\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    height: calc(100vh - var(--footer-height));\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./components/styles/menu.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./components/styles/menu.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_src_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../../src/index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../public/img/pizza-background-resized.jpg */ "./public/img/pizza-background-resized.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_src_index_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.menu-container{
    width: 100vw;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-sizing: border-box;
    background-attachment: fixed;
}
.menu-content{
    padding: 10vw;
    padding-top: calc(5% + var(--navbar-height));
    box-sizing: border-box;
}
.menu-cards-container{
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background-color: rgba(11,11,11,0.5);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3vw;
    padding: 3vw;
}
.card{
    background-color: rgba(11,11,11,0.5);
    z-index: 0;
}
.card-header{
    font-size: 18px;
    margin-top: 1.5rem;
    margin-bottom: 0.7rem;
}
.card-para{
    font-size: 14px;
}



@media screen and (max-width: 800px) {
    .menu-cards-container{
      grid-template-columns: 1fr;
      height: auto;
    }
    .card{
      max-width: 80vw;
    }
  }
  @media screen and (min-width: 800px) {
    .menu-cards-container{
      grid-template-columns: 1fr 1fr;
      height: auto;
    }
    .card{
      max-width: 40vw;
    }
  }
  @media screen and (min-width: 1500px) {
    .menu-cards-container{
      grid-template-columns: 1fr 1fr 1fr 1fr;
      height: auto;
    }
    .card{
        background-color: rgba(11,11,11,0.5);
        z-index: 0;
        min-height: 320px;
    }
  }`, "",{"version":3,"sources":["webpack://./components/styles/menu.css"],"names":[],"mappings":"AAEA;IACI,YAAY;IACZ,yDAAsE;IACtE,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;IAC5B,sBAAsB;IACtB,4BAA4B;AAChC;AACA;IACI,aAAa;IACb,4CAA4C;IAC5C,sBAAsB;AAC1B;AACA;IACI,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,oCAAoC;IACpC,aAAa;IACb,8BAA8B;IAC9B,QAAQ;IACR,YAAY;AAChB;AACA;IACI,oCAAoC;IACpC,UAAU;AACd;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,qBAAqB;AACzB;AACA;IACI,eAAe;AACnB;;;;AAIA;IACI;MACE,0BAA0B;MAC1B,YAAY;IACd;IACA;MACE,eAAe;IACjB;EACF;EACA;IACE;MACE,8BAA8B;MAC9B,YAAY;IACd;IACA;MACE,eAAe;IACjB;EACF;EACA;IACE;MACE,sCAAsC;MACtC,YAAY;IACd;IACA;QACI,oCAAoC;QACpC,UAAU;QACV,iBAAiB;IACrB;EACF","sourcesContent":["@import '../../src/index.css';\n\n.menu-container{\n    width: 100vw;\n    background-image: url('../../public/img/pizza-background-resized.jpg');\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    box-sizing: border-box;\n    background-attachment: fixed;\n}\n.menu-content{\n    padding: 10vw;\n    padding-top: calc(5% + var(--navbar-height));\n    box-sizing: border-box;\n}\n.menu-cards-container{\n    box-sizing: border-box;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(11,11,11,0.5);\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 3vw;\n    padding: 3vw;\n}\n.card{\n    background-color: rgba(11,11,11,0.5);\n    z-index: 0;\n}\n.card-header{\n    font-size: 18px;\n    margin-top: 1.5rem;\n    margin-bottom: 0.7rem;\n}\n.card-para{\n    font-size: 14px;\n}\n\n\n\n@media screen and (max-width: 800px) {\n    .menu-cards-container{\n      grid-template-columns: 1fr;\n      height: auto;\n    }\n    .card{\n      max-width: 80vw;\n    }\n  }\n  @media screen and (min-width: 800px) {\n    .menu-cards-container{\n      grid-template-columns: 1fr 1fr;\n      height: auto;\n    }\n    .card{\n      max-width: 40vw;\n    }\n  }\n  @media screen and (min-width: 1500px) {\n    .menu-cards-container{\n      grid-template-columns: 1fr 1fr 1fr 1fr;\n      height: auto;\n    }\n    .card{\n        background-color: rgba(11,11,11,0.5);\n        z-index: 0;\n        min-height: 320px;\n    }\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./components/styles/navbar.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./components/styles/navbar.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_src_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../../src/index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_src_index_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `nav{
    position: absolute;
    box-sizing: border-box;
    z-index: 2;
}
ul{
    display: flex;
    align-items: center;
    gap: 2rem;
}
.nav{
    align-items: center;
    justify-content: center;
    display: flex;
    height: var(--navbar-height);
    width: 100vw;
    background-color: rgba(33, 33, 33, 0.7);
}
.li{
    color: white;
    padding: 1rem;
    cursor: pointer;
    transition: transform 0.15s ease;
    user-select: none;
    font-size: var(--navbar-font-size);
}
.li:hover{
    text-decoration: underline;
    text-underline-offset: 0.3rem;
    text-decoration-thickness: 0.1rem;
    text-decoration-color: lightgray;
}
.li.click-animation{
    transform: scale(0.95);
}
.active{
    text-decoration: underline;
    text-underline-offset: 0.3rem;
    text-decoration-thickness: 0.1rem;
    text-decoration-color: lightgray;
}`, "",{"version":3,"sources":["webpack://./components/styles/navbar.css"],"names":[],"mappings":"AAGA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,UAAU;AACd;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,4BAA4B;IAC5B,YAAY;IACZ,uCAAuC;AAC3C;AACA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;IACf,gCAAgC;IAChC,iBAAiB;IACjB,kCAAkC;AACtC;AACA;IACI,0BAA0B;IAC1B,6BAA6B;IAC7B,iCAAiC;IACjC,gCAAgC;AACpC;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,0BAA0B;IAC1B,6BAA6B;IAC7B,iCAAiC;IACjC,gCAAgC;AACpC","sourcesContent":["@import '../../src/index.css';\n\n\nnav{\n    position: absolute;\n    box-sizing: border-box;\n    z-index: 2;\n}\nul{\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n}\n.nav{\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    height: var(--navbar-height);\n    width: 100vw;\n    background-color: rgba(33, 33, 33, 0.7);\n}\n.li{\n    color: white;\n    padding: 1rem;\n    cursor: pointer;\n    transition: transform 0.15s ease;\n    user-select: none;\n    font-size: var(--navbar-font-size);\n}\n.li:hover{\n    text-decoration: underline;\n    text-underline-offset: 0.3rem;\n    text-decoration-thickness: 0.1rem;\n    text-decoration-color: lightgray;\n}\n.li.click-animation{\n    transform: scale(0.95);\n}\n.active{\n    text-decoration: underline;\n    text-underline-offset: 0.3rem;\n    text-decoration-thickness: 0.1rem;\n    text-decoration-color: lightgray;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*  <<< CSS RESET FILE >>>  */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
 margin: 0;
 padding: 0;
 border: 0;
 font-size: 100%;
 font: inherit;
 vertical-align: baseline;
}
HTML5 display-role reset for older browsers 
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
 display: block;
}
body {
 line-height: 1;
}
ol, ul {
 list-style: none;
}
blockquote, q {
 quotes: none;
}
blockquotebefore, blockquoteafter,
qbefore, qafter {
 content: '';
 content: none;
}
table {
 border-collapse: collapse;
 border-spacing: 0;
}

/*  <<< \\CSS RESET FILE >>>  */

:root{
    --navbar-height: 10vh;
    --navbar-font-size: clamp(18px, 2.5vw, 28px);
    --footer-height: 18vh;
    font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    overflow: hidden;
    overflow-y: auto;
    background-color: rgb(11,11,11);
}
#content{
    box-sizing: border-box;
}`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA,6BAA6B;AAC7B;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA;;;CAGC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA,8BAA8B;;AAE9B;IACI,qBAAqB;IACrB,4CAA4C;IAC5C,qBAAqB;IACrB,kJAAkJ;IAClJ,gBAAgB;IAChB,gBAAgB;IAChB,+BAA+B;AACnC;AACA;IACI,sBAAsB;AAC1B","sourcesContent":["/*  <<< CSS RESET FILE >>>  */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n margin: 0;\n padding: 0;\n border: 0;\n font-size: 100%;\n font: inherit;\n vertical-align: baseline;\n}\nHTML5 display-role reset for older browsers \narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n display: block;\n}\nbody {\n line-height: 1;\n}\nol, ul {\n list-style: none;\n}\nblockquote, q {\n quotes: none;\n}\nblockquotebefore, blockquoteafter,\nqbefore, qafter {\n content: '';\n content: none;\n}\ntable {\n border-collapse: collapse;\n border-spacing: 0;\n}\n\n/*  <<< \\CSS RESET FILE >>>  */\n\n:root{\n    --navbar-height: 10vh;\n    --navbar-font-size: clamp(18px, 2.5vw, 28px);\n    --footer-height: 18vh;\n    font-family: Roobert,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";\n    overflow: hidden;\n    overflow-y: auto;\n    background-color: rgb(11,11,11);\n}\n#content{\n    box-sizing: border-box;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./components/styles/contact.css":
/*!***************************************!*\
  !*** ./components/styles/contact.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./contact.css */ "./node_modules/css-loader/dist/cjs.js!./components/styles/contact.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./components/styles/footer.css":
/*!**************************************!*\
  !*** ./components/styles/footer.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./components/styles/footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./components/styles/home.css":
/*!************************************!*\
  !*** ./components/styles/home.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./components/styles/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./components/styles/menu.css":
/*!************************************!*\
  !*** ./components/styles/menu.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./components/styles/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./components/styles/navbar.css":
/*!**************************************!*\
  !*** ./components/styles/navbar.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./navbar.css */ "./node_modules/css-loader/dist/cjs.js!./components/styles/navbar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./public/img/contact-page-background-image.jpg":
/*!******************************************************!*\
  !*** ./public/img/contact-page-background-image.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "410864b99244c328510b.jpg";

/***/ }),

/***/ "./public/img/landing-page-dish.jpg":
/*!******************************************!*\
  !*** ./public/img/landing-page-dish.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c3ecc9e770d48dc8c9b.jpg";

/***/ }),

/***/ "./public/img/pizza-background-resized.jpg":
/*!*************************************************!*\
  !*** ./public/img/pizza-background-resized.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "15c6e966df6a5118ccc7.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");



(0,_components_navbar__WEBPACK_IMPORTED_MODULE_0__["default"])();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnR0FBZ0csVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLGNBQWMsV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxZQUFZLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw2RkFBNkYsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxZQUFZLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLGVBQWUsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUss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bnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9jb21wb25lbnRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vY29tcG9uZW50cy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9jb21wb25lbnRzL3N0eWxlcy9jb250YWN0LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vY29tcG9uZW50cy9zdHlsZXMvZm9vdGVyLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vY29tcG9uZW50cy9zdHlsZXMvaG9tZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL2NvbXBvbmVudHMvc3R5bGVzL21lbnUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9jb21wb25lbnRzL3N0eWxlcy9uYXZiYXIuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vY29tcG9uZW50cy9zdHlsZXMvY29udGFjdC5jc3M/ZjYzOCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vY29tcG9uZW50cy9zdHlsZXMvZm9vdGVyLmNzcz84MTgyIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9jb21wb25lbnRzL3N0eWxlcy9ob21lLmNzcz83NzBlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9jb21wb25lbnRzL3N0eWxlcy9tZW51LmNzcz84ZjczIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9jb21wb25lbnRzL3N0eWxlcy9uYXZiYXIuY3NzP2IzMmIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL2NvbnRhY3QuY3NzJztcbmltcG9ydCByZW5kZXJGb290ZXIgZnJvbSAnLi9mb290ZXInO1xuaW1wb3J0IHsgcmVtb3ZlQ29udGVudCwgZWxlbWVudENyZWF0b3IgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4vLyBIYW5kbGVzIHJlbmRlcmluZyBvZiB0aGUgQ29udGFjdCBwYWdlIGNvbnRlbnRcbmNvbnN0IHJlbmRlckNvbnRhY3QgPSAoKSA9PiB7XG4gICAgcmVtb3ZlQ29udGVudCgpO1xuXG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gY3JlYXRlQ29udGFjdERpdigpO1xuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBnZXRDb250YWluZXIoJ2NvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgY29uc3QgbWFwU2VjdGlvbiA9IGdldENvbnRhaW5lcignbWFwLXNlY3Rpb24nKTtcbiAgICBjb25zdCBpbmZvU2VjdGlvbiA9IGdldENvbnRhaW5lcignaW5mby1zZWN0aW9uJyk7XG5cbiAgICAvLyBDcmVhdGVzIGFuZCBhcHBlbmRzIGdvb2dsZSBtYXBcbiAgICBhcHBlbmRHb29nbGVNYXAobWFwU2VjdGlvbik7XG4gICAgLy8gQ3JlYXRlcyBhbmQgYXBwZW5kcyBmb3JtXG4gICAgZm9ybUNyZWF0b3IoaW5mb1NlY3Rpb24pO1xuXG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1hcFNlY3Rpb24pO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb1NlY3Rpb24pO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuICAgIHJlbmRlckZvb3RlcigpO1xufTtcblxuLy8gQ3JlYXRlcyBkaXYgaW5zaWRlIHdoaWNoIENvbnRhY3QgcGFnZSBjb250ZW50IHdpbGwgYmUgc3RvcmVkXG5jb25zdCBjcmVhdGVDb250YWN0RGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGFjdC1kaXYnKTtcblxuICAgIHJldHVybiBjb250YWN0RGl2O1xufTtcbi8vIENyZWF0ZWQgbWFwIGNvbnRhaW5lclxuY29uc3QgZ2V0Q29udGFpbmVyID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IENvbnRhaW5lciA9IGVsZW1lbnRDcmVhdG9yKCdkaXYnLCAnJyk7XG4gICAgQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfWApO1xuICAgIHJldHVybiBDb250YWluZXI7XG59O1xuLy8gQXBwZW5kcyBnb29nbGUgbWFwIGxpbmtcbmNvbnN0IGFwcGVuZEdvb2dsZU1hcCA9IChwYXJlbnQpID0+IHtcbiAgICBjb25zdCBpZnJhbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZnJhbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaWZyYW1lLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuXG4gICAgaWZyYW1lLnNyYyA9ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxNDE0LjQ4MTczMjg1MzYzMjYhMmQyMC4zODA5Njk3OTUzMzAzNSEzZDQ0Ljg0MjY3NzM3MjY4NDk3ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg0NzVhNjU4YzgyMTRmZTlmJTNBMHg0NWI3NjBjMmNiMTI3ZGVmITJzWmFnYSE1ZTAhM20yITFzZW4hMnNycyE0djE3MDU1MzUwOTg2OTUhNW0yITFzZW4hMnNycyc7XG4gICAgaWZyYW1lLndpZHRoID0gJzEwMCUnO1xuICAgIGlmcmFtZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgaWZyYW1lLnN0eWxlLmJvcmRlciA9ICcwJztcbiAgICBpZnJhbWUuYWxsb3dmdWxsc2NyZWVuID0gdHJ1ZTtcbiAgICBpZnJhbWUubG9hZGluZyA9ICdsYXp5JztcbiAgICBpZnJhbWUucmVmZXJyZXJwb2xpY3kgPSAnbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUnO1xuXG4gICAgaWZyYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGlmcmFtZUNvbnRhaW5lcik7XG59O1xuLy8gQ3JhdGVzIGEgZm9ybSBlbGVtZW50IGFuZCBhcHBlbmRzIGl0IHRvIHBhcmVudCBlbGVtZW50XG5jb25zdCBmb3JtQ3JlYXRvciA9IChwYXJlbnQpID0+IHtcbiAgICAvLyBIYW5kbGVzIGZvcm1cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uaWQgPSAnZm9ybSc7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtJyk7XG5cbiAgICAvLyBDcmVhdGVzIGZvcm0gZWxlbWVudHNcbiAgICBjb25zdCBuYW1lID0gZm9ybUVsQ3JlYXRvcignaW5wdXQnLCAndGV4dCcsICdpbnB1dC1uYW1lJywgJ2lucHV0LWVsJywgJ05hbWUgKicsICdOYW1lJywgJ2lucHV0LWVsLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgZW1haWwgPSBmb3JtRWxDcmVhdG9yKCdpbnB1dCcsICdlbWFpbCcsICdpbnB1dC1lbWFpbCcsICdpbnB1dC1lbCcsICdFbWFpbCBBZHJlc3MgKicsICdFbWFpbCBBZHJlc3MnLCAnaW5wdXQtZWwtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBwaG9uZSA9IGZvcm1FbENyZWF0b3IoJ2lucHV0JywgJ3RleHQnLCAnaW5wdXQtcGhvbmUnLCAnaW5wdXQtZWwnLCAnUGhvbmUgKicsICdQaG9uZScsICdpbnB1dC1lbC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IG1lc3NhZ2UgPSBmb3JtRWxDcmVhdG9yKCd0ZXh0YXJlYScsICd0ZXh0JywgJ2lucHV0LW1lc3NhZ2UnLCAnaW5wdXQtZWwnLCAnTWVzc2FnZSAqJywgJ01lc3NhZ2UnLCAnaW5wdXQtZWwtY29udGFpbmVyJyk7XG5cbiAgICAvLyBDcmVhdGVzIGZvcm0gYnV0dG9uIGNvbnRhaW5lclxuICAgIGNvbnN0IGZvcm1CdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnRuLWNvbnRhaW5lcicpO1xuXG4gICAgLy8gQ3JlYXRlcyBmb3JtIGJ1dHRvblxuICAgIGNvbnN0IGZvcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAvLyBDaGFuZ2UgdGhpcyB0byBtYWtlIHRoZSBidXR0b24gaW50byBzdWJtaXQgYnV0dG9uXG4gICAgZm9ybUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgZm9ybUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcbiAgICBmb3JtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnRuJyk7XG4gICAgZm9ybUJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQnV0dG9uKTtcbiAgICBmb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbGVhcklucHV0KCk7XG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGVzIGFwcGVuZGluZyBlbGVtZW50cyB0byB0aGUgZm9ybVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChlbWFpbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwaG9uZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1CdXR0b25Db250YWluZXIpO1xuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvcm0pO1xufTtcbi8vIENyZWF0ZXMgYSBmb3JtIGVsZW1lbnQgYW5kIHJldHVybnMgaXRzZWxmXG5jb25zdCBmb3JtRWxDcmVhdG9yID0gKGVsZW1lbnQsIHR5cGUsIGlkLCBjbGFzc05hbWUsIHBsYWNlaG9sZGVyLCBsYWJlbFR4dCwgY29udGFpbmVyQ2xhc3NOYW1lKSA9PiB7XG4gICAgLy8gQ29udGFpbmVyXG4gICAgY29uc3QgZWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChgJHtjb250YWluZXJDbGFzc05hbWV9YCk7XG5cbiAgICAvLyBMYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlkKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGAke2xhYmVsVHh0fWA7XG5cbiAgICAvLyBFbGVtZW50XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke2VsZW1lbnR9YCk7XG4gICAgZWwuaWQgPSBgJHtpZH1gO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfWApO1xuICAgIGVsLnBsYWNlaG9sZGVyID0gYCR7cGxhY2Vob2xkZXJ9YDtcbiAgICBpZiAoZWxlbWVudC50b0xvd2VyQ2FzZSgpID09PSAndGV4dGFyZWEnKSB7XG4gICAgICAgIGVsLnJvd3MgPSA0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnR5cGUgPSBgJHt0eXBlfWA7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlcyBhcHBlbmluZyBlbGVtZW50c1xuICAgIGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWwpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRDb250YWluZXI7XG59O1xuLy8gQ2xlYXJzIGFsbCBpbnB1dCBmaWVsZHNcbmNvbnN0IGNsZWFySW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICBjb25zdCB0eHRJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpO1xuXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgfSk7XG5cbiAgICB0eHRJbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNvbnRhY3Q7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2Zvb3Rlci5jc3MnO1xuaW1wb3J0IHsgZWxlbWVudFdpdGhMaW5rLCBlbGVtZW50Q3JlYXRvciwgYXR0cmlidXRlQ3JlYXRvciB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxuXG4vLyBIYW5kbGVzIHJlbmRlcmluZyBvZiB0aGUgRm9vdGVyIGNvbXBvbmVudFxuY29uc3QgcmVuZGVyRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGxhc3RFbGVtZW50ID0gY29udGVudC5sYXN0RWxlbWVudENoaWxkO1xuXG4gICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyRWxlbWVudHMoY3JlYXRlRm9vdGVyKCkpO1xuICAgIGxhc3RFbGVtZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59O1xuLy8gQ3JlYXRlcyBkaXYgaW5zaWRlIHdoaWNoIEZvb3RlciBwYWdlIGNvbnRlbnQgd2lsbCBiZSBzdG9yZWRcbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb290ZXItY29udGFpbmVyJyk7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xufTtcbi8vIENyZWF0ZXMgZm9vdGVyIGVsZW1lbnRzXG5jb25zdCBjcmVhdGVGb290ZXJFbGVtZW50cyA9IChmb290ZXIpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gW1xuICAgICAgICAnQ3JlYXRlZCBieScsXG4gICAgICAgICcnLFxuICAgICAgICAnSWNvbnMgdGFrZW4gZnJvbTxicj4nLFxuICAgIF07XG5cbiAgICAvLyBEaXYgY29udGFpbmVyIGZvciBlbGVtZW50c1xuICAgIGNvbnN0IGVsID0gZWxlbWVudENyZWF0b3IoJ2RpdicsICcnKTtcbiAgICBhdHRyaWJ1dGVDcmVhdG9yKGVsLCAnY2xhc3MnLCAnZm9vdGVyLWVsZW1lbnQnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIC8vIFRleHQgZWxlbWVudCBmb3IgZm9vdGVyXG4gICAgICAgIGNvbnN0IHBhcmEgPSBlbGVtZW50Q3JlYXRvcigncGFyYScsIHRleHRbaV0pO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChwYXJhKTtcbiAgICAgICAgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmtlZEVsZW1lbnQgPSBlbGVtZW50V2l0aExpbmsoJ05pa29sYSBNaWxpbmtvdmljJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9OaWtvbGFNaWxpbmtvdmljJyk7XG4gICAgICAgICAgICBsaW5rZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xpbmtlZC1lbGVtZW50Jyk7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChsaW5rZWRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PT0gMikge1xuICAgICAgICAgICAgY29uc3QgbGlua2VkRWxlbWVudCA9IGVsZW1lbnRXaXRoTGluaygnd3d3LmZsYXRpY29uLmNvbScsICdodHRwczovL3d3dy5mbGF0aWNvbi5jb20nKTtcbiAgICAgICAgICAgIGxpbmtlZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGlua2VkLWVsZW1lbnQnKTtcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGxpbmtlZEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChlbCk7XG4gICAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckZvb3RlcjtcbiIsIi8vIFJlbW92ZXMgdGhlIGxhc3QgY2hpbGQgb2YgdGhlIGNvbnRlbnQgZWxlbWVudFxuY29uc3QgcmVtb3ZlQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBpZiAoY29udGVudC5jaGlsZEVsZW1lbnRDb3VudCA+IDEpIHsgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7IH1cbn07XG5cbi8vIEVsZW1lbnQgY3JlYXRvciAoZWxlbWVudFR5cGUsIHRleHQpXG5jb25zdCBlbGVtZW50Q3JlYXRvciA9IChlbGVtZW50VHlwZSwgdGV4dCkgPT4ge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcbiAgICBuZXdFbGVtZW50LmlubmVySFRNTCA9IHRleHQgIT09IG51bGwgPyB0ZXh0IDogJyc7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59O1xuLy8gQXR0cmlidXRlIGNyZWF0b3IgKGVsZW1lbnQsIHR5cGUgb2YgYXR0cmlidXRlLCBuYW1lKVxuY29uc3QgYXR0cmlidXRlQ3JlYXRvciA9IChlbGVtZW50LCBhdHRyaWJ1dGUsIGF0dHJpYnV0ZU5hbWUpID0+IGVsZW1lbnQuc2V0QXR0cmlidXRlKGAke2F0dHJpYnV0ZX1gLCBgJHthdHRyaWJ1dGVOYW1lfWApO1xuXG4vLyBDcmVhdGVzIGFuIGVsZW1lbnQgd2l0aCBhIGxpbmtcbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhbiBlbGVtZW50IHdpdGggYSBsaW5rXG5jb25zdCBlbGVtZW50V2l0aExpbmsgPSAodGV4dCwgbGluaykgPT4ge1xuICAgIGNvbnN0IGxpbmtFbGVtZW50ID0gZWxlbWVudENyZWF0b3IoJ2EnLCB0ZXh0KTtcbiAgICBhdHRyaWJ1dGVDcmVhdG9yKGxpbmtFbGVtZW50LCAnaHJlZicsIGxpbmspO1xuICAgIGF0dHJpYnV0ZUNyZWF0b3IobGlua0VsZW1lbnQsICd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgYXR0cmlidXRlQ3JlYXRvcihsaW5rRWxlbWVudCwgJ3N0eWxlJywgJ3RleHQtZGVjb3JhdGlvbjogbm9uZTsgY29sb3I6IGluaGVyaXQ7Jyk7XG4gICAgcmV0dXJuIGxpbmtFbGVtZW50O1xufTtcblxuZXhwb3J0IHtcbiAgICByZW1vdmVDb250ZW50LCBlbGVtZW50Q3JlYXRvciwgYXR0cmlidXRlQ3JlYXRvciwgZWxlbWVudFdpdGhMaW5rLFxufTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaG9tZS5jc3MnO1xuaW1wb3J0IHJlbmRlckZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XG5pbXBvcnQgeyByZW1vdmVDb250ZW50LCBlbGVtZW50Q3JlYXRvciwgYXR0cmlidXRlQ3JlYXRvciB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cblxuLy8gSGFuZGxlcyByZW5kZXJpbmcgb2YgdGhlIEhvbWUgcGFnZSBjb250ZW50XG5jb25zdCByZW5kZXJIb21lID0gKCkgPT4ge1xuICAgIHJlbW92ZUNvbnRlbnQoKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdkFwcGVuZGVyKCkpO1xuICAgIGFwcGVuZENhcmRzKHBvcHVsYXRlQ2FyZHMoY3JlYXRlSW5mb0NhcmRzKCkpKTtcbiAgICByZW5kZXJGb290ZXIoKTtcbn07XG4vLyBIYW5kbGVzIGFwcGVuZGluZyBkaXZzXG5jb25zdCBkaXZBcHBlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBob21lRGl2ID0gY3JlYXRlSG9tZURpdigpO1xuICAgIGNvbnN0IGdyaWREaXZBcnJheSA9IGdyaWREaXZzKCk7XG4gICAgZ3JpZERpdkFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgaG9tZURpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBob21lRGl2O1xufTtcbi8vIENyZWF0ZXMgZGl2IGluc2lkZSB3aGljaCBIb21lIHBhZ2UgY29udGVudCB3aWxsIGJlIHN0b3JlZFxuY29uc3QgY3JlYXRlSG9tZURpdiA9ICgpID0+IHtcbiAgICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hvbWVEaXYnKTtcblxuICAgIHJldHVybiBob21lRGl2O1xufTtcbi8vIENyZWF0ZXMgYW5kIGFwcGVuZHMgdHdvIGNoaWxkcmVuIGRpdnMgdG8gY3JlYXRlSG9tZURpdlxuLy8gVGhleSBhcmUgdXNlZCB0byBjcmVhdGUgZGVmYXVsdCBncmlkIGxheW91dCBvZiB0aGUgaG9tZSBwYWdlXG5jb25zdCBncmlkRGl2cyA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkRGl2XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBncmlkRGl2XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBncmlkRGl2XzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGdyaWREaXZfMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dyaWQtZGl2LTEnKTtcbiAgICBncmlkRGl2XzIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdncmlkLWRpdi0yJyk7XG4gICAgZ3JpZERpdl8zLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ3JpZC1kaXYtMycpO1xuICAgIGdyaWREaXZfMy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmQtY29udGFpbmVyJyk7XG5cblxuICAgIGFwcGVuZENvbnRlbnRUb0Rpdl8xKGdyaWREaXZfMSk7XG5cbiAgICByZXR1cm4gW2dyaWREaXZfMSwgZ3JpZERpdl8yLCBncmlkRGl2XzNdO1xufTtcbi8vIEFwcGVuZHMgYWxsIHRoZSByZXF1aXJlZCBjb250ZW50IHRvIHRoZSBob21lIGRyaWcgZGl2IDFcbmNvbnN0IGFwcGVuZENvbnRlbnRUb0Rpdl8xID0gKGdyaWREaXZfMSkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBlbGVtZW50Q3JlYXRvcignZGl2JywgJycpO1xuICAgIGF0dHJpYnV0ZUNyZWF0b3IoY29udGVudERpdiwgJ2NsYXNzJywgJ2hvbWUtY29udGVudCcpO1xuXG4gICAgLy8gRWxlbWVudHMgdG8gYmUgYXBwZW5kZWQgdG8gY29udGVudERpdlxuICAgIGNvbnN0IHBhcmEgPSBlbGVtZW50Q3JlYXRvcigncGFyYScsICdEaXNjb3ZlciB5b3VyIHRhc3RlJyk7XG4gICAgY29uc3QgaDEgPSBlbGVtZW50Q3JlYXRvcignaDEnLCAnSGVhbHRoeSwgbmF0dXJhbCBhbmQgb3V0c3RhbmRpbmchJyk7XG4gICAgY29uc3QgYnRuID0gZWxlbWVudENyZWF0b3IoJ2J1dHRvbicsICdSZXNlcnZlIG5vdyEnKTtcblxuICAgIGF0dHJpYnV0ZUNyZWF0b3IocGFyYSwgJ2NsYXNzJywgJ3BhcmEnKTtcbiAgICBhdHRyaWJ1dGVDcmVhdG9yKGgxLCAnY2xhc3MnLCAnaG9tZS1oMScpO1xuICAgIGF0dHJpYnV0ZUNyZWF0b3IoYnRuLCAnY2xhc3MnLCAnaG9tZS1idG4nKTtcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocGFyYSk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoMSk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgcmV0dXJuIGdyaWREaXZfMS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcbn07XG5cblxuLy8gQ3JlYXRlcyBpbmZvcm1hdGlvbiBjYXJkc1xuY29uc3QgY3JlYXRlSW5mb0NhcmRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcmRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGVsZW1lbnRDcmVhdG9yKCdkaXYnLCAnJyk7XG4gICAgICAgIGF0dHJpYnV0ZUNyZWF0b3IoY2FyZCwgJ2NsYXNzJywgJ2NhcmQnKTtcbiAgICAgICAgY2FyZHMucHVzaChjYXJkKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhcmRzO1xufTtcbi8vIFBvcHVsYXRlcyBpbmZvcm1hdGlvbiBjYXJkc1xuY29uc3QgcG9wdWxhdGVDYXJkcyA9IChjYXJkcykgPT4ge1xuICAgIGNvbnN0IGljb25zID0gW1xuICAgICAgICAncHVibGljL2ltZy9jYXJkLTEtd2hpdGUucG5nJyxcbiAgICAgICAgJ3B1YmxpYy9pbWcvY2FyZC0yLXdoaXRlLnBuZycsXG4gICAgICAgICdwdWJsaWMvaW1nL2NhcmQtMy13aGl0ZS5wbmcnLFxuICAgICAgICAncHVibGljL2ltZy9jYXJkLTQtd2hpdGUucG5nJyxcbiAgICBdO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBbXG4gICAgICAgICdUb3AgY2hlZnMnLFxuICAgICAgICAnV2lkZSB2ZXJpZXR5IG9mIGZvb2QnLFxuICAgICAgICAnVGFzdHkgUGl6emEnLFxuICAgICAgICAnQ3VyYXRlZCB3aW5lIHNlbGVjdGlvbicsXG4gICAgXTtcbiAgICBjb25zdCB0ZXh0cyA9IFtcbiAgICAgICAgJ0JlY2F1c2UgbGlmZSBpcyB0b28gc2hvcnQgdG8gZWF0IGJvcmluZyBmb29kLiBHZXQgcmVhZHkgZm9yIGEgdGFzdGUgcGFydHkgaW4geW91ciBtb3V0aCEnLFxuICAgICAgICAnVmFyaWV0eSBpcyB0aGUgc3BpY2Ugb2YgbGlmZSwgYW5kIG91ciBtZW51IGlzIHRoZSBzcGljZSByYWNrLiBFYXQgbGlrZSBub2JvZHlcXCdzIHdhdGNoaW5nIScsXG4gICAgICAgICdUaGUgb25seSBjaXJjbGUgb2YgdHJ1c3QgeW91IG5lZWQuIENoZWVzeSwgc2F1Y3ksIGFuZCBhbHdheXMgdGhlcmUgZm9yIHlvdS4nLFxuICAgICAgICAnQmVjYXVzZSBhZHVsdGluZyBpcyBoYXJkLCBidXQgY2hvb3Npbmcgd2luZSBzaG91bGRu4oCZdCBiZS4gU2lwLCBzYXZvciwgcmVwZWF0LicsXG4gICAgXTtcblxuXG4gICAgLy8gR29lcyB0aHJvdWdoIGVhY2ggY2FyZCBpbiBjYXJkcyBhcnJheVxuICAgIC8vIFRha2VzIHRoZSB2YWx1ZXMgZnJvbSBnaXZlbiBhcnJheXNcbiAgICAvLyBTZXRzIHRob3NlIHZhbHVlcyBmb3IgZWFjaCBjYXJkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZ0VsZW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCBpY29uc1tpXSk7XG4gICAgICAgIGF0dHJpYnV0ZUNyZWF0b3IoaW1nRWxlbWVudCwgJ2NsYXNzJywgJ3BuZy1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgaDIgPSBlbGVtZW50Q3JlYXRvcignaDInLCBoZWFkZXJzW2ldKTtcbiAgICAgICAgYXR0cmlidXRlQ3JlYXRvcihoMiwgJ2NsYXNzJywgJ2NhcmQtaGVhZGVyJyk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBlbGVtZW50Q3JlYXRvcigncCcsIHRleHRzW2ldKTtcbiAgICAgICAgYXR0cmlidXRlQ3JlYXRvcih0ZXh0LCAnY2xhc3MnLCAnY2FyZC10ZXh0Jyk7XG5cblxuICAgICAgICAvLyBBcHBlbmRzIGVsZW1lbnRzIHRvIGNhcmRcbiAgICAgICAgY2FyZHNbaV0uYXBwZW5kQ2hpbGQoaW1nRWxlbWVudCk7XG4gICAgICAgIGNhcmRzW2ldLmFwcGVuZENoaWxkKGgyKTtcbiAgICAgICAgY2FyZHNbaV0uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgfVxuICAgIHJldHVybiBjYXJkcztcbn07XG4vLyBBcHBlbmRzIGNhcmRzIGZyb20gdGhlIGNhcmRzIGFycmF5IHRvIHRoZSBwYXJlbnQgZWxlbWVudFxuY29uc3QgYXBwZW5kQ2FyZHMgPSAoY2FyZHMpID0+IHtcbiAgICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyaWREaXZfMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkLWNvbnRhaW5lcicpO1xuICAgICAgICBncmlkRGl2XzMuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfSk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhvbWU7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL21lbnUuY3NzJztcbmltcG9ydCByZW5kZXJGb290ZXIgZnJvbSAnLi9mb290ZXInO1xuaW1wb3J0IHsgcmVtb3ZlQ29udGVudCwgZWxlbWVudENyZWF0b3IsIGF0dHJpYnV0ZUNyZWF0b3IgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbi8vIEhhbmRsZXMgcmVuZGVyaW5nIG9mIHRoZSBNZW51IHBhZ2UgY29udGVudFxuY29uc3QgcmVuZGVyTWVudSA9ICgpID0+IHtcbiAgICByZW1vdmVDb250ZW50KCk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICAvLyBNZW51IHBhZ2UgbWFpbiBjb250ZW50IGRpdlxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBjcmVhdGVNZW51RGl2KCk7XG5cbiAgICAvLyBDaGlsZCBvZiBtZW51Q29udGFpbmVyXG4gICAgY29uc3QgbWVudUNvbnRlbnQgPSBlbGVtZW50Q3JlYXRvcignZGl2JywgJycpO1xuICAgIGF0dHJpYnV0ZUNyZWF0b3IobWVudUNvbnRlbnQsICdjbGFzcycsICdtZW51LWNvbnRlbnQnKTtcblxuICAgIC8vIENoaWxkIG9mIG1lbnVDb250ZW50XG4gICAgLy8gRGlzcGxheXMgYWxsIHRoZSBjYXJkc1xuICAgIGNvbnN0IG1lbnVDYXJkc0NvbnRhaW5lciA9IGVsZW1lbnRDcmVhdG9yKCdkaXYnLCAnJyk7XG4gICAgYXR0cmlidXRlQ3JlYXRvcihtZW51Q2FyZHNDb250YWluZXIsICdjbGFzcycsICdtZW51LWNhcmRzLWNvbnRhaW5lcicpO1xuXG4gICAgY2FyZEFwcGVuZGVyKG1lbnVDYXJkc0NvbnRhaW5lciwgY2FyZHMpO1xuXG4gICAgLy8gQ2hpbGQgYXBwZW5kaW5nIGFuZCBkaXNwbGF5aW5nIGVsZW1lbnRzXG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNhcmRzQ29udGFpbmVyKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDb250ZW50KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuXG4gICAgcmVuZGVyRm9vdGVyKCk7XG59O1xuLy8gQ3JlYXRlcyBkaXYgaW5zaWRlIHdoaWNoIE1lbnUgcGFnZSBjb250ZW50IHdpbGwgYmUgc3RvcmVkXG5jb25zdCBjcmVhdGVNZW51RGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IE1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBNZW51RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1jb250YWluZXInKTtcblxuICAgIHJldHVybiBNZW51RGl2O1xufTtcbi8vIENsYXNzICYgTWV0aG9kIHVzZWQgZm9yIGdlbmVyYXRpbmcgY2FyZHNcbmNsYXNzIENhcmQge1xuICAgIGNvbnN0cnVjdG9yKGltZ1VybCwgaGVhZGVyLCB0ZXh0KSB7XG4gICAgICAgIHRoaXMuaW1nVXJsID0gaW1nVXJsO1xuICAgICAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5jcmVhdGVDYXJkKCk7XG4gICAgfVxuXG4gICAgLy8gTWV0aG9kIGZvciBjYXJkIGNyZWF0aW9uXG4gICAgY3JlYXRlQ2FyZCgpIHtcbiAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuXG4gICAgICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWFnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbWcnKTtcbiAgICAgICAgaW1hZ2VFbGVtZW50LnNyYyA9IHRoaXMuaW1nVXJsO1xuICAgICAgICBjYXJkRWxlbWVudC5hcHBlbmRDaGlsZChpbWFnZUVsZW1lbnQpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBoZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJyk7XG4gICAgICAgIGhlYWRlckVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLmhlYWRlcjtcbiAgICAgICAgY2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyRWxlbWVudCk7XG5cbiAgICAgICAgY29uc3QgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwYXJhJyk7XG4gICAgICAgIHRleHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmQtcGFyYScpO1xuICAgICAgICB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMudGV4dDtcbiAgICAgICAgY2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dEVsZW1lbnQpO1xuXG4gICAgICAgIHJldHVybiBjYXJkRWxlbWVudDtcbiAgICB9XG59XG4vLyBIYW5kbGVzIGFwcGVuZGluZyBhbiBhcnJheSBvZiBjYXJkIG9iamVjdHMgdG8gdGhlIHBhcmVudCBlbGVtZW50XG5jb25zdCBjYXJkQXBwZW5kZXIgPSAocGFyZW50LCBjYXJkcykgPT4ge1xuICAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNhcmQuZWxlbWVudCk7XG4gICAgfSk7XG59O1xuXG4vLyBBbiBhcnJheSB0aGF0IGNvbnRhaW5zIGFsbCBnZW5lcmF0ZWQgY2FyZCBvYmplY3RzIGZvciBkaXNwYXlcbmNvbnN0IGNhcmRzID0gW1xuICAgIG5ldyBDYXJkKCdkaXN0L3B1YmxpYy9pbWcvZm9vZC1pY29ucy9sYXNhZ25hLnBuZycsICdMdXNjaW91cyBMYXllcnMgRGVsaWdodCcsICdMYXllcnMgb2Ygam95LCBjaGVlc2UsIGFuZCBoYXBwaW5lc3MuIEl0XFwncyBsaWtlIGEgZGVsaWNpb3VzIG9wZXJhIGluIHlvdXIgbW91dGgg4oCTIGFuIEl0YWxpYW4gbWFzdGVycGllY2UsIG5vIHN0cmluZ3MgYXR0YWNoZWQhJyksXG5cbiAgICBuZXcgQ2FyZCgncHVibGljL2ltZy9mb29kLWljb25zL2J1cmdlci5wbmcnLCAnU2l6emxpbmcgQmVlZiBCbGlzcycsICdVbmxlYXNoIHlvdXIgdGFzdGUgYnVkcyB3aXRoIFNpenpsaW5nIEJlZWYgQmxpc3M6IGEgYnVyZ2VyIHN5bXBob255IG9mIGp1aWN5IHBlcmZlY3Rpb24gYW5kIHNhdm9yeSBzYXRpc2ZhY3Rpb24hJyksXG5cbiAgICBuZXcgQ2FyZCgncHVibGljL2ltZy9mb29kLWljb25zL2ZyaWVkLWZpc2gucG5nJywgJ0dvbGRlbiBTZWEgU3ltcGhvbnknLCAnTWVldCBvdXIgRnJpZWQgRmlzaDogQ3Jpc3B5LCBnb2xkZW4sIGFuZCBkb3ducmlnaHQgZGVsaWNpb3VzLiBBIHNlYSBvZiBmbGF2b3IgaW4gZXZlcnkgYml0ZSEnKSxcblxuICAgIG5ldyBDYXJkKCdwdWJsaWMvaW1nL2Zvb2QtaWNvbnMvcGl6emEucG5nJywgJ1plc3R5IE1hcmdoZXJpdGEgTWFydmVsJywgJ1Nhdm9yIHRoZSBzbGljZTogb3VyIHBpenphLCBhIGZsYXZvci1wYWNrZWQgZGVsaWdodCB0aGF0IHNwZWFrcyBpbiBldmVyeSBiaXRlIScpLFxuXG4gICAgbmV3IENhcmQoJ3B1YmxpYy9pbWcvZm9vZC1pY29ucy9yYW1lbi5wbmcnLCAnWmVuIFplc3QgUmFtZW4nLCAnU2F2b3IgdGhlIHNpbXBsaWNpdHkgb2YgcGVyZmVjdGlvbiBpbiBldmVyeSBub29kbGUuIFplbiBaZXN0IFJhbWVuOiB3aGVyZSBmbGF2b3IgbWVldHMgdHJhbnF1aWxpdHkuJyksXG5cbiAgICBuZXcgQ2FyZCgncHVibGljL2ltZy9mb29kLWljb25zL3NhbGFkLnBuZycsICdMZW1vbiBJbmZ1c2lvbiBEZWxpZ2h0JywgJ0NydW5jaCBpbnRvIGZyZXNobmVzcyB3aXRoIG91ciBHYXJkZW4gR3JlZW5zIFNhbGFkLiBBIGJ1cnN0IG9mIHZpYnJhbnQgZmxhdm9ycyBpbiBldmVyeSBjcmlzcCBiaXRlIScpLFxuXG4gICAgbmV3IENhcmQoJ3B1YmxpYy9pbWcvZm9vZC1pY29ucy9zcGFndWV0dGkucG5nJywgJ1Nhdm9yeSBTZXJlbmFkZSBTcGFnaGV0dGknLCAnVGFuZ2xlIHdpdGggZmxhdm9yIGluIGV2ZXJ5IGZvcmtmdWwuIFNhdm9yeSBTZXJlbmFkZSBTcGFnaGV0dGk6IGEgbWVsb2R5IG9mIHRhc3RlIGluIGV2ZXJ5IHR3aXJsLicpLFxuXG4gICAgbmV3IENhcmQoJ3B1YmxpYy9pbWcvZm9vZC1pY29ucy9zdXNoaS5wbmcnLCAnU2FrdXJhIEJsaXNzIFN1c2hpJywgJ0RpdmUgaW50byBTYWt1cmEgQmxpc3MgU3VzaGk6IGEgc3ltcGhvbnkgb2YgZnJlc2ggZmxhdm9ycyBhbmQgZGVsaWNhdGUgcm9sbHMuJyksXG5dO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlck1lbnU7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL25hdmJhci5jc3MnO1xuaW1wb3J0IHJlbmRlckhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCByZW5kZXJNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgcmVuZGVyQ29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuLy8gTWFpbiBmdW5jdGlvbiBmb3IgcmVuZGVyaW5nIHRoZSBOYXZiYXJcbmNvbnN0IHJlbmRlck5hdmJhciA9ICgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBjcmVhdGVOYXYoKTtcbiAgICBjb25zdCBuYXZFbGVtZW50cyA9IGFwcGVuZE5hdkVsZW1lbnRzKCk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZVVsKG5hdkVsZW1lbnRzKSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LXVsJykuZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICByZW5kZXJIb21lKCk7XG59O1xuXG5cbi8vIEZ1bmN0aW9uIGZvciBjcmVhdGluZyB0aGUgTmF2YmFyIGNvbnRhaW5lclxuY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG5hdmJhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdmJhcicpO1xuICAgIG5hdmJhci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdicpO1xuICAgIHJldHVybiBuYXZiYXI7XG59O1xuXG4vLyBDcmVhdGVzIFVMIGFuZCB0YWtlcyBhbiBhcnJheSBvZiBsaSBlbGVtZW50cyBhcyBpbnB1dFxuLy8gQXBwZW5kcyBlYWNoIGxpIGVsZW1lbnRcbmNvbnN0IGNyZWF0ZVVsID0gKGxpTGlzdCkgPT4ge1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB1bC5pZCA9ICduYXYtdWwnO1xuICAgIGxpTGlzdC5mb3JFYWNoKChsaSkgPT4ge1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHVsO1xufTtcblxuLy8gRnVuY3Rpb24gZm9yIGNyZWF0aW5nIGVhY2ggbmF2YmFyIGVsZW1lbnQgYW5kIHJldHVybmluZyBpdCBhcyBhbiBhcnJheVxuLy8gVXNlZCB0byBkaXNwbGF5IGVhY2ggbGkgZWxlbWVudCBpbiBhbiB1bFxuY29uc3QgYXBwZW5kTmF2RWxlbWVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxOYW1lcyA9IFsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXTtcbiAgICBjb25zdCBlbERpc3BsYXlNZXRob2QgPSBbcmVuZGVySG9tZSwgcmVuZGVyTWVudSwgcmVuZGVyQ29udGFjdF07XG4gICAgY29uc3QgbmF2RWxlbWVudHMgPSBbXTtcblxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGknKTtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBlbE5hbWVzW2ldO1xuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBlbERpc3BsYXlNZXRob2RbaV0oKTtcblxuICAgICAgICAgICAgcmVtb3ZlQWN0aXZlQ2xhc3MoKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbENsaWNrQW5pbWF0aW9uKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgbmF2RWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIG5hdkVsZW1lbnRzO1xufTtcbi8vIFJlbW92ZXMgYWxsIGFjdGl2ZSBjbGFzcyBmcm9tIGxpIGVsZW1lbnRzXG5jb25zdCByZW1vdmVBY3RpdmVDbGFzcyA9ICgpID0+IHtcbiAgICBjb25zdCBsaUVsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgbGlFbExpc3QuZm9yRWFjaCgobGkpID0+IHtcbiAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSk7XG59O1xuLy8gSGFuZGxlcyBjbGljayBhbmltYXRpb24gb24gbGkgZWxlbWVudFxuY29uc3QgZWxDbGlja0FuaW1hdGlvbiA9IChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjbGljay1hbmltYXRpb24nKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjbGljay1hbmltYXRpb24nKTtcbiAgICB9LCAzNTApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTmF2YmFyO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL3NyYy9pbmRleC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vcHVibGljL2ltZy9jb250YWN0LXBhZ2UtYmFja2dyb3VuZC1pbWFnZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jb250YWN0LWRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uY29udGVudC1jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogNXZoO1xuICAgIHBhZGRpbmctdG9wOiBjYWxjKDV2aCArIHZhcigtLW5hdmJhci1oZWlnaHQpKTtcbn1cblxuLyogR09PR0xFIE1BUCBTRUNUSU9OICovXG4ubWFwLXNlY3Rpb257XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEsMTEsMTEsMC41KTtcbiAgb3JkZXI6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDV2aDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzJDMkMyQztcbn1cbi5pZnJhbWUtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExLDExLDExLDAuNSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyQzJDMkM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4vKiBcXFxcR09PR0xFIE1BUCBTRUNUSU9OICovXG5cblxuLyogRk9STSAqL1xuLmluZm8tc2VjdGlvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwxMSwxMSwwLjUpO1xuICBvcmRlcjogLTE7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDV2aDtcbn1cbi5pbnB1dC1lbC1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiBjbGFtcCgxOHB4LCAyLjV2dywgMjZweCk7XG4gIG1hcmdpbjogMCA1dmg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uaW5wdXQtZWx7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwxMSwxMSwwLjcpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgIzJDMkMyQztcbiAgcGFkZGluZzogMXJlbTtcbn1cbmlucHV0OjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM2MzYyNjI7XG59XG5pbnB1dCwgdGV4dGFyZWF7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi5mb3JtLWJ0bi1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuLyogXFxcXEZPUk0gKi9cblxuXG4vKiBCVVRUT04gKi9cbi5mb3JtLWJ0biB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEsMTEsMTEsMC43KTtcbiAgYm9yZGVyOiAycHggc29saWQgIzJDMkMyQztcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogUm9vYmVydCwtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbjogMCA1dmg7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIG1pbi13aWR0aDogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllciguMjMsIDEsIDAuMzIsIDEpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIHdpZHRoOiAxNjBweDtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbn1cblxuLmZvcm0tYnRuOmRpc2FibGVkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5mb3JtLWJ0bjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgOHB4IDE1cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cblxuLmZvcm0tYnRuOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cbi8qIFxcXFxCVVRUT04gKi9cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5jb250ZW50LWNvbnRhaW5lcntcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cbiAgICAuaW5mby1jb250YWluZXJ7XG4gICAgICAgIG9yZGVyOiAtMTtcbiAgICB9XG59XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gICAgLmNvbnRlbnQtY29udGFpbmVye1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIH1cbiAgICAuaW5mby1jb250YWluZXJ7XG4gICAgICBvcmRlcjogLTE7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2NvbXBvbmVudHMvc3R5bGVzL2NvbnRhY3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIseURBQTJFO0lBQzNFLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDZDQUE2QztBQUNqRDs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxvQ0FBb0M7RUFDcEMsUUFBUTtFQUNSLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4QjtBQUNBLHdCQUF3Qjs7O0FBR3hCLFNBQVM7QUFDVDtFQUNFLG9DQUFvQztFQUNwQyxTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCO0FBQ0EsVUFBVTs7O0FBR1YsV0FBVztBQUNYO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrSkFBa0o7RUFDbEosZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1EQUFtRDtFQUNuRCxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QiwwQ0FBMEM7RUFDMUMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjtBQUNBLFlBQVk7OztBQUdaO0lBQ0k7TUFDRSwwQkFBMEI7SUFDNUI7SUFDQTtRQUNJLFNBQVM7SUFDYjtBQUNKO0VBQ0U7SUFDRTtNQUNFLDhCQUE4QjtJQUNoQztJQUNBO01BQ0UsU0FBUztFQUNiO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vLi4vc3JjL2luZGV4LmNzcyc7XFxuXFxuLmNvbnRhY3QtZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9wdWJsaWMvaW1nL2NvbnRhY3QtcGFnZS1iYWNrZ3JvdW5kLWltYWdlLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbi5jb250ZW50LWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDV2aDtcXG4gICAgcGFkZGluZy10b3A6IGNhbGMoNXZoICsgdmFyKC0tbmF2YmFyLWhlaWdodCkpO1xcbn1cXG5cXG4vKiBHT09HTEUgTUFQIFNFQ1RJT04gKi9cXG4ubWFwLXNlY3Rpb257XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExLDExLDExLDAuNSk7XFxuICBvcmRlcjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA1dmg7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMkMyQzJDO1xcbn1cXG4uaWZyYW1lLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEsMTEsMTEsMC41KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyQzJDMkM7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4vKiBcXFxcR09PR0xFIE1BUCBTRUNUSU9OICovXFxuXFxuXFxuLyogRk9STSAqL1xcbi5pbmZvLXNlY3Rpb257XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExLDExLDExLDAuNSk7XFxuICBvcmRlcjogLTE7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogNXZoO1xcbn1cXG4uaW5wdXQtZWwtY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxOHB4LCAyLjV2dywgMjZweCk7XFxuICBtYXJnaW46IDAgNXZoO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuLmlucHV0LWVse1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwxMSwxMSwwLjcpO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMkMyQzJDO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuaW5wdXQ6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICM2MzYyNjI7XFxufVxcbmlucHV0LCB0ZXh0YXJlYXtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuLmZvcm0tYnRuLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcbi8qIFxcXFxGT1JNICovXFxuXFxuXFxuLyogQlVUVE9OICovXFxuLmZvcm0tYnRuIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExLDExLDExLDAuNyk7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMkMyQzJDO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBSb29iZXJ0LC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFxcXCJTZWdvZSBVSVxcXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIixcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBtYXJnaW46IDAgNXZoO1xcbiAgbWluLWhlaWdodDogNjBweDtcXG4gIG1pbi13aWR0aDogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKC4yMywgMSwgMC4zMiwgMSk7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIHdpZHRoOiAxNjBweDtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxufVxcblxcbi5mb3JtLWJ0bjpkaXNhYmxlZCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmZvcm0tYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCA4cHggMTVweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG59XFxuXFxuLmZvcm0tYnRuOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG4vKiBcXFxcQlVUVE9OICovXFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gICAgLmNvbnRlbnQtY29udGFpbmVye1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB9XFxuICAgIC5pbmZvLWNvbnRhaW5lcntcXG4gICAgICAgIG9yZGVyOiAtMTtcXG4gICAgfVxcbn1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XFxuICAgIC5jb250ZW50LWNvbnRhaW5lcntcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIH1cXG4gICAgLmluZm8tY29udGFpbmVye1xcbiAgICAgIG9yZGVyOiAtMTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZm9vdGVyLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAzMywgMzMsIDEpO1xuICAgIGdhcDogNXZ3O1xufVxuLmZvb3Rlci1lbGVtZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubGlua2VkLWVsZW1lbnR7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vY29tcG9uZW50cy9zdHlsZXMvZm9vdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsUUFBUTtBQUNaO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvb3Rlci1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAzMywgMzMsIDEpO1xcbiAgICBnYXA6IDV2dztcXG59XFxuLmZvb3Rlci1lbGVtZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubGlua2VkLWVsZW1lbnR7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vc3JjL2luZGV4LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9wdWJsaWMvaW1nL2xhbmRpbmctcGFnZS1kaXNoLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhvbWVEaXZ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG59XG4uZ3JpZC1kaXYtMXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ0LCA0NCwgNDQpO1xuICAgIHBhZGRpbmctbGVmdDogNXZ3O1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5ncmlkLWRpdi0ye1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogMTAwdmg7XG59XG4uZ3JpZC1kaXYtM3tcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCAxMSwgMTEpO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBnYXA6IDV2aDtcbiAgcGFkZGluZzogNXZoO1xuICBwYWRkaW5nLXRvcDogY2FsYyg1dmggKyB2YXIoLS1uYXZiYXItaGVpZ2h0KSk7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ob21lLWNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5wYXJhe1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uaG9tZS1oMXtcbiAgICBmb250LXNpemU6IDQ2cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuXG4vKiBCVVRUT04gKi9cbi5ob21lLWJ0biB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMUExQTFBO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBSb29iZXJ0LC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixcIkFwcGxlIENvbG9yIEVtb2ppXCIsXCJTZWdvZSBVSSBFbW9qaVwiLFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiAwO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBtaW4td2lkdGg6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoLjIzLCAxLCAwLjMyLCAxKTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICB3aWR0aDogMTYwcHg7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG59XG5cbi5ob21lLWJ0bjpkaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uaG9tZS1idG46aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDhweCAxNXB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbi5ob21lLWJ0bjphY3RpdmUge1xuICBib3gtc2hhZG93OiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG4vKiBcXFxcQlVUVE9OICovXG5cblxuLyogQ0FSRCBTRUNUSU9OICovXG4uY2FyZHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0NCwgNDQsIDQ0KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogNXZoO1xuICBoZWlnaHQ6IDQwdmg7XG59XG5pbWd7XG4gIHotaW5kZXg6IDA7XG59XG4ucG5nLWNvbnRhaW5lcntcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5jYXJkLWhlYWRlcntcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uY2FyZC10ZXh0e1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLmNhcmQge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAycHggc29saWQgIzJDMkMyQztcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogUm9vYmVydCwtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBtYXJnaW46IDA7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIG1pbi13aWR0aDogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoLjIzLCAxLCAwLjMyLCAxKTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICBtYXgtd2lkdGg6IDIwdnc7XG4gIG1pbi1oZWlnaHQ6IDMyMHB4O1xufVxuXG4uY2FyZDpkaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uY2FyZDpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgOHB4IDE1cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cblxuLmNhcmQ6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuLyogXFxcXENBUkQgU0VDVElPTiAqL1xuXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmdyaWQtZGl2LTN7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5jYXJke1xuICAgIG1heC13aWR0aDogODB2dztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLmdyaWQtZGl2LTN7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAuY2FyZHtcbiAgICBtYXgtd2lkdGg6IDQwdnc7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MDBweCkge1xuICAuZ3JpZC1kaXYtM3tcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2NvbXBvbmVudHMvc3R5bGVzL2hvbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0kseURBQStEO0lBQy9ELHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLGFBQWE7QUFDakI7QUFDQTtFQUNFLGlDQUFpQztFQUNqQywwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixZQUFZO0VBQ1osNkNBQTZDO0VBQzdDLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtKQUFrSjtFQUNsSixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbURBQW1EO0VBQ25ELGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLDBDQUEwQztFQUMxQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCO0FBQ0EsWUFBWTs7O0FBR1osaUJBQWlCO0FBQ2pCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQyxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrSkFBa0o7RUFDbEosZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtREFBbUQ7RUFDbkQsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLDBDQUEwQztFQUMxQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCO0FBQ0Esa0JBQWtCOzs7O0FBSWxCO0VBQ0U7SUFDRSwwQkFBMEI7SUFDMUIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsOEJBQThCO0lBQzlCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLHNDQUFzQztJQUN0QywwQ0FBMEM7RUFDNUM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi8uLi9zcmMvaW5kZXguY3NzJztcXG5cXG4uaG9tZURpdntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcbi5ncmlkLWRpdi0xe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ0LCA0NCwgNDQpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDV2dztcXG4gICAgcGFkZGluZy1yaWdodDogM3JlbTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuLmdyaWQtZGl2LTJ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL2ltZy9sYW5kaW5nLXBhZ2UtZGlzaC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4uZ3JpZC1kaXYtM3tcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMSwgMTEsIDExKTtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZ2FwOiA1dmg7XFxuICBwYWRkaW5nOiA1dmg7XFxuICBwYWRkaW5nLXRvcDogY2FsYyg1dmggKyB2YXIoLS1uYXZiYXItaGVpZ2h0KSk7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaG9tZS1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ucGFyYXtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5ob21lLWgxe1xcbiAgICBmb250LXNpemU6IDQ2cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4vKiBCVVRUT04gKi9cXG4uaG9tZS1idG4ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzFBMUExQTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogUm9vYmVydCwtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcXFwiU2Vnb2UgVUlcXFwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxcIlNlZ29lIFVJIEVtb2ppXFxcIixcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWluLWhlaWdodDogNjBweDtcXG4gIG1pbi13aWR0aDogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKC4yMywgMSwgMC4zMiwgMSk7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIHdpZHRoOiAxNjBweDtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxufVxcblxcbi5ob21lLWJ0bjpkaXNhYmxlZCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmhvbWUtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCA4cHggMTVweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG59XFxuXFxuLmhvbWUtYnRuOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG4vKiBcXFxcQlVUVE9OICovXFxuXFxuXFxuLyogQ0FSRCBTRUNUSU9OICovXFxuLmNhcmR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0NCwgNDQsIDQ0KTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA1dmg7XFxuICBoZWlnaHQ6IDQwdmg7XFxufVxcbmltZ3tcXG4gIHotaW5kZXg6IDA7XFxufVxcbi5wbmctY29udGFpbmVye1xcbiAgd2lkdGg6IDY0cHg7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmNhcmQtaGVhZGVye1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uY2FyZC10ZXh0e1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmNhcmQge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzJDMkMyQztcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogUm9vYmVydCwtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcXFwiU2Vnb2UgVUlcXFwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxcIlNlZ29lIFVJIEVtb2ppXFxcIixcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWluLWhlaWdodDogNjBweDtcXG4gIG1pbi13aWR0aDogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKC4yMywgMSwgMC4zMiwgMSk7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxuICBtYXgtd2lkdGg6IDIwdnc7XFxuICBtaW4taGVpZ2h0OiAzMjBweDtcXG59XFxuXFxuLmNhcmQ6ZGlzYWJsZWQge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5jYXJkOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCA4cHggMTVweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG59XFxuXFxuLmNhcmQ6YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxufVxcbi8qIFxcXFxDQVJEIFNFQ1RJT04gKi9cXG5cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmdyaWQtZGl2LTN7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuICAuY2FyZHtcXG4gICAgbWF4LXdpZHRoOiA4MHZ3O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xcbiAgLmdyaWQtZGl2LTN7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgLmNhcmR7XFxuICAgIG1heC13aWR0aDogNDB2dztcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTUwMHB4KSB7XFxuICAuZ3JpZC1kaXYtM3tcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9zcmMvaW5kZXguY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uL3B1YmxpYy9pbWcvcGl6emEtYmFja2dyb3VuZC1yZXNpemVkLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1lbnUtY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG4ubWVudS1jb250ZW50e1xuICAgIHBhZGRpbmc6IDEwdnc7XG4gICAgcGFkZGluZy10b3A6IGNhbGMoNSUgKyB2YXIoLS1uYXZiYXItaGVpZ2h0KSk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5tZW51LWNhcmRzLWNvbnRhaW5lcntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExLDExLDExLDAuNSk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ2FwOiAzdnc7XG4gICAgcGFkZGluZzogM3Z3O1xufVxuLmNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwxMSwxMSwwLjUpO1xuICAgIHotaW5kZXg6IDA7XG59XG4uY2FyZC1oZWFkZXJ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XG59XG4uY2FyZC1wYXJhe1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLm1lbnUtY2FyZHMtY29udGFpbmVye1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICAgIC5jYXJke1xuICAgICAgbWF4LXdpZHRoOiA4MHZ3O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAgIC5tZW51LWNhcmRzLWNvbnRhaW5lcntcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gICAgLmNhcmR7XG4gICAgICBtYXgtd2lkdGg6IDQwdnc7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MDBweCkge1xuICAgIC5tZW51LWNhcmRzLWNvbnRhaW5lcntcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICAuY2FyZHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwxMSwxMSwwLjUpO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBtaW4taGVpZ2h0OiAzMjBweDtcbiAgICB9XG4gIH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2NvbXBvbmVudHMvc3R5bGVzL21lbnUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksWUFBWTtJQUNaLHlEQUFzRTtJQUN0RSxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsUUFBUTtJQUNSLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25COzs7O0FBSUE7SUFDSTtNQUNFLDBCQUEwQjtNQUMxQixZQUFZO0lBQ2Q7SUFDQTtNQUNFLGVBQWU7SUFDakI7RUFDRjtFQUNBO0lBQ0U7TUFDRSw4QkFBOEI7TUFDOUIsWUFBWTtJQUNkO0lBQ0E7TUFDRSxlQUFlO0lBQ2pCO0VBQ0Y7RUFDQTtJQUNFO01BQ0Usc0NBQXNDO01BQ3RDLFlBQVk7SUFDZDtJQUNBO1FBQ0ksb0NBQW9DO1FBQ3BDLFVBQVU7UUFDVixpQkFBaUI7SUFDckI7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi8uLi9zcmMvaW5kZXguY3NzJztcXG5cXG4ubWVudS1jb250YWluZXJ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9wdWJsaWMvaW1nL3BpenphLWJhY2tncm91bmQtcmVzaXplZC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG4ubWVudS1jb250ZW50e1xcbiAgICBwYWRkaW5nOiAxMHZ3O1xcbiAgICBwYWRkaW5nLXRvcDogY2FsYyg1JSArIHZhcigtLW5hdmJhci1oZWlnaHQpKTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm1lbnUtY2FyZHMtY29udGFpbmVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExLDExLDExLDAuNSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAzdnc7XFxuICAgIHBhZGRpbmc6IDN2dztcXG59XFxuLmNhcmR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEsMTEsMTEsMC41KTtcXG4gICAgei1pbmRleDogMDtcXG59XFxuLmNhcmQtaGVhZGVye1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xcbn1cXG4uY2FyZC1wYXJhe1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAgIC5tZW51LWNhcmRzLWNvbnRhaW5lcntcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG4gICAgLmNhcmR7XFxuICAgICAgbWF4LXdpZHRoOiA4MHZ3O1xcbiAgICB9XFxuICB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xcbiAgICAubWVudS1jYXJkcy1jb250YWluZXJ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcbiAgICAuY2FyZHtcXG4gICAgICBtYXgtd2lkdGg6IDQwdnc7XFxuICAgIH1cXG4gIH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MDBweCkge1xcbiAgICAubWVudS1jYXJkcy1jb250YWluZXJ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICAgIC5jYXJke1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwxMSwxMSwwLjUpO1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMyMHB4O1xcbiAgICB9XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9zcmMvaW5kZXguY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYG5hdntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB6LWluZGV4OiAyO1xufVxudWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMnJlbTtcbn1cbi5uYXZ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogdmFyKC0tbmF2YmFyLWhlaWdodCk7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsIDMzLCAzMywgMC43KTtcbn1cbi5saXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2U7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgZm9udC1zaXplOiB2YXIoLS1uYXZiYXItZm9udC1zaXplKTtcbn1cbi5saTpob3ZlcntcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDAuM3JlbTtcbiAgICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAwLjFyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBsaWdodGdyYXk7XG59XG4ubGkuY2xpY2stYW5pbWF0aW9ue1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG4uYWN0aXZle1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMC4zcmVtO1xuICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDAuMXJlbTtcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IGxpZ2h0Z3JheTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2NvbXBvbmVudHMvc3R5bGVzL25hdmJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0lBQ2pCLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLGdDQUFnQztBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi8uLi9zcmMvaW5kZXguY3NzJztcXG5cXG5cXG5uYXZ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgei1pbmRleDogMjtcXG59XFxudWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuLm5hdntcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2YmFyLWhlaWdodCk7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMzMsIDMzLCAwLjcpO1xcbn1cXG4ubGl7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgZWFzZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tbmF2YmFyLWZvbnQtc2l6ZSk7XFxufVxcbi5saTpob3ZlcntcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMC4zcmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAwLjFyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG4ubGkuY2xpY2stYW5pbWF0aW9ue1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG4uYWN0aXZle1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAwLjNyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDAuMXJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBsaWdodGdyYXk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogIDw8PCBDU1MgUkVTRVQgRklMRSA+Pj4gICovXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuIG1hcmdpbjogMDtcbiBwYWRkaW5nOiAwO1xuIGJvcmRlcjogMDtcbiBmb250LXNpemU6IDEwMCU7XG4gZm9udDogaW5oZXJpdDtcbiB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5IVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzIFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuIGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG4gbGluZS1oZWlnaHQ6IDE7XG59XG5vbCwgdWwge1xuIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcbiBxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlYmVmb3JlLCBibG9ja3F1b3RlYWZ0ZXIsXG5xYmVmb3JlLCBxYWZ0ZXIge1xuIGNvbnRlbnQ6ICcnO1xuIGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG4gYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLyogIDw8PCBcXFxcQ1NTIFJFU0VUIEZJTEUgPj4+ICAqL1xuXG46cm9vdHtcbiAgICAtLW5hdmJhci1oZWlnaHQ6IDEwdmg7XG4gICAgLS1uYXZiYXItZm9udC1zaXplOiBjbGFtcCgxOHB4LCAyLjV2dywgMjhweCk7XG4gICAgLS1mb290ZXItaGVpZ2h0OiAxOHZoO1xuICAgIGZvbnQtZmFtaWx5OiBSb29iZXJ0LC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixcIkFwcGxlIENvbG9yIEVtb2ppXCIsXCJTZWdvZSBVSSBFbW9qaVwiLFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMSwxMSwxMSk7XG59XG4jY29udGVudHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw2QkFBNkI7QUFDN0I7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBOzs7Q0FHQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBLDhCQUE4Qjs7QUFFOUI7SUFDSSxxQkFBcUI7SUFDckIsNENBQTRDO0lBQzVDLHFCQUFxQjtJQUNyQixrSkFBa0o7SUFDbEosZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAgPDw8IENTUyBSRVNFVCBGSUxFID4+PiAgKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiBtYXJnaW46IDA7XFxuIHBhZGRpbmc6IDA7XFxuIGJvcmRlcjogMDtcXG4gZm9udC1zaXplOiAxMDAlO1xcbiBmb250OiBpbmhlcml0O1xcbiB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbkhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG4gbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZWJlZm9yZSwgYmxvY2txdW90ZWFmdGVyLFxcbnFiZWZvcmUsIHFhZnRlciB7XFxuIGNvbnRlbnQ6ICcnO1xcbiBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiAgPDw8IFxcXFxDU1MgUkVTRVQgRklMRSA+Pj4gICovXFxuXFxuOnJvb3R7XFxuICAgIC0tbmF2YmFyLWhlaWdodDogMTB2aDtcXG4gICAgLS1uYXZiYXItZm9udC1zaXplOiBjbGFtcCgxOHB4LCAyLjV2dywgMjhweCk7XFxuICAgIC0tZm9vdGVyLWhlaWdodDogMTh2aDtcXG4gICAgZm9udC1mYW1pbHk6IFJvb2JlcnQsLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXFxcIlNlZ29lIFVJXFxcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMSwxMSwxMSk7XFxufVxcbiNjb250ZW50e1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGFjdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRhY3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZiYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZiYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCByZW5kZXJOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbnJlbmRlck5hdmJhcigpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=