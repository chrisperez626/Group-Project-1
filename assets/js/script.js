function titleCase(str) {
    return str.toLowerCase().split(' ').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ');
}

$("#citySearch").submit(function() {
    event.preventDefault();
    var city = $("#pac-input").val().trim();
    
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