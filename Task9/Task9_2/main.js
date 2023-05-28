$(document).ready(function() {
    
    $("a[href^='https://']").each(function() {

      $(this).attr("target", "_blank");
    });
  });