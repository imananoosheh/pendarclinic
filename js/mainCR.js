function xYZ() {
    var replacement = '';
    replacement += '<div>| Designed & Developed by API Team © 2018 | All rights reserved. |</div>';
    return replacement;
}
$('#copyright').empty().html(xYZ());

//Go to the Top Button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
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
  