/**
 * Created by sumit_bagga on 5/4/17.
 */

var EVT = new EventEmitter2();

$(document).ready(function() {
  // Header.init();
  // Carousel.init();
  // Details.init();
  EVT.emit("init");
});