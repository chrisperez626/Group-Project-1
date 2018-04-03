function ajax(){
    var city = $("#pac-input").val();

    var queryUrl = "https://pixabay.com/api/?key=8524906-87de4c65edf77625335e21bd8&q=" + city + "&image_type=photo"

    $.ajax({
        url: queryUrl,
        method: "GET"

    }).then(function(response){
        console.log(response)
        var pictures = response.hits;
        var newDiv = $("<img>")
        newDiv.attr("src", pictures[3].webformatURL)
        newDiv.attr("id", "big-picture");
        $("#big-picture-display").html(newDiv);
        // for(var i = 0; i < 4;i++){
        //     // console.log(pictures[i].webformatURL);
        //     var morePictures = $("<img>")
        //     morePictures.attr("src", pictures[i].previewURL);
        //     morePictures.attr("height", "150");
        //     morePictures.attr("width", "150");
        //     morePictures.attr("normalSize", pictures[i].webformatURL);
        //     morePictures.addClass("side-pictures");
        //     $("#side-pictures").append(morePictures);
        // }

    })
};

$("#citySearch").submit(function(){
    event.preventDefault();
    $("#side-pictures").empty();
    ajax();

    historyButton();

});

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

$(document.body).on("click", ".historybtn", function(event) {

    event.preventDefault();

    $("#pac-input").val($(this).attr("data"));

    ajax();

    initAutocomplete();

    weather();
});

$("body").on("click", ".side-pictures", function(){
    
    $("#big-picture").attr("src", $(this).attr("normalSize"));
});