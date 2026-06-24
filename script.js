function getWeather() {
    const city = document.getElementById("city").value;

    if(city === ""){
        alert("Please enter a city name");
        return;
    }

    document.getElementById("weatherInfo").innerHTML = `
        <h2>${city}</h2>
        <div class="temp">${Math.floor(Math.random()*15)+20}°C</div>
        <p>🌤 Sunny</p>
        <div class="details">
            <span>💧 60%</span>
            <span>🌬 10 km/h</span>
        </div>
    `;
}