//python -m SimpleHTTPServer 8008

// Employees List
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', '../data/employees.json');
xhr.send();


// Meeting rooms
var xhrRooms = new XMLHttpRequest();
xhrRooms.onreadystatechange = function () {
  if(xhrRooms.readyState === XMLHttpRequest.DONE && xhrRooms.status === 200) {
    var rooms = JSON.parse(xhrRooms.responseText);
    var statusHTML = '<ul class="rooms">';
    for (var i=0; i<rooms.length; i += 1) {
      if (rooms[i].available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};
xhrRooms.open('GET', '../data/rooms.json');
xhrRooms.send();


/*================************==========================*/

/*
JQuery solution

$(document).ready(function () {
    $.getJSON('../data/employees.json', function (data) {
        var statusHTML = '<ul class="bulleted">';
        $.each(data,function (index, employee) {
            if (employee.inoffice === true) {
                statusHTML +='<li class="in">';
            } else {
                statusHTML +='<li class="out">';
            }
            statusHTML += employee.name + '</li>';
        });
        statusHTML += '</ul>';
        $('#employeeList').html(statusHTML)
    }); // end getJSON

    $.getJSON('../data/rooms.json', function (data) {
        var statusHTML = '<ul class="rooms">';
        $.each(data,function (index, room) {
            if (room.available === true) {
                statusHTML +='<li class="empty">';
            } else {
                statusHTML +='<li class="full">';
            }
            statusHTML += room.room + '</li>';
        });
        statusHTML += '</ul>';
        $('#roomList').html(statusHTML)
    }); // end getJSON
}); // end ready
*/