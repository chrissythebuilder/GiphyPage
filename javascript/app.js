var topics = ["Sorry", "Thank You", "Miss You", "Get Well Soon", "Enjoy", "I'm Happy", "I'm Hungry"];

$(document).ready(function () {

    for (i=0;i<topics.length;i++) {
        var b = $("<button>");
        b.addClass("themes");
        b.attr("data-emotion", topics[i]);
        var text = b.text(topics[i]);
        $("#theme_buttons").append(text);
    } 

    $(".themes").on("click", function () {
        var emotion = $(this).attr("data-emotion");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + emotion + "&rating=pg&api_key=zipR5lDP7zHvQbilHk9F5jxBOCyLbmMG&limit=10";  

        $.ajax({
            url: queryURL,
            method: "GET"
        }) .then (function (response) {
            $("#giphyImages").html("");
            for (i=0;i<response.data.length;i++) {
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
                };
            };
            })
        })

    });    

    $(document).ready(function() {
        $("#submit").on("click", function() {
            var newButton = $("<button>");
            newButton.addClass("newGif");
            newButton.attr("data-emotion", topics[i])
            var newInput = $("#new").val().trim();
            var newGiphy = newButton.text(newInput);
            $("#theme_buttons").append(newGiphy);
        });   

        $(document).on("click", ".newGif", function () {
            var emotion = $(this).newInput;
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + emotion + "&rating=pg&api_key=zipR5lDP7zHvQbilHk9F5jxBOCyLbmMG&limit=10";  
            $.ajax({
                url: queryURL,
                method: "GET"
            }) .then (function (response) {
                $("#giphyImages").html("");
                for (i=0;i<response.data.length;i++) {
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
                    };
                };
                })
            })

    });

    $(document).on("click", ".giphys", function () {
        var emotion = $(this).attr("data-emotion");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + emotion + "&rating=pg&api_key=zipR5lDP7zHvQbilHk9F5jxBOCyLbmMG&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }) .then (function (response) {
                var img = $("img");
                // var a = $(this).attr("data-state");
                img.attr("data-still", response.data[i].images.fixed_height_still.url);
                img.attr("data-animate", response.data[i].images.fixed_width.url);

                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
        //             var movingImg = img.attr("src", response.data[i].images.fixed_width.url);
                    $("#giphyImages").append(movingImg);
            });
        });





// QUESTIONS:
// ratings are undefined (X)
// images are undefined (X)
// topics - how to loop for each emotion gif to be generated (x)
// appending all images - how to just keep for the specific emotion (x)
// on click for motion 
// added values does not generate images (x)
// setting attributes to each button (x)
// topics.length vs 11 in for loop (x)