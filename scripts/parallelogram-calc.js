function calculateParallelogramArea() {
    const base = parseFloat(document.getElementById('parallelogram-base').value);
    const height = parseFloat(document.getElementById('parallelogram-height').value);

    if (isNaN(base) || isNaN(height)) {
        alert("Please enter valid numbers for base and height.");
        return;
    }
    
    const area = base * height;
    document.getElementById('parallelogram-area').innerText = area;

    addToCalculationHistory('Parallelogram', area);
}

