/**
 * Created by sumit_bagga on 12/18/17.
 */

'use strict';

let todo = {
  init: function () {

    let $itemsList = $('#items ul');

    $itemsList.on('click', 'span', function () {
      $(this).toggleClass('strike');
    });

    // $itemsList.on('mouseenter', 'li', function () {
    //   $(this).children('i').show();
    // });
    //
    // $itemsList.on('mouseleave', 'li', function () {
    //   $(this).children('i').hide();
    // });

    $itemsList.on('click', 'i', function () {
      $(this).parent().remove();
    });

    $('input').on('keypress', function (event) {
      if ( event.which === 13 && $(this).val()) {
        event.preventDefault();
        let todoInput = $(this);
        $itemsList.append(todo.createTodoItem(todoInput.val()));
        todoInput.val('');
      }
    });

    $('#toggle-input').on('click', function () {
      $('input').toggle();
    });
  },

  createTodoItem: function (text) {
    return `<li><i class="fa fa-trash" aria-hidden="true"></i> <span>${text}</span></li>`;
  }
};



document.addEventListener("DOMContentLoaded", function() {
  todo.init();
});