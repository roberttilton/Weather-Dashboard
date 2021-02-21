var searchButton = document.getElementById("city-search");
var searchContent = document.getElementById("search-history");
var dateName = document.getElementById("date-name");
var Temperature = document.getElementById("temper");
var Humidity = document.getElementById("humidity");
var windSpeed = document.getElementById("wind-speed");
var uvIndex = document.getElementById("uv-index");
var searchResults= [];

searchButton.addEventListener("click", function () {
    var cityInput = document.getElementById("city-input").value;
    var latitude;
    var longitude;

    searchResults.push(cityInput);
    console.log(searchResults);
    var searchPropagate = document.createElement('p');
    var parsedResults = searchResults[searchResults.length-1]
    searchPropagate.textContent = parsedResults;
    searchContent.appendChild(searchPropagate);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=96b0eafea01d741545d3918386fdb490`, {
    })
        .then(response => response.json())
        .then(function (data) {
            console.log(data);
            latitude = data.coord.lat;
            longitude = data.coord.lon;
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=96b0eafea01d741545d3918386fdb490`, {
            }).then(response => response.json())
                .then(data => console.log(data));

        })
    })