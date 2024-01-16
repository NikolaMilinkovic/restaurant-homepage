import './styles/navbar.css';
import { renderHome } from './home.js'
import { renderMenu } from './menu.js'
import { renderContact } from './contact.js'
const content = document.getElementById('content');

// Main function for rendering the Navbar
const renderNavbar = () => {
    const nav = createNav();
    const navElements = appendNavElements();
    
    content.appendChild(nav);
    nav.appendChild(createUl(navElements));
    renderHome();
};


// Function for creating the Navbar container
const createNav = () => {
    const navbar = document.createElement('div');
    navbar.setAttribute('id', 'navbar');
    navbar.setAttribute('class', 'nav');
    return navbar;
};

// Creates UL and takes an array of li elements as input
// Appends each li element
const createUl = (liList) => {
    const ul = document.createElement('ul');
    liList.forEach(li => {
        ul.appendChild(li);
    });
    return ul;
}

// Function for creating each navbar element and returning it as an array
// Used to display each li element in an ul
const appendNavElements = () => {
    
    const elNames = ["Home","Menu","Contact"];
    const elDisplayMethod = [renderHome, renderMenu, renderContact];
    const navElements = [];


    for(let i=0; i<elNames.length ;i++){

        const element = document.createElement('li');
        element.setAttribute('class', 'li');
        element.innerHTML = elNames[i];

        element.addEventListener('click', function (){
            elDisplayMethod[i]();

            elClickAnimation(element);
        })
        navElements.push(element);
    }
    return navElements;
}

const elClickAnimation = (element) => {
    element.classList.add('active');
    setTimeout(() => {
        element.classList.remove('active');
    }, 150);
}


function displayMenu(){
    console.log("Display Menu clicked");
}
function displayContact(){
    console.log("Display Contact clicked");
}

export { renderNavbar };