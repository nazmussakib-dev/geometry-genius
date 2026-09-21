function calculatePentagonArea() {
    const perimeter = getInputValueById('pentagon-perimeter');
    const apothem = getInputValueById('pentagon-apothem');

    console.log('Perimeter:', perimeter);
    console.log('Apothem:', apothem);

    if (isNaN(perimeter) || isNaN(apothem)) {
        alert("Please enter valid numbers for perimeter and apothem.");
        return;
    }

    const area = (perimeter * apothem) / 2;
    setElementTextById('pentagon-area', area);

    addToCalculationHistory('Pentagon', area);
}

function getInputValueById(inputId) {
    const inputElement = document.getElementById(inputId);
    return parseFloat(inputElement.value);

}

function setElementTextById(elementId, text) {
    const element = document.getElementById(elementId);
    element.innerText = text;
}

