$(document).ready(function() {
    var checkboxes = $("input[type='checkbox']");
    checkboxes.change(function() {
      var checkedCheckboxes = checkboxes.filter(":checked");
      if (checkedCheckboxes.length >= 3) {
        checkboxes.attr("disabled", true);
      }
    });
});