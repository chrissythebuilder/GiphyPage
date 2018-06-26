$(document).ready(function () {

    var topics = ["happy", "mad", "laughing", "sad", "scared", "excited"];

    // var themeButtons = $("<button>" + topics + "</button>");
    // themeButtons.addClass = "themes"
    // $("#theme_buttons").html(themeButtons);
    // themeButtons.append();

    for (i=0;i<topics.length;i++) {
        var b = $("<button>");
        b.addClass("themes");
        var text = b.text(topics[i]);
        $("#theme_buttons").append(text);
    }

    var APIKEY = "zipR5lDP7zHvQbilHk9F5jxBOCyLbmMG";

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&rating=g&api_key=" + APIKEY + "&limit=10";  

    $(".themes").on("click", function () {
        $.ajax ({
            url: queryURL,
            method: "GET"
        }) .then (function (response) {
            console.log(response.data);
            for (i=0;i<11;i++) {
                var img = $("<img>");

            }
            

        })

    });

    $("#submit").on("click", function() {
        var newButton = $("<button>");
        newButton.addClass("themes");
        var newInput = $("#new").val().trim();
        var newGiphy = newButton.text(newInput);
        $("#theme_buttons").append(newGiphy);
    });


       




})