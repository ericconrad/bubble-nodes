var log = require("./lib/log"),
    $ = require("./vendor/jquery");


$(function () {
  var bubbleCoordinates = [
    {
      coords: {x:"50%", y:"20%"},
      homies: [1, 2] // index values
    },
    {
      coords: {x:"30%", y:"60%"},
      homies: [2]
    },
    {
      coords: {x:"70%", y:"50%"},
      homies: []
    }
  ];

  var floatyBubble = function (floatElement, index, speed) {
    var origPosition = bubbleCoordinates[index].coords;

    setInterval(function () {
      $(floatElement).animate(
        { 'left': (parseFloat(origPosition.x) + ((Math.random() * 10) -5)) + "%" },
        { duration: speed }
      );
    }, (Math.random() * 2000) + 2000);

    setInterval(function () {
      $(floatElement).animate(
        { 'top': (parseFloat(origPosition.y) + ((Math.random() * 10) -5)) + "%", },
        { duration: speed }
      );
    }, (Math.random() * 1000) + 1000);
  };


  function position () {
    $(".bubble").each(function (i, element) {
      var position = bubbleCoordinates[i].coords;
      $(element).css({top: position.y, left: position.x});
      floatyBubble(element, i, 0);
    });
  }

  position();

  function hangOut () {
    $.each(bubbleCoordinates, function (i, position) {
      $.each(position.homies, function (j, homie) {
        $("<line>")
          .attr("x1", position.coords.x)
          .attr("y1", position.coords.y)
          .attr("x2", bubbleCoordinates[homie].coords.x)
          .attr("y2", bubbleCoordinates[homie].coords.y)
          .attr("stroke", "black")
          .attr("stroke-width", "2")
          .appendTo("svg");
      });
    });
  }

  hangOut();

});
