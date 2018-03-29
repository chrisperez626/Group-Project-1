// var eventLocation = $("").val().trim(); // NEEDS HTML

function searchEvent() {
    $.ajax({
        url: "http://api.eventful.com/rest/events/search?app_key=q6HzzBnhK5VTx7kQ&location=" + eventLocation + "&within=10",
        method: "GET"
    
    }).then(function(response){
        console.log(response)

        // var newDiv = $("<div>");
        // newDiv.text(response);
        // $(".images").append(newDiv);
    })
}

searchEvent();

// $("#").on("click", function() { // NEEDS HTML

// })