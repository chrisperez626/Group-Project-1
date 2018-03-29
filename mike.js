

function ajax() {
    $.ajax({
        url: "https://pixabay.com/api/?key=8524906-87de4c65edf77625335e21bd8&q=new+york&image_type=photo",
        method: "GET"
    
    }).then(function(response){
        console.log(response)
        var newDiv = $("<img>")
        newDiv.attr("src", response.hits[0].userImageURL)
        $(".images").append(newDiv);
    })
    }
    
    // function ajax() {
    //     $.ajax({
    //         url: "https://pixabay.com/api/?key=8524906-87de4c65edf77625335e21bd8&q=new+york&image_type=photo",
    //         method: "GET"
        
    //     }).then(function(response){
    //         console.log(response)
    //         var newDiv = $("<img>")
    //         newDiv.attr("src", response.hits[0].userImageURL)
    //         $(".images").append(newDiv);
    //     })
    //     }
    
    ajax()