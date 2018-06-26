$(document).ready(function () {

    var topics = ["happy", "mad", "laughing", "sad", "scared", "excited", "scared", "shocked", "crying", "annoyed"];

    for (i=0;i<topics.length;i++) {
        var b = $("<button>");
        b.addClass("themes");
        b.attr("data-emotion");
        var text = b.text(topics[i]);
        $("#theme_buttons").append(text);
    }

    $("#submit").on("click", function() {
        var newButton = $("<button>");
        newButton.addClass("themes");
        newButton.attr("data-emotion")
        var newInput = $("#new").val().trim();
        var newGiphy = newButton.text(newInput);
        $("#theme_buttons").append(newGiphy);
    });



    // function movingGiphy()
    
    

    $("button").on("click", function () {
        // var emotions = $(this).attr("data-emotion");


        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics[i] + "&api_key=zipR5lDP7zHvQbilHk9F5jxBOCyLbmMG&limit=10";  

        $.ajax({
            url: queryURL,
            method: "GET"
        }) .then (function (response) {
            for (i=0;i<topics.length;i++) {
                if (response.data[i].rating !== "r" && response.data[i].rating !== "pg-13") {
                    var gifSection = $("<div class='images'>");
                    var p = $("<p>").html("Rating: " + "<strong>" + response.data[i].rating + "</strong>");
                    var img = $("<img>");
                    img.addClass("giphys");
                    // $(".giphys").attr("data-still", '');
                    img.attr("src", response.data[i].images.fixed_height_still.url);
                    gifSection.append(p);
                    gifSection.append(img);
                    $("#giphyImages").prepend(gifSection);
                }
            };
            $(".giphys").on("click", function () {
                var img = $("<img>");
                img.attr("src", response.data[i].images.original.url);
            })
        })

    });    





})


// QUESTIONS:
// ratings are undefined (X)
// images are undefined (X)
// topics - how to loop for each emotion gif to be generated
// on click for motion
// added values in the array does not generate images
// setting attributes to each button
// topics.length vs 11 in for loop