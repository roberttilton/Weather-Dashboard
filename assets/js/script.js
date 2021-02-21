var searchButton = document.getElementById("city-search");
var searchContent = document.getElementById("search-history");
var cityName = document.getElementById("city-name");
var Temperature = document.getElementById("temper");
var Humidity = document.getElementById("humidity");
var windSpeed = document.getElementById("wind-speed");
var uvIndex = document.getElementById("uv-index");
var currentDate = document.getElementById("date");
var searchResults= [];

searchButton.addEventListener("click", function () {
    var cityInput = document.getElementById("city-input").value;
    var latitude;
    var longitude;

    searchResults.push(cityInput);
    var searchPropagate = document.createElement('p');
    var parsedResults = searchResults[searchResults.length-1];
    searchPropagate.textContent = parsedResults;
    searchContent.appendChild(searchPropagate);
    localStorage.setItem("search-history", parsedResults);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=96b0eafea01d741545d3918386fdb490&units=imperial`, {
    })
        .then(response => response.json())
        .then(function (data) {
            console.log(data);
            currentDate.textContent = moment.unix(data.dt).format("MM/DD/YYYY"),
            Temperature.textContent = `${data.main.temp} Fahrenheit`,
            latitude = data.coord.lat;
            longitude = data.coord.lon;
            cityName.textContent = data.name;
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=96b0eafea01d741545d3918386fdb490&units=imperial`, {
            }).then(response => response.json())
                .then(function(data) {
                    console.log(data)
                    Humidity.textContent = data.current.humidity,
                    uvIndex.textContent = data.current.uvi,
                    windSpeed.textContent = `${data.current.wind_speed} MPH`
                    var dateForecast = document.querySelectorAll("date")
                   for (i=0; i < 5; i++) {
                       dateForecast.textContent = moment.unix(data.daily[i].dt).format("MM/DD/YYYY")
                }
    });
})
})
