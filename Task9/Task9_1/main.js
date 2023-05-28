$(document).ready(function() {
    var headers = $("h2.head");
  
    headers.css("background-color", "green");
  
    var innerElements = headers.find(".inner");
  
    innerElements.css("font-size", "35px");
});