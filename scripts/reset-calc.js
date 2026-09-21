function resetCalculations() {
    calculationCount = 0;
  
    document.getElementById("area-calculation-list").innerHTML = "";
  
    document.querySelectorAll("input").forEach(input => {
      input.value = "";
    });
  
    document.querySelectorAll('[id$="-area"]').forEach(output => {
      output.innerText = "";
    });
  }