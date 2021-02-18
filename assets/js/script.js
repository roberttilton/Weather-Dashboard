var searchButton = document.getElementById("city-search");

searchButton.addEventListener("click", function () {
    var cityInput = document.getElementById("city-input").value;
    var latitude;
    var longitude;

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
