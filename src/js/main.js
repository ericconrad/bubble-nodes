var log = require("./lib/log"),
    $ = require("./vendor/jquery");


$(function () {
  var bubbleCoordinates = [
    {
      origCoords: {x:"50%", y:"20%"},
      newCoords: {x:"", y:""},
      homies: [1, 2] // index values
    },
    {
      origCoords: {x:"30%", y:"60%"},
      newCoords: {x:"", y:""},
      homies: [2]
    },
    {
      origCoords: {x:"70%", y:"50%"},
      newCoords: {x:"", y:""},
      homies: []
    }
  ];

  // var floatyBubble = function (floatElement, index, speed) {
  //   var origPosition = bubbleCoordinates[index].origCoords;
  //
  //   setInterval(function () {
  //     var newX = (parseFloat(origPosition.x) + ((Math.random() * 10) -5)) + "%";
  //
  //     $(floatElement).animate(
  //       { 'left': newX },
  //       { duration: speed }
  //     );
  //   }, (Math.random() * 2000) + 1000);
  //
  //   setInterval(function () {
  //     var newY = (parseFloat(origPosition.y) + ((Math.random() * 10) -5)) + "%";
  //
      // $(floatElement).animate(
      //   { 'top': newY },
      //   { duration: speed }
      // );
  //   }, (Math.random() * 1500) + 1500);
  // };



  function position () {
    $(".bubble").each(function (i, element) {
      var position = bubbleCoordinates[i].origCoords;
      $(element).css({top: position.y, left: position.x});
    });
  }

  position();

  // function hangOut () {
  //   $.each(bubbleCoordinates, function (i, position) {
  //     $.each(position.homies, function (j, homie) {
  //       $("<line>")
  //         .attr("x1", position.origCoords.x)
  //         .attr("y1", position.origCoords.y)
  //         .attr("x2", bubbleCoordinates[homie].origCoords.x)
  //         .attr("y2", bubbleCoordinates[homie].origCoords.y)
  //         .attr("stroke", "black")
  //         .attr("stroke-width", "2")
  //         .appendTo("svg");
  //     });
  //   });
  // }

  function hangOut () {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var svgNS = svg.namespaceURI;
    var wrapper = $(".bubble-wrapper");

    $.each(bubbleCoordinates, function (i, banana) {
      $.each(banana.homies, function (j, homie) {

        var line = document.createElementNS(svgNS,'line');
        line.setAttribute("x1", banana.origCoords.x);
        line.setAttribute("y1", banana.origCoords.y);
        line.setAttribute("x2", bubbleCoordinates[homie].origCoords.x);
        line.setAttribute("y2", bubbleCoordinates[homie].origCoords.y);
        line.setAttribute("stroke", "black");
        line.setAttribute("stroke-width", "2");
        svg.appendChild(line);
        document.getElementById('bubble-wrapper').appendChild(svg);
      });
    });
  }

  hangOut();

  var superFloat = function () {

    // setInterval(function () {

      $.each(bubbleCoordinates, function (i, location) {
        bubbleCoordinates[i].newCoords.x = (parseFloat(bubbleCoordinates[i].origCoords.x) + ((Math.random() * 10) -5)) + "%";
        bubbleCoordinates[i].newCoords.y = (parseFloat(bubbleCoordinates[i].origCoords.y) + ((Math.random() * 10) -5)) + "%";

        function animateBubbles (bubble, speed) {
          $(bubble).animate(
            {
              "top": bubbleCoordinates[i].newCoords.y,
              "left": bubbleCoordinates[i].newCoords.x
            },{
              duration: speed
            }
          );
        }

        animateBubbles($(".bubble")[i], 5000);

        $.each(location.homies, function (k, homie) {
          // line.setAttribute("x1", location.origCoords.x);
          // line.setAttribute("y1", location.origCoords.y);
          // line.setAttribute("x2", bubbleCoordinates[homie].origCoords.x);
          // line.setAttribute("y2", bubbleCoordinates[homie].origCoords.y);
          // line.setAttribute("stroke", "black");
          // line.setAttribute("stroke-width", "2");
          // svg.appendChild(line);
          // document.getElementById('bubble-wrapper').appendChild(svg);

          function animateLines (line, speed) {
            console.log($(line));
            // console.log(homie);
            // console.log(line[k]);
            $(line).animate(
              {
                "x1": bubbleCoordinates[k].newCoords.x,
                "y1": bubbleCoordinates[k].newCoords.y,
                "x2": bubbleCoordinates[homie].newCoords.x,
                "y2": bubbleCoordinates[homie].newCoords.y
              },{
                duration: speed
              }
            );
          }

          animateLines($("line"), 5000);
        });

      });

    // }, 3000);

  };

  superFloat();

});
