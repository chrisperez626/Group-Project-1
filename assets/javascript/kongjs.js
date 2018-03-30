$(document.body).on("click", "#eventbtn", function(event){

    event.preventDefault();

    var cityZip = $("#zipinput").val().trim();
    
    $.ajax({
        url: "https://api.meetup.com/2/open_events.json?zip=" + cityZip + "&key=c5ae5417717fa335b7d8c774c32",
        // url: "https://api.meetup.com/2/open_events.json?city=miami&country=us&key=c5ae5417717fa335b7d8c774c32",
        method: "GET"
    }).then(function(response){
        console.log(response)
        
        i = 0;

        while (i < 5) {

        var eventDiv = $("<div>");

        var imageDiv = $("<img>");
        imageDiv.attr("src", response.results[i].photo_url);
        imageDiv.attr("alt", "Image not uploaded by this group");

        var titleDiv = $("<div>");
        titleDiv.text("Title: " + response.results[i].group.name);

        if (response.results[i].venue === undefined) {
        
            var urlLink = $("<a>");
            urlLink.attr("href", response.results[i].event_url);
            urlLink.text("Learn more about this event");
    
            $(eventDiv).append(imageDiv, titleDiv, addressDiv, urlLink);
            $("#event-display").append(eventDiv);
            
            i++;

            return;

        }

        if (response.results[i].venue.zip === undefined) {

            response.results[i].venue.zip = "";

        }

        var address = response.results[i].venue.name + " " + response.results[i].venue.address_1 + " " + response.results[i].venue.city + " " + response.results[i].venue.state + " " + response.results[i].venue.zip
        var addressDiv = $("<div>");
        addressDiv.text("Address: " + address);

        var urlLink = $("<a>");
        urlLink.attr("href", response.results[i].event_url);
        urlLink.text("Learn more about this event");

        $(eventDiv).append(imageDiv, titleDiv, addressDiv, urlLink);
        $("#event-display").append(eventDiv);
        
        i++;

        };
        
    });
});
