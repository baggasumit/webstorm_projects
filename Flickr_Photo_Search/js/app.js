$(document).ready(function() {

 $('form').submit(function (evt) {
   evt.preventDefault();
     // highlight the button
     // not AJAX, just cool looking
     // $("button").removeClass("selected");
     // $(this).addClass("selected");

     // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var searchTerm = $("#search").val();
    $("#submit").prop("disabled", true);
    $("#submit").val('Searching...');
    var flickrOptions = {
      tags: searchTerm,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '';
      console.log(data.items.length);
      if (data.items.length === 0) {
        $("#msg").text("No photos found with tag: "+ searchTerm);
      }
      $.each(data.items, function(i,photo) {
        photoHTML += '<li>';
        photoHTML += '<a href="' + photo.link + '">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      //photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
    $("#submit").prop("disabled", false);
    $("#submit").val('Search');
  }); // end click

}); // end ready