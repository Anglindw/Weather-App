let weather = {
    apiKey: 
    fetchWeather: function (city) {
        fetch(
            "https://api.openweather.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
        .then((response) => {
            if (!response.ok) {
                alert("No weather found.");
                throw new Error("No weather found.")

            }
            return response.json()
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector('.icon').src =
            "https://openweather.org/img/wn/" + icon + ".png";
        document.querySelector(".desciption").innerText = temp + "*F";
        document.querySelector(".temp").innerText =
            "Humidity: " +  humidity + "%";
        document.querySelector(".wind").innerText =
            "Wind speed: " + speed + "km/h";
        hgfd
    }
}
