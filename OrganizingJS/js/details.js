var Details = (function() {

  function loadPerson(ID) {
    var url = `details/${ID}.html`;
    $.ajax(url,{ dataType: "text" })
      .then(function(contents){
        $content.html(contents);
      });
  }

  function selectPerson(evt) {
    evt.preventDefault();

    var ID = $(evt.target).attr("data-person");

    EVT.emit("person-selected", ID);
  }
	//var $items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
  function init() {
    $content = $("[rel=js-details]");
    $content.on("click", "[rel=js-select-person]", selectPerson);

    EVT.on("person-selected", loadPerson);
  }

  EVT.on("init", init);

  var $content;
	//$items.on( "click", personClicked );

	return {
	  init: init,
	  loadPerson: loadPerson
  }

	// on click of a carousel item, do an Ajax request for
	// the "details/2.html" (or whatever) file for the person
	// clicked, and load those contents into the `$content` div.

	// hint: you will probably want to use "event propagation"
	// (aka "event delegation"), by attaching a single event
	// handler the `$content` element rather than individual
	// event handlers to each item in the carousel.

})();