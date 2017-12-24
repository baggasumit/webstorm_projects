//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately


//When clicking on control list items
  //Deselect sibling elements
  //Select clicked element

var $controlColor = $(".controls li");
$(".controls").on("click", "li", function() {
  $(this).siblings().removeClass("selected");
  $(this).addClass("selected");
  console.log($(this));
});

//When new color is pressed
  //Show color select or hide the color select
var $revealColorButton = $("#revealColorSelect");
$revealColorButton.click(function() {
  $("#colorSelect").toggle();
  //$("#colorSelect").css("display", "block");
});

//When color sliders change
  //update the new color span
var $slider = $(".sliders input");
var makeColor = "#fff";
$slider.change(function() {
  var red = $(".sliders #red").val();
  var green = $(".sliders #green").val();
  var blue = $(".sliders #blue").val();
  makeColor = "rgb("+red+","+green+","+blue+")";
  $("#newColor").css("background-color",makeColor);
  
});


//When add color is pressed
  //Append the color to the controls ul
  //Select the new color

$("#addNewColor").click(function() {
  
  $(".controls li").removeClass("selected");
  var $newColor = $("<li></li>");
  $newColor.addClass("selected");
  $newColor.css("background", makeColor);
  $(".controls ul").append($newColor);
  $("#colorSelect").hide();
});



//On mouse events on the canvas
  //Draw lines
