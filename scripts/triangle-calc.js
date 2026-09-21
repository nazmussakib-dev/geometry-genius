function calculateTriangleArea() {
    // Get the base value from the input fields
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);

    // Get the height value from the input field
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);

    // Validate the input values
    if (isNaN(base) || isNaN(height)) {
        alert("Please enter valid numbers for base and height.");
        return;
    }

    // Calculate the area of the triangle
    const area = 0.5 * base * height;

    // Display the result in the output field
    const triangleAreaOutput = document.getElementById('triangle-area');
    triangleAreaOutput.innerText = area;

    // Add the calculation to the history
    addToCalculationHistory('Triangle', area);
}