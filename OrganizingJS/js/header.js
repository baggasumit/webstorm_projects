var Header = (function() {

    function headerLinkClicks(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      evt.stopImmediatePropagation();

      var url = $(evt.target).attr("href");
      console.log(evt.target, url);
      $.ajax(url, {dataType: "text"})
        .then(function (contents) {
          $modal.html(contents).show();
        })
        .then(function() {
          $("[rel=js-close-modal]").on("click", hideModal);
        });
    }

    function hideModal() {
      $modal.hide();
    }

    function init() {
      $modal = $("[rel=js-modal]");

      $("[rel=js-header]").on("click", "> [rel^=js]", headerLinkClicks);
    }

    EVT.on("init", init);

    var $modal;

    var publicAPI = {
      init: init
    }

    return publicAPI;
})();

//$(document).ready(Header.init);
