function titleCase(str) {
    return str.toLowerCase().split(' ').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ');
}

$("#citySearch").submit(function() {
    event.preventDefault();
    var city = $("#pac-input").val().trim();
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=166a433c57516f51dfab1f7edaed8413",
        method: "GET"
    }).then(function(response) {
        console.log(response);
        $("#cityDisplay").text(titleCase(city));
        $("#icon").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
        $("#tempDisplay").html(response.main.temp);
        $("#condDisplay").html(response.weather[0].main);
        $("#windDisplay").html(response.wind.speed);
    });
    $.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "&key=AIzaSyDIufmm5UiONljRO32RW3ox_K01E0zgKPE",
        method: "GET"
    }).done(function(response) {
        console.log(response);
        latitude = response.results[0].geometry.location.lat;
        longitude = response.results[0].geometry.location.lng;
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: latitude, lng: longitude},
            zoom: 10,
            mapTypeId: 'roadmap'
        });
        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);
    });
});

$("button").on("click", function() {
    var city = $(this).text();
    var latitude, longitude;
    $.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "&key=AIzaSyDIufmm5UiONljRO32RW3ox_K01E0zgKPE",
        method: "GET"
    }).done(function(response) {
        console.log(response);
        $("#cityDisplay").text(titleCase(city));
        latitude = response.results[0].geometry.location.lat;
        longitude = response.results[0].geometry.location.lng;
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: latitude, lng: longitude},
            zoom: 10,
            mapTypeId: 'roadmap'
        });
        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);
    });
});