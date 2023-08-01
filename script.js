function convertTemperature() {
    const temperatureInput = document.getElementById("temperature").value;
    const selectedUnit = document.getElementById("unit").value;
    const resultElement = document.getElementById("result");
  
    if (isNaN(temperatureInput)) {
      resultElement.textContent = "Invalid input. Please enter a valid number.";
      return;
    }
  
    const temperature = parseFloat(temperatureInput);
  
    if (selectedUnit === "celsius") {
      const result = (temperature * 9/5) + 32;
      resultElement.textContent = `${temperature} °C = ${result.toFixed(2)} °F`;
    } else {
      const result = (temperature - 32) * 5/9;
      resultElement.textContent = `${temperature} °F = ${result.toFixed(2)} °C`;
    }
  }
  