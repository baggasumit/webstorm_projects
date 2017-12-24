/**
 * Created by sumit_bagga on 1/24/17.
 */

$(document).ready(function() {
    requestNewQuote();
    $("#newQuote").on("click", requestNewQuote);
});


function setHeader(xhr) {
    xhr.setRequestHeader("X-Mashape-Key", "MDjvHvEdkumshOgAGJWllhtO6IF7p1podi1jsnbmzmE7jLVZYE");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Accept", "application/json");
}

function requestNewQuote() {
    $.ajax({
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies",
        type: "POST",
        dataType: "json",
        success: displayNewQuote,
        error: function() { console.log("Ajax error!"); },
        beforeSend: setHeader
    });
}

function displayNewQuote(response) {
    $(".quote").text("\""+ response.quote + "\"");
    $(".author span").text(response.author);
    setTweetIntent(response.quote, response.author);
}

function setTweetIntent(quote, author) {
    var href = "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
        "\"" + quote + "\"" +
        " - " + author;

    $(".tweet-link").attr("href", href);
}