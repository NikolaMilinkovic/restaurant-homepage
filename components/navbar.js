import './styles/navbar.css';
import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';

const content = document.getElementById('content');

// Main function for rendering the Navbar
const renderNavbar = () => {
    const nav = createNav();
    const navElements = appendNavElements();

    content.appendChild(nav);
    nav.appendChild(createUl(navElements));

    document.getElementById('nav-ul').firstChild.classList.add('active');
    renderHome();
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
    const elDisplayMethod = [renderHome, renderMenu, renderContact];
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

export default renderNavbar;
