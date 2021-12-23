let fontSize = parseInt(getComputedStyle(document.querySelector('body'), null).getPropertyValue('font-size'), 10);

function decreaseFontSize() {
    fontSize--;
    updateBodyFontSize();
}

function increaseFontSize() {
    fontSize++;
    updateBodyFontSize();
}

function updateBodyFontSize() {
    document.body.style.fontSize = `${fontSize}px`;
}