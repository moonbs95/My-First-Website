const API_KEY = "08db37caf05c107a2777bc3e1ad3243c";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} ºC`;
    });
}

function onGeoError() {
    city.innerText="Admission is required."
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);