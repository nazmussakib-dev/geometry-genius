function calculateRectangleArea() {
    const length = parseFloat(document.getElementById('rectangle-length').value);
    const width = parseFloat(document.getElementById('rectangle-width').value);

    if (isNaN(length) || isNaN(width)) {
        alert("Please enter valid numbers for length and width.");
        return;
    }

    const area = length * width;
    document.getElementById('rectangle-area').innerText = area;

    addToCalculationHistory('Rectangle', area);
}