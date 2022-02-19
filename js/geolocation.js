const API_KEY = "43fae17bb052d7a3d59234cd1de61ed1"

function geoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            const weatherContainer = document.querySelector("#weather span:first-child")
            weatherContainer.innerText = `${data.weather[0].main} ${Math.round(data.main.temp)}(${Math.round(data.main.feels_like)}) ${data.main.humidity}%`;

            const city = document.querySelector("#weather span:last-child")
            city.innerText = data.name;
        })
}

function geoErr() {
    alert("Can't find  you. No Weather for you.")
}

navigator.geolocation.getCurrentPosition(geoOk, geoErr)