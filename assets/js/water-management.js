// Simulate real-time data update every few seconds
function fetchRealTimeData() {
    // Simulated data; replace with real sensor API calls
    const simulatedData = {
        soilMoisture: `${Math.floor(Math.random() * 100)}%`,
        temperature: `${Math.floor(Math.random() * 35) + 15}°C`,
        humidity: `${Math.floor(Math.random() * 100)}%`,
        forecast: "Sunny"
    };

    document.getElementById("soil-moisture").textContent = simulatedData.soilMoisture;
    document.getElementById("temperature").textContent = simulatedData.temperature;
    document.getElementById("humidity").textContent = simulatedData.humidity;
    document.getElementById("forecast").textContent = simulatedData.forecast;
}

// Fetch data every 5 seconds
setInterval(fetchRealTimeData, 5000);

// Manual Irrigation Control
document.getElementById("irrigationOn").addEventListener("click", () => {
    // Send request to turn on irrigation (API call or IoT control)
    document.getElementById("irrigationStatus").textContent = "Irrigation Status: On";
});

document.getElementById("irrigationOff").addEventListener("click", () => {
    // Send request to turn off irrigation
    document.getElementById("irrigationStatus").textContent = "Irrigation Status: Off";
});
