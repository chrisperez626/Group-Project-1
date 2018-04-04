// function for calling to image api
function ajax(){
    // original variables
    var city = $("#pac-input").val();

    var queryUrl = "https://pixabay.com/api/?key=8524906-87de4c65edf77625335e21bd8&q=" + city + "&image_type=photo"

    $.ajax({
        url: queryUrl,
        method: "GET"

    }).then(function(response){

        //shows api response object in console
        console.log(response)
        
        var pictures = response.hits;
        
        //creates new image
        var newDiv = $("<img>")
        
        //assigns attributes to images
        newDiv.attr("src", pictures[3].webformatURL)
        newDiv.attr("id", "big-picture");
        
        //display image in div
        $("#big-picture-display").html(newDiv);
        
        //for loop to display side pictures
        for(var i = 0; i < 4;i++){
            var morePictures = $("<img>")
            
            morePictures.attr("src", pictures[i].previewURL);
            morePictures.attr("height", "150");
            morePictures.attr("width", "150");
            morePictures.attr("normalSize", pictures[i].webformatURL);
            morePictures.addClass("side-pictures");
            
            $("#side-pictures").append(morePictures);
        }

    })
};

//on submit of the form runs fucntion 
$("#citySearch").submit(function(){
    event.preventDefault();
    $("#side-pictures").empty();
    $("#big-picture-display").empty();
    ajax();

    historyButton();

});

//creates button
function historyButton() {

    var historyBtn = $("<button>"); 

    historyBtn.text($("#pac-input").val());

    historyBtn.attr("class", "historybtn");

    historyBtn.attr("data", $("#pac-input").val());
    
    if ($("#pac-input").val() === "") {

        return;

    }

    $(".history").append(historyBtn);

    $("#pac-input").val("");

};

//displays buttons on page
$(document.body).on("click", ".historybtn", function(event) {

    event.preventDefault();

    $("#pac-input").val($(this).attr("data"));

    $("#side-pictures").empty();
    $("#big-picture-display").empty();

    ajax();

    var city = $("#pac-input").val().trim();
            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=166a433c57516f51dfab1f7edaed8413",
                method: "GET"
            }).then(function (response) {
                console.log(response);
                $("#cityDisplay").text(titleCase(city));
                $("#icon").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
                $("#tempDisplay").html(response.main.temp + "°F");
                $("#condDisplay").html(response.weather[0].main);
                $("#windDisplay").html(response.wind.speed + " mph");
                var unixSunset = response.sys.sunset
                var newSunset= (moment(unixSunset * 1000).format("ddd, MMMM Do, h:mm:ss a"));
                $("#sunsetDisplay").html(newSunset);
            });
});

// sets so when specific picture is clicked on 
//it then takes the place of the main picture
$("body").on("click", ".side-pictures", function(){
    
    $("#big-picture").attr("src", $(this).attr("normalSize"));
});