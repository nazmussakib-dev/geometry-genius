function calculateRhombusArea() {
    const diagonal1 = getInputElementById('rhombus-diagonal1');
    const diagonal2 = getInputElementById('rhombus-diagonal2');

    if (isNaN(diagonal1) || isNaN(diagonal2)) {
        alert("Please enter valid numbers for both diagonals.");
        return;
    }

    const area = (diagonal1 * diagonal2) / 2;
    setElementTextById('rhombus-area', area);

    addToCalculationHistory('Rhombus', area);
}

function getInputElementById(inputId) {
    const inputElement = document.getElementById(inputId);
    return parseFloat(inputElement.value);
}

function setElementTextById(elementId, text) {
    const element = document.getElementById(elementId);
    element.innerText = text;
}

