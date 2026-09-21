let calculationCount = 0;

function addToCalculationHistory(shape, area) {
  calculationCount++;
  const calculationList = document.getElementById("area-calculation-list");

  const calculationItem = document.createElement("div");
  calculationItem.className =
    "flex justify-between items-center gap-1 mb-5 text-sm";

  calculationItem.innerHTML = `
        <span>${calculationCount}. ${shape}:</span>
        <span id="areaOutput${calculationCount}">${area} cm² </span>
        <button class="btn bg-[#1090D8] btn-sm text-[#FFFFFF]" onclick="convertToMeterSquare(${area}, ${calculationCount})">Convert to m²</button>
    `;

  calculationList.appendChild(calculationItem);
}
