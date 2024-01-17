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

export { removeContent, elementCreator, attributeCreator };
