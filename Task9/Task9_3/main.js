$(document).ready(function() {
    var headers = $("h3");
  
    headers.each(function() {
      var nextDiv = $(this).next("div");
      $(this).before(nextDiv);
    });
  });