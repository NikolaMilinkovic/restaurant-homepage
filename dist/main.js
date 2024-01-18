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
        '../dist/public/img/card-1-white.png',
        '../dist/public/img/card-2-white.png',
        '../dist/public/img/card-3-white.png',
        '../dist/public/img/card-4-white.png',
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
    new Card('../dist/public/img/food-icons/lasagna.png', 'Luscious Layers Delight', 'Layers of joy, cheese, and happiness. It\'s like a delicious opera in your mouth – an Italian masterpiece, no strings attached!'),

    new Card('../dist/public/img/food-icons/burger.png', 'Sizzling Beef Bliss', 'Unleash your taste buds with Sizzling Beef Bliss: a burger symphony of juicy perfection and savory satisfaction!'),

    new Card('../dist/public/img/food-icons/fried-fish.png', 'Golden Sea Symphony', 'Meet our Fried Fish: Crispy, golden, and downright delicious. A sea of flavor in every bite!'),

    new Card('../dist/public/img/food-icons/pizza.png', 'Zesty Margherita Marvel', 'Savor the slice: our pizza, a flavor-packed delight that speaks in every bite!'),

    new Card('../dist/public/img/food-icons/ramen.png', 'Zen Zest Ramen', 'Savor the simplicity of perfection in every noodle. Zen Zest Ramen: where flavor meets tranquility.'),

    new Card('../dist/public/img/food-icons/salad.png', 'Lemon Infusion Delight', 'Crunch into freshness with our Garden Greens Salad. A burst of vibrant flavors in every crisp bite!'),

    new Card('../../dist/public/img/food-icons/spaguetti.png', 'Savory Serenade Spaghetti', 'Tangle with flavor in every forkful. Savory Serenade Spaghetti: a melody of taste in every twirl.'),

    new Card('../dist/public/img/food-icons/sushi.png', 'Sakura Bliss Sushi', 'Dive into Sakura Bliss Sushi: a symphony of fresh flavors and delicate rolls.'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnR0FBZ0csVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLGNBQWMsV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxZQUFZLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw2RkFBNkYsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxZQUFZLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLGVBQWUsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUss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bnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9jb21wb25lbnRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vY29tcG9uZW50cy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9jb21wb25lbnRzL3N0eWxlcy9jb250YWN0LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vY29tcG9uZW50cy9zdHlsZXMvZm9vdGVyLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vY29tcG9uZW50cy9zdHlsZXMvaG9tZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL2NvbXBvbmVudHMvc3R5bGVzL21lbnUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9jb21wb25lbnRzL3N0eWxlcy9uYXZiYXIuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vY29tcG9uZW50cy9zdHlsZXMvY29udGFjdC5jc3M/ZjYzOCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vY29tcG9uZW50cy9zdHlsZXMvZm9vdGVyLmNzcz84MTgyIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9jb21wb25lbnRzL3N0eWxlcy9ob21lLmNzcz83NzBlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9jb21wb25lbnRzL3N0eWxlcy9tZW51LmNzcz84ZjczIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9jb21wb25lbnRzL3N0eWxlcy9uYXZiYXIuY3NzP2IzMmIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL2NvbnRhY3QuY3NzJztcbmltcG9ydCByZW5kZXJGb290ZXIgZnJvbSAnLi9mb290ZXInO1xuaW1wb3J0IHsgcmVtb3ZlQ29udGVudCwgZWxlbWVudENyZWF0b3IgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4vLyBIYW5kbGVzIHJlbmRlcmluZyBvZiB0aGUgQ29udGFjdCBwYWdlIGNvbnRlbnRcbmNvbnN0IHJlbmRlckNvbnRhY3QgPSAoKSA9PiB7XG4gICAgcmVtb3ZlQ29udGVudCgpO1xuXG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gY3JlYXRlQ29udGFjdERpdigpO1xuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBnZXRDb250YWluZXIoJ2NvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgY29uc3QgbWFwU2VjdGlvbiA9IGdldENvbnRhaW5lcignbWFwLXNlY3Rpb24nKTtcbiAgICBjb25zdCBpbmZvU2VjdGlvbiA9IGdldENvbnRhaW5lcignaW5mby1zZWN0aW9uJyk7XG5cbiAgICAvLyBDcmVhdGVzIGFuZCBhcHBlbmRzIGdvb2dsZSBtYXBcbiAgICBhcHBlbmRHb29nbGVNYXAobWFwU2VjdGlvbik7XG4gICAgLy8gQ3JlYXRlcyBhbmQgYXBwZW5kcyBmb3JtXG4gICAgZm9ybUNyZWF0b3IoaW5mb1NlY3Rpb24pO1xuXG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1hcFNlY3Rpb24pO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb1NlY3Rpb24pO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuICAgIHJlbmRlckZvb3RlcigpO1xufTtcblxuLy8gQ3JlYXRlcyBkaXYgaW5zaWRlIHdoaWNoIENvbnRhY3QgcGFnZSBjb250ZW50IHdpbGwgYmUgc3RvcmVkXG5jb25zdCBjcmVhdGVDb250YWN0RGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGFjdC1kaXYnKTtcblxuICAgIHJldHVybiBjb250YWN0RGl2O1xufTtcbi8vIENyZWF0ZWQgbWFwIGNvbnRhaW5lclxuY29uc3QgZ2V0Q29udGFpbmVyID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IENvbnRhaW5lciA9IGVsZW1lbnRDcmVhdG9yKCdkaXYnLCAnJyk7XG4gICAgQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfWApO1xuICAgIHJldHVybiBDb250YWluZXI7XG59O1xuLy8gQXBwZW5kcyBnb29nbGUgbWFwIGxpbmtcbmNvbnN0IGFwcGVuZEdvb2dsZU1hcCA9IChwYXJlbnQpID0+IHtcbiAgICBjb25zdCBpZnJhbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZnJhbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaWZyYW1lLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuXG4gICAgaWZyYW1lLnNyYyA9ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxNDE0LjQ4MTczMjg1MzYzMjYhMmQyMC4zODA5Njk3OTUzMzAzNSEzZDQ0Ljg0MjY3NzM3MjY4NDk3ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg0NzVhNjU4YzgyMTRmZTlmJTNBMHg0NWI3NjBjMmNiMTI3ZGVmITJzWmFnYSE1ZTAhM20yITFzZW4hMnNycyE0djE3MDU1MzUwOTg2OTUhNW0yITFzZW4hMnNycyc7XG4gICAgaWZyYW1lLndpZHRoID0gJzEwMCUnO1xuICAgIGlmcmFtZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgaWZyYW1lLnN0eWxlLmJvcmRlciA9ICcwJztcbiAgICBpZnJhbWUuYWxsb3dmdWxsc2NyZWVuID0gdHJ1ZTtcbiAgICBpZnJhbWUubG9hZGluZyA9ICdsYXp5JztcbiAgICBpZnJhbWUucmVmZXJyZXJwb2xpY3kgPSAnbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUnO1xuXG4gICAgaWZyYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGlmcmFtZUNvbnRhaW5lcik7XG59O1xuLy8gQ3JhdGVzIGEgZm9ybSBlbGVtZW50IGFuZCBhcHBlbmRzIGl0IHRvIHBhcmVudCBlbGVtZW50XG5jb25zdCBmb3JtQ3JlYXRvciA9IChwYXJlbnQpID0+IHtcbiAgICAvLyBIYW5kbGVzIGZvcm1cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uaWQgPSAnZm9ybSc7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtJyk7XG5cbiAgICAvLyBDcmVhdGVzIGZvcm0gZWxlbWVudHNcbiAgICBjb25zdCBuYW1lID0gZm9ybUVsQ3JlYXRvcignaW5wdXQnLCAndGV4dCcsICdpbnB1dC1uYW1lJywgJ2lucHV0LWVsJywgJ05hbWUgKicsICdOYW1lJywgJ2lucHV0LWVsLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgZW1haWwgPSBmb3JtRWxDcmVhdG9yKCdpbnB1dCcsICdlbWFpbCcsICdpbnB1dC1lbWFpbCcsICdpbnB1dC1lbCcsICdFbWFpbCBBZHJlc3MgKicsICdFbWFpbCBBZHJlc3MnLCAnaW5wdXQtZWwtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBwaG9uZSA9IGZvcm1FbENyZWF0b3IoJ2lucHV0JywgJ3RleHQnLCAnaW5wdXQtcGhvbmUnLCAnaW5wdXQtZWwnLCAnUGhvbmUgKicsICdQaG9uZScsICdpbnB1dC1lbC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IG1lc3NhZ2UgPSBmb3JtRWxDcmVhdG9yKCd0ZXh0YXJlYScsICd0ZXh0JywgJ2lucHV0LW1lc3NhZ2UnLCAnaW5wdXQtZWwnLCAnTWVzc2FnZSAqJywgJ01lc3NhZ2UnLCAnaW5wdXQtZWwtY29udGFpbmVyJyk7XG5cbiAgICAvLyBDcmVhdGVzIGZvcm0gYnV0dG9uIGNvbnRhaW5lclxuICAgIGNvbnN0IGZvcm1CdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnRuLWNvbnRhaW5lcicpO1xuXG4gICAgLy8gQ3JlYXRlcyBmb3JtIGJ1dHRvblxuICAgIGNvbnN0IGZvcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAvLyBDaGFuZ2UgdGhpcyB0byBtYWtlIHRoZSBidXR0b24gaW50byBzdWJtaXQgYnV0dG9uXG4gICAgZm9ybUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgZm9ybUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcbiAgICBmb3JtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnRuJyk7XG4gICAgZm9ybUJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQnV0dG9uKTtcbiAgICBmb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbGVhcklucHV0KCk7XG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGVzIGFwcGVuZGluZyBlbGVtZW50cyB0byB0aGUgZm9ybVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChlbWFpbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwaG9uZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1CdXR0b25Db250YWluZXIpO1xuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvcm0pO1xufTtcbi8vIENyZWF0ZXMgYSBmb3JtIGVsZW1lbnQgYW5kIHJldHVybnMgaXRzZWxmXG5jb25zdCBmb3JtRWxDcmVhdG9yID0gKGVsZW1lbnQsIHR5cGUsIGlkLCBjbGFzc05hbWUsIHBsYWNlaG9sZGVyLCBsYWJlbFR4dCwgY29udGFpbmVyQ2xhc3NOYW1lKSA9PiB7XG4gICAgLy8gQ29udGFpbmVyXG4gICAgY29uc3QgZWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChgJHtjb250YWluZXJDbGFzc05hbWV9YCk7XG5cbiAgICAvLyBMYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlkKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGAke2xhYmVsVHh0fWA7XG5cbiAgICAvLyBFbGVtZW50XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke2VsZW1lbnR9YCk7XG4gICAgZWwuaWQgPSBgJHtpZH1gO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfWApO1xuICAgIGVsLnBsYWNlaG9sZGVyID0gYCR7cGxhY2Vob2xkZXJ9YDtcbiAgICBpZiAoZWxlbWVudC50b0xvd2VyQ2FzZSgpID09PSAndGV4dGFyZWEnKSB7XG4gICAgICAgIGVsLnJvd3MgPSA0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnR5cGUgPSBgJHt0eXBlfWA7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlcyBhcHBlbmluZyBlbGVtZW50c1xuICAgIGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWwpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRDb250YWluZXI7XG59O1xuLy8gQ2xlYXJzIGFsbCBpbnB1dCBmaWVsZHNcbmNvbnN0IGNsZWFySW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICBjb25zdCB0eHRJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpO1xuXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgfSk7XG5cbiAgICB0eHRJbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNvbnRhY3Q7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2Zvb3Rlci5jc3MnO1xuaW1wb3J0IHsgZWxlbWVudFdpdGhMaW5rLCBlbGVtZW50Q3JlYXRvciwgYXR0cmlidXRlQ3JlYXRvciB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxuXG4vLyBIYW5kbGVzIHJlbmRlcmluZyBvZiB0aGUgRm9vdGVyIGNvbXBvbmVudFxuY29uc3QgcmVuZGVyRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGxhc3RFbGVtZW50ID0gY29udGVudC5sYXN0RWxlbWVudENoaWxkO1xuXG4gICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyRWxlbWVudHMoY3JlYXRlRm9vdGVyKCkpO1xuICAgIGxhc3RFbGVtZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59O1xuLy8gQ3JlYXRlcyBkaXYgaW5zaWRlIHdoaWNoIEZvb3RlciBwYWdlIGNvbnRlbnQgd2lsbCBiZSBzdG9yZWRcbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb290ZXItY29udGFpbmVyJyk7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xufTtcbi8vIENyZWF0ZXMgZm9vdGVyIGVsZW1lbnRzXG5jb25zdCBjcmVhdGVGb290ZXJFbGVtZW50cyA9IChmb290ZXIpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gW1xuICAgICAgICAnQ3JlYXRlZCBieScsXG4gICAgICAgICcnLFxuICAgICAgICAnSWNvbnMgdGFrZW4gZnJvbTxicj4nLFxuICAgIF07XG5cbiAgICAvLyBEaXYgY29udGFpbmVyIGZvciBlbGVtZW50c1xuICAgIGNvbnN0IGVsID0gZWxlbWVudENyZWF0b3IoJ2RpdicsICcnKTtcbiAgICBhdHRyaWJ1dGVDcmVhdG9yKGVsLCAnY2xhc3MnLCAnZm9vdGVyLWVsZW1lbnQnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIC8vIFRleHQgZWxlbWVudCBmb3IgZm9vdGVyXG4gICAgICAgIGNvbnN0IHBhcmEgPSBlbGVtZW50Q3JlYXRvcigncGFyYScsIHRleHRbaV0pO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChwYXJhKTtcbiAgICAgICAgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmtlZEVsZW1lbnQgPSBlbGVtZW50V2l0aExpbmsoJ05pa29sYSBNaWxpbmtvdmljJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9OaWtvbGFNaWxpbmtvdmljJyk7XG4gICAgICAgICAgICBsaW5rZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xpbmtlZC1lbGVtZW50Jyk7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChsaW5rZWRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PT0gMikge1xuICAgICAgICAgICAgY29uc3QgbGlua2VkRWxlbWVudCA9IGVsZW1lbnRXaXRoTGluaygnd3d3LmZsYXRpY29uLmNvbScsICdodHRwczovL3d3dy5mbGF0aWNvbi5jb20nKTtcbiAgICAgICAgICAgIGxpbmtlZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGlua2VkLWVsZW1lbnQnKTtcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGxpbmtlZEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChlbCk7XG4gICAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckZvb3RlcjtcbiIsIi8vIFJlbW92ZXMgdGhlIGxhc3QgY2hpbGQgb2YgdGhlIGNvbnRlbnQgZWxlbWVudFxuY29uc3QgcmVtb3ZlQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBpZiAoY29udGVudC5jaGlsZEVsZW1lbnRDb3VudCA+IDEpIHsgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7IH1cbn07XG5cbi8vIEVsZW1lbnQgY3JlYXRvciAoZWxlbWVudFR5cGUsIHRleHQpXG5jb25zdCBlbGVtZW50Q3JlYXRvciA9IChlbGVtZW50VHlwZSwgdGV4dCkgPT4ge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcbiAgICBuZXdFbGVtZW50LmlubmVySFRNTCA9IHRleHQgIT09IG51bGwgPyB0ZXh0IDogJyc7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59O1xuLy8gQXR0cmlidXRlIGNyZWF0b3IgKGVsZW1lbnQsIHR5cGUgb2YgYXR0cmlidXRlLCBuYW1lKVxuY29uc3QgYXR0cmlidXRlQ3JlYXRvciA9IChlbGVtZW50LCBhdHRyaWJ1dGUsIGF0dHJpYnV0ZU5hbWUpID0+IGVsZW1lbnQuc2V0QXR0cmlidXRlKGAke2F0dHJpYnV0ZX1gLCBgJHthdHRyaWJ1dGVOYW1lfWApO1xuXG4vLyBDcmVhdGVzIGFuIGVsZW1lbnQgd2l0aCBhIGxpbmtcbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhbiBlbGVtZW50IHdpdGggYSBsaW5rXG5jb25zdCBlbGVtZW50V2l0aExpbmsgPSAodGV4dCwgbGluaykgPT4ge1xuICAgIGNvbnN0IGxpbmtFbGVtZW50ID0gZWxlbWVudENyZWF0b3IoJ2EnLCB0ZXh0KTtcbiAgICBhdHRyaWJ1dGVDcmVhdG9yKGxpbmtFbGVtZW50LCAnaHJlZicsIGxpbmspO1xuICAgIGF0dHJpYnV0ZUNyZWF0b3IobGlua0VsZW1lbnQsICd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgYXR0cmlidXRlQ3JlYXRvcihsaW5rRWxlbWVudCwgJ3N0eWxlJywgJ3RleHQtZGVjb3JhdGlvbjogbm9uZTsgY29sb3I6IGluaGVyaXQ7Jyk7XG4gICAgcmV0dXJuIGxpbmtFbGVtZW50O1xufTtcblxuZXhwb3J0IHtcbiAgICByZW1vdmVDb250ZW50LCBlbGVtZW50Q3JlYXRvciwgYXR0cmlidXRlQ3JlYXRvciwgZWxlbWVudFdpdGhMaW5rLFxufTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaG9tZS5jc3MnO1xuaW1wb3J0IHJlbmRlckZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XG5pbXBvcnQgeyByZW1vdmVDb250ZW50LCBlbGVtZW50Q3JlYXRvciwgYXR0cmlidXRlQ3JlYXRvciB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cblxuLy8gSGFuZGxlcyByZW5kZXJpbmcgb2YgdGhlIEhvbWUgcGFnZSBjb250ZW50XG5jb25zdCByZW5kZXJIb21lID0gKCkgPT4ge1xuICAgIHJlbW92ZUNvbnRlbnQoKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdkFwcGVuZGVyKCkpO1xuICAgIGFwcGVuZENhcmRzKHBvcHVsYXRlQ2FyZHMoY3JlYXRlSW5mb0NhcmRzKCkpKTtcbiAgICByZW5kZXJGb290ZXIoKTtcbn07XG4vLyBIYW5kbGVzIGFwcGVuZGluZyBkaXZzXG5jb25zdCBkaXZBcHBlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBob21lRGl2ID0gY3JlYXRlSG9tZURpdigpO1xuICAgIGNvbnN0IGdyaWREaXZBcnJheSA9IGdyaWREaXZzKCk7XG4gICAgZ3JpZERpdkFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgaG9tZURpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBob21lRGl2O1xufTtcbi8vIENyZWF0ZXMgZGl2IGluc2lkZSB3aGljaCBIb21lIHBhZ2UgY29udGVudCB3aWxsIGJlIHN0b3JlZFxuY29uc3QgY3JlYXRlSG9tZURpdiA9ICgpID0+IHtcbiAgICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hvbWVEaXYnKTtcblxuICAgIHJldHVybiBob21lRGl2O1xufTtcbi8vIENyZWF0ZXMgYW5kIGFwcGVuZHMgdHdvIGNoaWxkcmVuIGRpdnMgdG8gY3JlYXRlSG9tZURpdlxuLy8gVGhleSBhcmUgdXNlZCB0byBjcmVhdGUgZGVmYXVsdCBncmlkIGxheW91dCBvZiB0aGUgaG9tZSBwYWdlXG5jb25zdCBncmlkRGl2cyA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkRGl2XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBncmlkRGl2XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBncmlkRGl2XzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGdyaWREaXZfMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dyaWQtZGl2LTEnKTtcbiAgICBncmlkRGl2XzIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdncmlkLWRpdi0yJyk7XG4gICAgZ3JpZERpdl8zLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ3JpZC1kaXYtMycpO1xuICAgIGdyaWREaXZfMy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmQtY29udGFpbmVyJyk7XG5cblxuICAgIGFwcGVuZENvbnRlbnRUb0Rpdl8xKGdyaWREaXZfMSk7XG5cbiAgICByZXR1cm4gW2dyaWREaXZfMSwgZ3JpZERpdl8yLCBncmlkRGl2XzNdO1xufTtcbi8vIEFwcGVuZHMgYWxsIHRoZSByZXF1aXJlZCBjb250ZW50IHRvIHRoZSBob21lIGRyaWcgZGl2IDFcbmNvbnN0IGFwcGVuZENvbnRlbnRUb0Rpdl8xID0gKGdyaWREaXZfMSkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBlbGVtZW50Q3JlYXRvcignZGl2JywgJycpO1xuICAgIGF0dHJpYnV0ZUNyZWF0b3IoY29udGVudERpdiwgJ2NsYXNzJywgJ2hvbWUtY29udGVudCcpO1xuXG4gICAgLy8gRWxlbWVudHMgdG8gYmUgYXBwZW5kZWQgdG8gY29udGVudERpdlxuICAgIGNvbnN0IHBhcmEgPSBlbGVtZW50Q3JlYXRvcigncGFyYScsICdEaXNjb3ZlciB5b3VyIHRhc3RlJyk7XG4gICAgY29uc3QgaDEgPSBlbGVtZW50Q3JlYXRvcignaDEnLCAnSGVhbHRoeSwgbmF0dXJhbCBhbmQgb3V0c3RhbmRpbmchJyk7XG4gICAgY29uc3QgYnRuID0gZWxlbWVudENyZWF0b3IoJ2J1dHRvbicsICdSZXNlcnZlIG5vdyEnKTtcblxuICAgIGF0dHJpYnV0ZUNyZWF0b3IocGFyYSwgJ2NsYXNzJywgJ3BhcmEnKTtcbiAgICBhdHRyaWJ1dGVDcmVhdG9yKGgxLCAnY2xhc3MnLCAnaG9tZS1oMScpO1xuICAgIGF0dHJpYnV0ZUNyZWF0b3IoYnRuLCAnY2xhc3MnLCAnaG9tZS1idG4nKTtcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocGFyYSk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoMSk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgcmV0dXJuIGdyaWREaXZfMS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcbn07XG5cblxuLy8gQ3JlYXRlcyBpbmZvcm1hdGlvbiBjYXJkc1xuY29uc3QgY3JlYXRlSW5mb0NhcmRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcmRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGVsZW1lbnRDcmVhdG9yKCdkaXYnLCAnJyk7XG4gICAgICAgIGF0dHJpYnV0ZUNyZWF0b3IoY2FyZCwgJ2NsYXNzJywgJ2NhcmQnKTtcbiAgICAgICAgY2FyZHMucHVzaChjYXJkKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhcmRzO1xufTtcbi8vIFBvcHVsYXRlcyBpbmZvcm1hdGlvbiBjYXJkc1xuY29uc3QgcG9wdWxhdGVDYXJkcyA9IChjYXJkcykgPT4ge1xuICAgIGNvbnN0IGljb25zID0gW1xuICAgICAgICAnLi4vZGlzdC9wdWJsaWMvaW1nL2NhcmQtMS13aGl0ZS5wbmcnLFxuICAgICAgICAnLi4vZGlzdC9wdWJsaWMvaW1nL2NhcmQtMi13aGl0ZS5wbmcnLFxuICAgICAgICAnLi4vZGlzdC9wdWJsaWMvaW1nL2NhcmQtMy13aGl0ZS5wbmcnLFxuICAgICAgICAnLi4vZGlzdC9wdWJsaWMvaW1nL2NhcmQtNC13aGl0ZS5wbmcnLFxuICAgIF07XG4gICAgY29uc3QgaGVhZGVycyA9IFtcbiAgICAgICAgJ1RvcCBjaGVmcycsXG4gICAgICAgICdXaWRlIHZlcmlldHkgb2YgZm9vZCcsXG4gICAgICAgICdUYXN0eSBQaXp6YScsXG4gICAgICAgICdDdXJhdGVkIHdpbmUgc2VsZWN0aW9uJyxcbiAgICBdO1xuICAgIGNvbnN0IHRleHRzID0gW1xuICAgICAgICAnQmVjYXVzZSBsaWZlIGlzIHRvbyBzaG9ydCB0byBlYXQgYm9yaW5nIGZvb2QuIEdldCByZWFkeSBmb3IgYSB0YXN0ZSBwYXJ0eSBpbiB5b3VyIG1vdXRoIScsXG4gICAgICAgICdWYXJpZXR5IGlzIHRoZSBzcGljZSBvZiBsaWZlLCBhbmQgb3VyIG1lbnUgaXMgdGhlIHNwaWNlIHJhY2suIEVhdCBsaWtlIG5vYm9keVxcJ3Mgd2F0Y2hpbmchJyxcbiAgICAgICAgJ1RoZSBvbmx5IGNpcmNsZSBvZiB0cnVzdCB5b3UgbmVlZC4gQ2hlZXN5LCBzYXVjeSwgYW5kIGFsd2F5cyB0aGVyZSBmb3IgeW91LicsXG4gICAgICAgICdCZWNhdXNlIGFkdWx0aW5nIGlzIGhhcmQsIGJ1dCBjaG9vc2luZyB3aW5lIHNob3VsZG7igJl0IGJlLiBTaXAsIHNhdm9yLCByZXBlYXQuJyxcbiAgICBdO1xuXG5cbiAgICAvLyBHb2VzIHRocm91Z2ggZWFjaCBjYXJkIGluIGNhcmRzIGFycmF5XG4gICAgLy8gVGFrZXMgdGhlIHZhbHVlcyBmcm9tIGdpdmVuIGFycmF5c1xuICAgIC8vIFNldHMgdGhvc2UgdmFsdWVzIGZvciBlYWNoIGNhcmRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGltZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1nRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGljb25zW2ldKTtcbiAgICAgICAgYXR0cmlidXRlQ3JlYXRvcihpbWdFbGVtZW50LCAnY2xhc3MnLCAncG5nLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBoMiA9IGVsZW1lbnRDcmVhdG9yKCdoMicsIGhlYWRlcnNbaV0pO1xuICAgICAgICBhdHRyaWJ1dGVDcmVhdG9yKGgyLCAnY2xhc3MnLCAnY2FyZC1oZWFkZXInKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnRDcmVhdG9yKCdwJywgdGV4dHNbaV0pO1xuICAgICAgICBhdHRyaWJ1dGVDcmVhdG9yKHRleHQsICdjbGFzcycsICdjYXJkLXRleHQnKTtcblxuXG4gICAgICAgIC8vIEFwcGVuZHMgZWxlbWVudHMgdG8gY2FyZFxuICAgICAgICBjYXJkc1tpXS5hcHBlbmRDaGlsZChpbWdFbGVtZW50KTtcbiAgICAgICAgY2FyZHNbaV0uYXBwZW5kQ2hpbGQoaDIpO1xuICAgICAgICBjYXJkc1tpXS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIGNhcmRzO1xufTtcbi8vIEFwcGVuZHMgY2FyZHMgZnJvbSB0aGUgY2FyZHMgYXJyYXkgdG8gdGhlIHBhcmVudCBlbGVtZW50XG5jb25zdCBhcHBlbmRDYXJkcyA9IChjYXJkcykgPT4ge1xuICAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgY29uc3QgZ3JpZERpdl8zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtY29udGFpbmVyJyk7XG4gICAgICAgIGdyaWREaXZfMy5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICB9KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVySG9tZTtcbiIsImltcG9ydCAnLi9zdHlsZXMvbWVudS5jc3MnO1xuaW1wb3J0IHJlbmRlckZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XG5pbXBvcnQgeyByZW1vdmVDb250ZW50LCBlbGVtZW50Q3JlYXRvciwgYXR0cmlidXRlQ3JlYXRvciB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxuLy8gSGFuZGxlcyByZW5kZXJpbmcgb2YgdGhlIE1lbnUgcGFnZSBjb250ZW50XG5jb25zdCByZW5kZXJNZW51ID0gKCkgPT4ge1xuICAgIHJlbW92ZUNvbnRlbnQoKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIC8vIE1lbnUgcGFnZSBtYWluIGNvbnRlbnQgZGl2XG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGNyZWF0ZU1lbnVEaXYoKTtcblxuICAgIC8vIENoaWxkIG9mIG1lbnVDb250YWluZXJcbiAgICBjb25zdCBtZW51Q29udGVudCA9IGVsZW1lbnRDcmVhdG9yKCdkaXYnLCAnJyk7XG4gICAgYXR0cmlidXRlQ3JlYXRvcihtZW51Q29udGVudCwgJ2NsYXNzJywgJ21lbnUtY29udGVudCcpO1xuXG4gICAgLy8gQ2hpbGQgb2YgbWVudUNvbnRlbnRcbiAgICAvLyBEaXNwbGF5cyBhbGwgdGhlIGNhcmRzXG4gICAgY29uc3QgbWVudUNhcmRzQ29udGFpbmVyID0gZWxlbWVudENyZWF0b3IoJ2RpdicsICcnKTtcbiAgICBhdHRyaWJ1dGVDcmVhdG9yKG1lbnVDYXJkc0NvbnRhaW5lciwgJ2NsYXNzJywgJ21lbnUtY2FyZHMtY29udGFpbmVyJyk7XG5cbiAgICBjYXJkQXBwZW5kZXIobWVudUNhcmRzQ29udGFpbmVyLCBjYXJkcyk7XG5cbiAgICAvLyBDaGlsZCBhcHBlbmRpbmcgYW5kIGRpc3BsYXlpbmcgZWxlbWVudHNcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChtZW51Q2FyZHNDb250YWluZXIpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbiAgICByZW5kZXJGb290ZXIoKTtcbn07XG4vLyBDcmVhdGVzIGRpdiBpbnNpZGUgd2hpY2ggTWVudSBwYWdlIGNvbnRlbnQgd2lsbCBiZSBzdG9yZWRcbmNvbnN0IGNyZWF0ZU1lbnVEaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgTWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIE1lbnVEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWNvbnRhaW5lcicpO1xuXG4gICAgcmV0dXJuIE1lbnVEaXY7XG59O1xuLy8gQ2xhc3MgJiBNZXRob2QgdXNlZCBmb3IgZ2VuZXJhdGluZyBjYXJkc1xuY2xhc3MgQ2FyZCB7XG4gICAgY29uc3RydWN0b3IoaW1nVXJsLCBoZWFkZXIsIHRleHQpIHtcbiAgICAgICAgdGhpcy5pbWdVcmwgPSBpbWdVcmw7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmNyZWF0ZUNhcmQoKTtcbiAgICB9XG5cbiAgICAvLyBNZXRob2QgZm9yIGNhcmQgY3JlYXRpb25cbiAgICBjcmVhdGVDYXJkKCkge1xuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG5cbiAgICAgICAgY29uc3QgaW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltYWdlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYXJkLWltZycpO1xuICAgICAgICBpbWFnZUVsZW1lbnQuc3JjID0gdGhpcy5pbWdVcmw7XG4gICAgICAgIGNhcmRFbGVtZW50LmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XG5cbiAgICAgICAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGhlYWRlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKTtcbiAgICAgICAgaGVhZGVyRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuaGVhZGVyO1xuICAgICAgICBjYXJkRWxlbWVudC5hcHBlbmRDaGlsZChoZWFkZXJFbGVtZW50KTtcblxuICAgICAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BhcmEnKTtcbiAgICAgICAgdGV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2FyZC1wYXJhJyk7XG4gICAgICAgIHRleHRFbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy50ZXh0O1xuICAgICAgICBjYXJkRWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XG5cbiAgICAgICAgcmV0dXJuIGNhcmRFbGVtZW50O1xuICAgIH1cbn1cbi8vIEhhbmRsZXMgYXBwZW5kaW5nIGFuIGFycmF5IG9mIGNhcmQgb2JqZWN0cyB0byB0aGUgcGFyZW50IGVsZW1lbnRcbmNvbnN0IGNhcmRBcHBlbmRlciA9IChwYXJlbnQsIGNhcmRzKSA9PiB7XG4gICAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2FyZC5lbGVtZW50KTtcbiAgICB9KTtcbn07XG5cbi8vIEFuIGFycmF5IHRoYXQgY29udGFpbnMgYWxsIGdlbmVyYXRlZCBjYXJkIG9iamVjdHMgZm9yIGRpc3BheVxuY29uc3QgY2FyZHMgPSBbXG4gICAgbmV3IENhcmQoJy4uL2Rpc3QvcHVibGljL2ltZy9mb29kLWljb25zL2xhc2FnbmEucG5nJywgJ0x1c2Npb3VzIExheWVycyBEZWxpZ2h0JywgJ0xheWVycyBvZiBqb3ksIGNoZWVzZSwgYW5kIGhhcHBpbmVzcy4gSXRcXCdzIGxpa2UgYSBkZWxpY2lvdXMgb3BlcmEgaW4geW91ciBtb3V0aCDigJMgYW4gSXRhbGlhbiBtYXN0ZXJwaWVjZSwgbm8gc3RyaW5ncyBhdHRhY2hlZCEnKSxcblxuICAgIG5ldyBDYXJkKCcuLi9kaXN0L3B1YmxpYy9pbWcvZm9vZC1pY29ucy9idXJnZXIucG5nJywgJ1NpenpsaW5nIEJlZWYgQmxpc3MnLCAnVW5sZWFzaCB5b3VyIHRhc3RlIGJ1ZHMgd2l0aCBTaXp6bGluZyBCZWVmIEJsaXNzOiBhIGJ1cmdlciBzeW1waG9ueSBvZiBqdWljeSBwZXJmZWN0aW9uIGFuZCBzYXZvcnkgc2F0aXNmYWN0aW9uIScpLFxuXG4gICAgbmV3IENhcmQoJy4uL2Rpc3QvcHVibGljL2ltZy9mb29kLWljb25zL2ZyaWVkLWZpc2gucG5nJywgJ0dvbGRlbiBTZWEgU3ltcGhvbnknLCAnTWVldCBvdXIgRnJpZWQgRmlzaDogQ3Jpc3B5LCBnb2xkZW4sIGFuZCBkb3ducmlnaHQgZGVsaWNpb3VzLiBBIHNlYSBvZiBmbGF2b3IgaW4gZXZlcnkgYml0ZSEnKSxcblxuICAgIG5ldyBDYXJkKCcuLi9kaXN0L3B1YmxpYy9pbWcvZm9vZC1pY29ucy9waXp6YS5wbmcnLCAnWmVzdHkgTWFyZ2hlcml0YSBNYXJ2ZWwnLCAnU2F2b3IgdGhlIHNsaWNlOiBvdXIgcGl6emEsIGEgZmxhdm9yLXBhY2tlZCBkZWxpZ2h0IHRoYXQgc3BlYWtzIGluIGV2ZXJ5IGJpdGUhJyksXG5cbiAgICBuZXcgQ2FyZCgnLi4vZGlzdC9wdWJsaWMvaW1nL2Zvb2QtaWNvbnMvcmFtZW4ucG5nJywgJ1plbiBaZXN0IFJhbWVuJywgJ1Nhdm9yIHRoZSBzaW1wbGljaXR5IG9mIHBlcmZlY3Rpb24gaW4gZXZlcnkgbm9vZGxlLiBaZW4gWmVzdCBSYW1lbjogd2hlcmUgZmxhdm9yIG1lZXRzIHRyYW5xdWlsaXR5LicpLFxuXG4gICAgbmV3IENhcmQoJy4uL2Rpc3QvcHVibGljL2ltZy9mb29kLWljb25zL3NhbGFkLnBuZycsICdMZW1vbiBJbmZ1c2lvbiBEZWxpZ2h0JywgJ0NydW5jaCBpbnRvIGZyZXNobmVzcyB3aXRoIG91ciBHYXJkZW4gR3JlZW5zIFNhbGFkLiBBIGJ1cnN0IG9mIHZpYnJhbnQgZmxhdm9ycyBpbiBldmVyeSBjcmlzcCBiaXRlIScpLFxuXG4gICAgbmV3IENhcmQoJy4uLy4uL2Rpc3QvcHVibGljL2ltZy9mb29kLWljb25zL3NwYWd1ZXR0aS5wbmcnLCAnU2F2b3J5IFNlcmVuYWRlIFNwYWdoZXR0aScsICdUYW5nbGUgd2l0aCBmbGF2b3IgaW4gZXZlcnkgZm9ya2Z1bC4gU2F2b3J5IFNlcmVuYWRlIFNwYWdoZXR0aTogYSBtZWxvZHkgb2YgdGFzdGUgaW4gZXZlcnkgdHdpcmwuJyksXG5cbiAgICBuZXcgQ2FyZCgnLi4vZGlzdC9wdWJsaWMvaW1nL2Zvb2QtaWNvbnMvc3VzaGkucG5nJywgJ1Nha3VyYSBCbGlzcyBTdXNoaScsICdEaXZlIGludG8gU2FrdXJhIEJsaXNzIFN1c2hpOiBhIHN5bXBob255IG9mIGZyZXNoIGZsYXZvcnMgYW5kIGRlbGljYXRlIHJvbGxzLicpLFxuXTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNZW51O1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9uYXZiYXIuY3NzJztcbmltcG9ydCByZW5kZXJIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgcmVuZGVyTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHJlbmRlckNvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbi8vIE1haW4gZnVuY3Rpb24gZm9yIHJlbmRlcmluZyB0aGUgTmF2YmFyXG5jb25zdCByZW5kZXJOYXZiYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gY3JlYXRlTmF2KCk7XG4gICAgY29uc3QgbmF2RWxlbWVudHMgPSBhcHBlbmROYXZFbGVtZW50cygpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXYpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjcmVhdGVVbChuYXZFbGVtZW50cykpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi11bCcpLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgcmVuZGVySG9tZSgpO1xufTtcblxuXG4vLyBGdW5jdGlvbiBmb3IgY3JlYXRpbmcgdGhlIE5hdmJhciBjb250YWluZXJcbmNvbnN0IGNyZWF0ZU5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXZiYXIuc2V0QXR0cmlidXRlKCdpZCcsICduYXZiYXInKTtcbiAgICBuYXZiYXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYnKTtcbiAgICByZXR1cm4gbmF2YmFyO1xufTtcblxuLy8gQ3JlYXRlcyBVTCBhbmQgdGFrZXMgYW4gYXJyYXkgb2YgbGkgZWxlbWVudHMgYXMgaW5wdXRcbi8vIEFwcGVuZHMgZWFjaCBsaSBlbGVtZW50XG5jb25zdCBjcmVhdGVVbCA9IChsaUxpc3QpID0+IHtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdWwuaWQgPSAnbmF2LXVsJztcbiAgICBsaUxpc3QuZm9yRWFjaCgobGkpID0+IHtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pO1xuICAgIHJldHVybiB1bDtcbn07XG5cbi8vIEZ1bmN0aW9uIGZvciBjcmVhdGluZyBlYWNoIG5hdmJhciBlbGVtZW50IGFuZCByZXR1cm5pbmcgaXQgYXMgYW4gYXJyYXlcbi8vIFVzZWQgdG8gZGlzcGxheSBlYWNoIGxpIGVsZW1lbnQgaW4gYW4gdWxcbmNvbnN0IGFwcGVuZE5hdkVsZW1lbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsTmFtZXMgPSBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J107XG4gICAgY29uc3QgZWxEaXNwbGF5TWV0aG9kID0gW3JlbmRlckhvbWUsIHJlbmRlck1lbnUsIHJlbmRlckNvbnRhY3RdO1xuICAgIGNvbnN0IG5hdkVsZW1lbnRzID0gW107XG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpJyk7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gZWxOYW1lc1tpXTtcblxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZWxEaXNwbGF5TWV0aG9kW2ldKCk7XG5cbiAgICAgICAgICAgIHJlbW92ZUFjdGl2ZUNsYXNzKCk7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZWxDbGlja0FuaW1hdGlvbihlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5hdkVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBuYXZFbGVtZW50cztcbn07XG4vLyBSZW1vdmVzIGFsbCBhY3RpdmUgY2xhc3MgZnJvbSBsaSBlbGVtZW50c1xuY29uc3QgcmVtb3ZlQWN0aXZlQ2xhc3MgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlFbExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICAgIGxpRWxMaXN0LmZvckVhY2goKGxpKSA9PiB7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xufTtcbi8vIEhhbmRsZXMgY2xpY2sgYW5pbWF0aW9uIG9uIGxpIGVsZW1lbnRcbmNvbnN0IGVsQ2xpY2tBbmltYXRpb24gPSAoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2xpY2stYW5pbWF0aW9uJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2stYW5pbWF0aW9uJyk7XG4gICAgfSwgMzUwKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlck5hdmJhcjtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9zcmMvaW5kZXguY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uL3B1YmxpYy9pbWcvY29udGFjdC1wYWdlLWJhY2tncm91bmQtaW1hZ2UuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY29udGFjdC1kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmNvbnRlbnQtY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDV2aDtcbiAgICBwYWRkaW5nLXRvcDogY2FsYyg1dmggKyB2YXIoLS1uYXZiYXItaGVpZ2h0KSk7XG59XG5cbi8qIEdPT0dMRSBNQVAgU0VDVElPTiAqL1xuLm1hcC1zZWN0aW9ue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExLDExLDExLDAuNSk7XG4gIG9yZGVyOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA1dmg7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMyQzJDMkM7XG59XG4uaWZyYW1lLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwxMSwxMSwwLjUpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMkMyQzJDO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLyogXFxcXEdPT0dMRSBNQVAgU0VDVElPTiAqL1xuXG5cbi8qIEZPUk0gKi9cbi5pbmZvLXNlY3Rpb257XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEsMTEsMTEsMC41KTtcbiAgb3JkZXI6IC0xO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA1dmg7XG59XG4uaW5wdXQtZWwtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMThweCwgMi41dncsIDI2cHgpO1xuICBtYXJnaW46IDAgNXZoO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmlucHV0LWVse1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEsMTEsMTEsMC43KTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyQzJDMkM7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5pbnB1dDo6cGxhY2Vob2xkZXIsIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNjM2MjYyO1xufVxuaW5wdXQsIHRleHRhcmVhe1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4uZm9ybS1idG4tY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cbi8qIFxcXFxGT1JNICovXG5cblxuLyogQlVUVE9OICovXG4uZm9ybS1idG4ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExLDExLDExLDAuNyk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyQzJDMkM7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6IFJvb2JlcnQsLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBtYXJnaW46IDAgNXZoO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBtaW4td2lkdGg6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoLjIzLCAxLCAwLjMyLCAxKTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICB3aWR0aDogMTYwcHg7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG59XG5cbi5mb3JtLWJ0bjpkaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZm9ybS1idG46aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDhweCAxNXB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbi5mb3JtLWJ0bjphY3RpdmUge1xuICBib3gtc2hhZG93OiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG4vKiBcXFxcQlVUVE9OICovXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAuY29udGVudC1jb250YWluZXJ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG4gICAgLmluZm8tY29udGFpbmVye1xuICAgICAgICBvcmRlcjogLTE7XG4gICAgfVxufVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAgIC5jb250ZW50LWNvbnRhaW5lcntcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICB9XG4gICAgLmluZm8tY29udGFpbmVye1xuICAgICAgb3JkZXI6IC0xO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9jb21wb25lbnRzL3N0eWxlcy9jb250YWN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlEQUEyRTtJQUMzRSxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWiw2Q0FBNkM7QUFDakQ7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0Usb0NBQW9DO0VBQ3BDLFFBQVE7RUFDUixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7QUFDQSx3QkFBd0I7OztBQUd4QixTQUFTO0FBQ1Q7RUFDRSxvQ0FBb0M7RUFDcEMsU0FBUztFQUNULHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0QjtBQUNBLFVBQVU7OztBQUdWLFdBQVc7QUFDWDtFQUNFLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0pBQWtKO0VBQ2xKLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtREFBbUQ7RUFDbkQsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsMENBQTBDO0VBQzFDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7QUFDMUI7QUFDQSxZQUFZOzs7QUFHWjtJQUNJO01BQ0UsMEJBQTBCO0lBQzVCO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7QUFDSjtFQUNFO0lBQ0U7TUFDRSw4QkFBOEI7SUFDaEM7SUFDQTtNQUNFLFNBQVM7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4uLy4uL3NyYy9pbmRleC5jc3MnO1xcblxcbi5jb250YWN0LWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL2ltZy9jb250YWN0LXBhZ2UtYmFja2dyb3VuZC1pbWFnZS5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG4uY29udGVudC1jb250YWluZXJ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiA1dmg7XFxuICAgIHBhZGRpbmctdG9wOiBjYWxjKDV2aCArIHZhcigtLW5hdmJhci1oZWlnaHQpKTtcXG59XFxuXFxuLyogR09PR0xFIE1BUCBTRUNUSU9OICovXFxuLm1hcC1zZWN0aW9ue1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwxMSwxMSwwLjUpO1xcbiAgb3JkZXI6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogNXZoO1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzJDMkMyQztcXG59XFxuLmlmcmFtZS1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExLDExLDExLDAuNSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMkMyQzJDO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLyogXFxcXEdPT0dMRSBNQVAgU0VDVElPTiAqL1xcblxcblxcbi8qIEZPUk0gKi9cXG4uaW5mby1zZWN0aW9ue1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwxMSwxMSwwLjUpO1xcbiAgb3JkZXI6IC0xO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDV2aDtcXG59XFxuLmlucHV0LWVsLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMThweCwgMi41dncsIDI2cHgpO1xcbiAgbWFyZ2luOiAwIDV2aDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5pbnB1dC1lbHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEsMTEsMTEsMC43KTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzJDMkMyQztcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbmlucHV0OjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjNjM2MjYyO1xcbn1cXG5pbnB1dCwgdGV4dGFyZWF7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcbi5mb3JtLWJ0bi1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG4vKiBcXFxcRk9STSAqL1xcblxcblxcbi8qIEJVVFRPTiAqL1xcbi5mb3JtLWJ0biB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwxMSwxMSwwLjcpO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzJDMkMyQztcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogUm9vYmVydCwtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcXFwiU2Vnb2UgVUlcXFwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxcIlNlZ29lIFVJIEVtb2ppXFxcIixcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgbWFyZ2luOiAwIDV2aDtcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICBtaW4td2lkdGg6IDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMTZweCAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllciguMjMsIDEsIDAuMzIsIDEpO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICB3aWR0aDogMTYwcHg7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbn1cXG5cXG4uZm9ybS1idG46ZGlzYWJsZWQge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5mb3JtLWJ0bjpob3ZlciB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgOHB4IDE1cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxufVxcblxcbi5mb3JtLWJ0bjphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuLyogXFxcXEJVVFRPTiAqL1xcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAgIC5jb250ZW50LWNvbnRhaW5lcntcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgfVxcbiAgICAuaW5mby1jb250YWluZXJ7XFxuICAgICAgICBvcmRlcjogLTE7XFxuICAgIH1cXG59XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xcbiAgICAuY29udGVudC1jb250YWluZXJ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICB9XFxuICAgIC5pbmZvLWNvbnRhaW5lcntcXG4gICAgICBvcmRlcjogLTE7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmZvb3Rlci1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMzMsIDMzLCAxKTtcbiAgICBnYXA6IDV2dztcbn1cbi5mb290ZXItZWxlbWVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxpbmtlZC1lbGVtZW50e1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2NvbXBvbmVudHMvc3R5bGVzL2Zvb3Rlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLFFBQVE7QUFDWjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb290ZXItY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMzMsIDMzLCAxKTtcXG4gICAgZ2FwOiA1dnc7XFxufVxcbi5mb290ZXItZWxlbWVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmxpbmtlZC1lbGVtZW50e1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL3NyYy9pbmRleC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vcHVibGljL2ltZy9sYW5kaW5nLXBhZ2UtZGlzaC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5ob21lRGl2e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuLmdyaWQtZGl2LTF7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NCwgNDQsIDQ0KTtcbiAgICBwYWRkaW5nLWxlZnQ6IDV2dztcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG4uZ3JpZC1kaXYtMntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuLmdyaWQtZGl2LTN7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMSwgMTEsIDExKTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xuICBncmlkLWNvbHVtbjogc3BhbiAyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZ2FwOiA1dmg7XG4gIHBhZGRpbmc6IDV2aDtcbiAgcGFkZGluZy10b3A6IGNhbGMoNXZoICsgdmFyKC0tbmF2YmFyLWhlaWdodCkpO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaG9tZS1jb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucGFyYXtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmhvbWUtaDF7XG4gICAgZm9udC1zaXplOiA0NnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuLyogQlVUVE9OICovXG4uaG9tZS1idG4ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAycHggc29saWQgIzFBMUExQTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogUm9vYmVydCwtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbjogMDtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgbWluLXdpZHRoOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKC4yMywgMSwgMC4zMiwgMSk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgd2lkdGg6IDE2MHB4O1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xufVxuXG4uaG9tZS1idG46ZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmhvbWUtYnRuOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCA4cHggMTVweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufVxuXG4uaG9tZS1idG46YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuLyogXFxcXEJVVFRPTiAqL1xuXG5cbi8qIENBUkQgU0VDVElPTiAqL1xuLmNhcmR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDQsIDQ0LCA0NCk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDV2aDtcbiAgaGVpZ2h0OiA0MHZoO1xufVxuaW1ne1xuICB6LWluZGV4OiAwO1xufVxuLnBuZy1jb250YWluZXJ7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uY2FyZC1oZWFkZXJ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLmNhcmQtdGV4dHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5jYXJkIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyQzJDMkM7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6IFJvb2JlcnQsLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiAwO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBtaW4td2lkdGg6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKC4yMywgMSwgMC4zMiwgMSk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgbWF4LXdpZHRoOiAyMHZ3O1xuICBtaW4taGVpZ2h0OiAzMjBweDtcbn1cblxuLmNhcmQ6ZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDhweCAxNXB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbi5jYXJkOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cbi8qIFxcXFxDQVJEIFNFQ1RJT04gKi9cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5ncmlkLWRpdi0ze1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAuY2FyZHtcbiAgICBtYXgtd2lkdGg6IDgwdnc7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gIC5ncmlkLWRpdi0ze1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLmNhcmR7XG4gICAgbWF4LXdpZHRoOiA0MHZ3O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTAwcHgpIHtcbiAgLmdyaWQtZGl2LTN7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9jb21wb25lbnRzL3N0eWxlcy9ob21lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVC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O0VBQzVDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vLi4vc3JjL2luZGV4LmNzcyc7XFxuXFxuLmhvbWVEaXZ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4uZ3JpZC1kaXYtMXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NCwgNDQsIDQ0KTtcXG4gICAgcGFkZGluZy1sZWZ0OiA1dnc7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcbi5ncmlkLWRpdi0ye1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3B1YmxpYy9pbWcvbGFuZGluZy1wYWdlLWRpc2guanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuLmdyaWQtZGl2LTN7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEsIDExLCAxMSk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGdhcDogNXZoO1xcbiAgcGFkZGluZzogNXZoO1xcbiAgcGFkZGluZy10b3A6IGNhbGMoNXZoICsgdmFyKC0tbmF2YmFyLWhlaWdodCkpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhvbWUtY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnBhcmF7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaG9tZS1oMXtcXG4gICAgZm9udC1zaXplOiA0NnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLyogQlVUVE9OICovXFxuLmhvbWUtYnRuIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMxQTFBMUE7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IFJvb2JlcnQsLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXFxcIlNlZ29lIFVJXFxcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIG1hcmdpbjogMDtcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICBtaW4td2lkdGg6IDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMTZweCAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllciguMjMsIDEsIDAuMzIsIDEpO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICB3aWR0aDogMTYwcHg7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbn1cXG5cXG4uaG9tZS1idG46ZGlzYWJsZWQge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5ob21lLWJ0bjpob3ZlciB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgOHB4IDE1cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxufVxcblxcbi5ob21lLWJ0bjphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuLyogXFxcXEJVVFRPTiAqL1xcblxcblxcbi8qIENBUkQgU0VDVElPTiAqL1xcbi5jYXJke1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDQsIDQ0LCA0NCk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogNXZoO1xcbiAgaGVpZ2h0OiA0MHZoO1xcbn1cXG5pbWd7XFxuICB6LWluZGV4OiAwO1xcbn1cXG4ucG5nLWNvbnRhaW5lcntcXG4gIHdpZHRoOiA2NHB4O1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5jYXJkLWhlYWRlcntcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmNhcmQtdGV4dHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5jYXJkIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyQzJDMkM7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IFJvb2JlcnQsLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXFxcIlNlZ29lIFVJXFxcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIG1hcmdpbjogMDtcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICBtaW4td2lkdGg6IDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllciguMjMsIDEsIDAuMzIsIDEpO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbiAgbWF4LXdpZHRoOiAyMHZ3O1xcbiAgbWluLWhlaWdodDogMzIwcHg7XFxufVxcblxcbi5jYXJkOmRpc2FibGVkIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uY2FyZDpob3ZlciB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgOHB4IDE1cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxufVxcblxcbi5jYXJkOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG4vKiBcXFxcQ0FSRCBTRUNUSU9OICovXFxuXFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5ncmlkLWRpdi0ze1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgLmNhcmR7XFxuICAgIG1heC13aWR0aDogODB2dztcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXG4gIC5ncmlkLWRpdi0ze1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG4gIC5jYXJke1xcbiAgICBtYXgtd2lkdGg6IDQwdnc7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MDBweCkge1xcbiAgLmdyaWQtZGl2LTN7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vc3JjL2luZGV4LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9wdWJsaWMvaW1nL3BpenphLWJhY2tncm91bmQtcmVzaXplZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tZW51LWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuLm1lbnUtY29udGVudHtcbiAgICBwYWRkaW5nOiAxMHZ3O1xuICAgIHBhZGRpbmctdG9wOiBjYWxjKDUlICsgdmFyKC0tbmF2YmFyLWhlaWdodCkpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ubWVudS1jYXJkcy1jb250YWluZXJ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwxMSwxMSwwLjUpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdhcDogM3Z3O1xuICAgIHBhZGRpbmc6IDN2dztcbn1cbi5jYXJke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEsMTEsMTEsMC41KTtcbiAgICB6LWluZGV4OiAwO1xufVxuLmNhcmQtaGVhZGVye1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xufVxuLmNhcmQtcGFyYXtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5tZW51LWNhcmRzLWNvbnRhaW5lcntcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICAuY2FyZHtcbiAgICAgIG1heC13aWR0aDogODB2dztcbiAgICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAubWVudS1jYXJkcy1jb250YWluZXJ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICAgIC5jYXJke1xuICAgICAgbWF4LXdpZHRoOiA0MHZ3O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTAwcHgpIHtcbiAgICAubWVudS1jYXJkcy1jb250YWluZXJ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gICAgLmNhcmR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEsMTEsMTEsMC41KTtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgbWluLWhlaWdodDogMzIwcHg7XG4gICAgfVxuICB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9jb21wb25lbnRzL3N0eWxlcy9tZW51LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFlBQVk7SUFDWix5REFBc0U7SUFDdEUsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksYUFBYTtJQUNiLDRDQUE0QztJQUM1QyxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFFBQVE7SUFDUixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsVUFBVTtBQUNkO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7OztBQUlBO0lBQ0k7TUFDRSwwQkFBMEI7TUFDMUIsWUFBWTtJQUNkO0lBQ0E7TUFDRSxlQUFlO0lBQ2pCO0VBQ0Y7RUFDQTtJQUNFO01BQ0UsOEJBQThCO01BQzlCLFlBQVk7SUFDZDtJQUNBO01BQ0UsZUFBZTtJQUNqQjtFQUNGO0VBQ0E7SUFDRTtNQUNFLHNDQUFzQztNQUN0QyxZQUFZO0lBQ2Q7SUFDQTtRQUNJLG9DQUFvQztRQUNwQyxVQUFVO1FBQ1YsaUJBQWlCO0lBQ3JCO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vLi4vc3JjL2luZGV4LmNzcyc7XFxuXFxuLm1lbnUtY29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vcHVibGljL2ltZy9waXp6YS1iYWNrZ3JvdW5kLXJlc2l6ZWQuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuLm1lbnUtY29udGVudHtcXG4gICAgcGFkZGluZzogMTB2dztcXG4gICAgcGFkZGluZy10b3A6IGNhbGMoNSUgKyB2YXIoLS1uYXZiYXItaGVpZ2h0KSk7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5tZW51LWNhcmRzLWNvbnRhaW5lcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwxMSwxMSwwLjUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogM3Z3O1xcbiAgICBwYWRkaW5nOiAzdnc7XFxufVxcbi5jYXJke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExLDExLDExLDAuNSk7XFxuICAgIHotaW5kZXg6IDA7XFxufVxcbi5jYXJkLWhlYWRlcntcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcXG59XFxuLmNhcmQtcGFyYXtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgICAubWVudS1jYXJkcy1jb250YWluZXJ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICAgIC5jYXJke1xcbiAgICAgIG1heC13aWR0aDogODB2dztcXG4gICAgfVxcbiAgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXG4gICAgLm1lbnUtY2FyZHMtY29udGFpbmVye1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG4gICAgLmNhcmR7XFxuICAgICAgbWF4LXdpZHRoOiA0MHZ3O1xcbiAgICB9XFxuICB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTAwcHgpIHtcXG4gICAgLm1lbnUtY2FyZHMtY29udGFpbmVye1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcbiAgICAuY2FyZHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEsMTEsMTEsMC41KTtcXG4gICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICBtaW4taGVpZ2h0OiAzMjBweDtcXG4gICAgfVxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vc3JjL2luZGV4LmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBuYXZ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgei1pbmRleDogMjtcbn1cbnVse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG59XG4ubmF2e1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IHZhcigtLW5hdmJhci1oZWlnaHQpO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAzMywgMzMsIDAuNyk7XG59XG4ubGl7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tbmF2YmFyLWZvbnQtc2l6ZSk7XG59XG4ubGk6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAwLjNyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMC4xcmVtO1xuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogbGlnaHRncmF5O1xufVxuLmxpLmNsaWNrLWFuaW1hdGlvbntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuLmFjdGl2ZXtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDAuM3JlbTtcbiAgICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAwLjFyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBsaWdodGdyYXk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9jb21wb25lbnRzL3N0eWxlcy9uYXZiYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLGlDQUFpQztJQUNqQyxnQ0FBZ0M7QUFDcENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vLi4vc3JjL2luZGV4LmNzcyc7XFxuXFxuXFxubmF2e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcbnVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxufVxcbi5uYXZ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IHZhcigtLW5hdmJhci1oZWlnaHQpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsIDMzLCAzMywgMC43KTtcXG59XFxuLmxpe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2U7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBmb250LXNpemU6IHZhcigtLW5hdmJhci1mb250LXNpemUpO1xcbn1cXG4ubGk6aG92ZXJ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDAuM3JlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMC4xcmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuLmxpLmNsaWNrLWFuaW1hdGlvbntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuLmFjdGl2ZXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMC4zcmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAwLjFyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogbGlnaHRncmF5O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qICA8PDwgQ1NTIFJFU0VUIEZJTEUgPj4+ICAqL1xuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiBtYXJnaW46IDA7XG4gcGFkZGluZzogMDtcbiBib3JkZXI6IDA7XG4gZm9udC1zaXplOiAxMDAlO1xuIGZvbnQ6IGluaGVyaXQ7XG4gdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyBcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcbiBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuIGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsIHVsIHtcbiBsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSwgcSB7XG4gcXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZWJlZm9yZSwgYmxvY2txdW90ZWFmdGVyLFxucWJlZm9yZSwgcWFmdGVyIHtcbiBjb250ZW50OiAnJztcbiBjb250ZW50OiBub25lO1xufVxudGFibGUge1xuIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi8qICA8PDwgXFxcXENTUyBSRVNFVCBGSUxFID4+PiAgKi9cblxuOnJvb3R7XG4gICAgLS1uYXZiYXItaGVpZ2h0OiAxMHZoO1xuICAgIC0tbmF2YmFyLWZvbnQtc2l6ZTogY2xhbXAoMThweCwgMi41dncsIDI4cHgpO1xuICAgIC0tZm9vdGVyLWhlaWdodDogMTh2aDtcbiAgICBmb250LWZhbWlseTogUm9vYmVydCwtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEsMTEsMTEpO1xufVxuI2NvbnRlbnR7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNkJBQTZCO0FBQzdCOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQTs7O0NBR0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQSw4QkFBOEI7O0FBRTlCO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUE0QztJQUM1QyxxQkFBcUI7SUFDckIsa0pBQWtKO0lBQ2xKLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogIDw8PCBDU1MgUkVTRVQgRklMRSA+Pj4gICovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gbWFyZ2luOiAwO1xcbiBwYWRkaW5nOiAwO1xcbiBib3JkZXI6IDA7XFxuIGZvbnQtc2l6ZTogMTAwJTtcXG4gZm9udDogaW5oZXJpdDtcXG4gdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5IVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzIFxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcbiBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGViZWZvcmUsIGJsb2NrcXVvdGVhZnRlcixcXG5xYmVmb3JlLCBxYWZ0ZXIge1xcbiBjb250ZW50OiAnJztcXG4gY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogIDw8PCBcXFxcQ1NTIFJFU0VUIEZJTEUgPj4+ICAqL1xcblxcbjpyb290e1xcbiAgICAtLW5hdmJhci1oZWlnaHQ6IDEwdmg7XFxuICAgIC0tbmF2YmFyLWZvbnQtc2l6ZTogY2xhbXAoMThweCwgMi41dncsIDI4cHgpO1xcbiAgICAtLWZvb3Rlci1oZWlnaHQ6IDE4dmg7XFxuICAgIGZvbnQtZmFtaWx5OiBSb29iZXJ0LC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFxcXCJTZWdvZSBVSVxcXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIixcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEsMTEsMTEpO1xcbn1cXG4jY29udGVudHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRhY3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250YWN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2YmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2YmFyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcmVuZGVyTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5yZW5kZXJOYXZiYXIoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9