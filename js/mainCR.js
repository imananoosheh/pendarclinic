function xYZ() {
  var replacement = '';
  replacement += '<div id="copyright" class="my-2">' +
    '<div class="navbar-collapse collapse" id="navbarsExample01">' +
    '<div class="navbar-nav mx-auto my-auto">' +
    '<div class="row">' +
    '<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 my-3">' +
    '<a class="border border-org px-1 py-1 mx-1" href="http://ashkantaravati.ir/">Ashkan Taravati</a>' +
    '</div>' +
    '<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 my-3">' +
    '<a class="border border-org px-1 py-1 mx-1" href="http://parisaqomi.ir/">Parisa Qomi</a>' +
    '</div>' +
    '<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 my-3">' +
    '<a class="border border-org px-1 py-1 mx-1" href="https://www.linkedin.com/in/imananoosheh">Iman Anooshehpour</a>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<span>| Designed & Developed by  </span>' +
    '<button class="border border-org navbar-toggler collapsed" onclick="xYZscroll()" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation" data-placement="top">' +
    'Team API' +
    '</button>' +
    '<span>  © 2018 | All rights reserved. |</span>' +
    '</div>';
  return replacement;
}
$('#copyright').replaceWith(xYZ());

function xYZscroll() {
  $("html, body").animate({ scrollTop: 100000 }, 600);
}

//Go to the Top Button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("gototopbtn").style.display = "block";
  } else {
    document.getElementById("gototopbtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $("html, body").animate({ scrollTop: 0 }, 600);
  //document.body.scrollTop = 0;
  //document.documentElement.scrollTop = 0;
}

function morebutton() {
  alert('called');
  if (document.getElementById("aboutextra").style.display == "none") {
    document.getElementById("aboutextra").style.display = "block";
    document.getElementById("collapsable").innerHTML = "بیشتر...";
    alert('expand');
  } else /*if (document.getElementById("aboutextra").style.display = "block")*/ {
    document.getElementById("aboutextra").style.display = "none";
    document.getElementById("collapsable").innerHTML = "کمتر...";
    alert('expand');
  }
}

function moreButton2() {
  $("#aboutextra").toggle(function () {
    $("#aboutswitcher span").text("کمتر...");
    debugger;
    $("#aboutextra").addClass("d-block");
  }, function () {
    $("#aboutswitcher span").text("بیشتر...");
    $("#aboutextra").removeClass("d-block");
  });
}

function moreButton3() {
  $("#aboutextra").toggle(function () {
    document.getElementById("aboutextra").style.display = "block";
    document.getElementById("aboutswitchercontent").innerHTML = "کمتر...";
  }, function () {
    document.getElementById("aboutextra").style.display = "none";
    document.getElementById("aboutswitchercontent").innerHTML = "بیشتر...";
  });
}