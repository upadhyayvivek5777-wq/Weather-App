const  getWeather=async()=> {
    const city = document.getElementById("city").value;

    if(city === ""){
        alert("Please enter a city name");
        return;
    }
fetch(`https://wttr.in/${city}?format=j1`)
  .then(res => res.json()
)
  .then(data =>{ console.log(data)
        document.getElementById("weatherInfo").innerHTML = `
        <h2>${city}</h2>
        <div class="temp">${data.current_condition[0].temp_C}°C</div>
        <p>🌤 Sunny</p>
        <div class="details">
            <span>💧 60%</span>
            <span>🌬 10 km/h</span>
        </div>
    `;
  });
}