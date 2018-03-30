  var APIKey = "166a433c57516f51dfab1f7edaed8413";
  var city = "hillsborough"
  // var city = $("#cityinput").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      "q="+city +"&units=imperial&appid=" + APIKey;

    
    $.ajax({
      
      url: queryURL,
      method: "GET"
    })
      
      .then(function(response) {

       
        console.log(queryURL);

       
        console.log(response);

        
        
        $("#weather-wind").html("Wind Speed: " + response.wind.speed);
        $("#weather-humidity").html("Humidity: " + response.main.humidity);
        $("#weather-temp").html("Temperature (F) " + response.main.temp);
        $("#weather-description").html("Description: " + response.weather[0].description);

        
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
        console.log("type" + response.weather[0].description);

       
      });

    //   $("#search-city").on("click", function(event){
    //     event.preventDefault();
    //     ajax();
    // });

   
