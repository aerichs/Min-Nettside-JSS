$(function () {
  $("#stang").on("click", function () {
    window.open("./img/speedmaster.jpg");
  });
});

$(function () {
  $("#snelle").on("click", function () {
    window.open("./img/snelle.jpg");
  });
});

$(function () {
  $("#sene").on("click", function () {
    window.open("./img/fireline.jpg");
  });
});

$(function () {
  $("#salt").on("click", function () {
    window.open("./img/saltvann.jpg");
  });
});

$(function () {
  $("#fersk").on("click", function () {
    window.open("./img/ferskvann.jpg");
  });
});

/*$(function () {
  $("#tableBody tr")
    .on("mouseenter", function () {
      $(this).find("td").css("font-size", "20px");
    })
    .on("mouseleave", function () {
      $(this).find("td").css("font-size", "");
    });
});*/

$(function () {
  $("#tableBody tr")
    .on("mouseenter", function () {
      $(this).find("td").css("color", "blue");
    })
    .on("mouseleave", function () {
      $(this).find("td").css("color", "black");
    });
});

$(function () {
  $("#tableBody tr")
    .on("mouseenter", function () {
      $(this).find("td").css("font-weight", "bold");
    })
    .on("mouseleave", function () {
      $(this).find("td").css("font-weight", "");
    });
});

var isLargeText = false;

$(".checkbox").on("click", function () {
  var targetSize = isLargeText ? "100%" : "130%";

  $("div p, td").animate({ fontSize: targetSize }, 1000);
  isLargeText = !isLargeText;
});
