function calculateEllipseArea(){
    const majorAxis = getInputElementById('major-axis');
    const minorAxis = getInputElementById('minor-axis');

    if (isNaN(majorAxis) || isNaN(minorAxis)) {
        alert("Please enter valid numbers for major and minor axes.");
        return;
    }

    const area = 3.14 * majorAxis * minorAxis;
    setElementTextById('ellipse-area', area);

    addToCalculationHistory('Ellipse', area);
}

function getInputElementById(inputId) {
    const inputElement = document.getElementById(inputId);
    return parseFloat(inputElement.value);
}

function setElementTextById(elementId, text) {
    const element = document.getElementById(elementId);
    element.innerText = text;
}

