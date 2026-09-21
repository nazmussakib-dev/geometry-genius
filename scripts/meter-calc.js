function convertToMeterSquare(area, calculationNumber) {
  const areaOutput = document.getElementById(`areaOutput${calculationNumber}`);

  const areaInMeterSquare = area / 10000; // Convert cm² to m²

  areaOutput.innerText = `${areaInMeterSquare} m²`;
}
