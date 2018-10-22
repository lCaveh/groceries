$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var items = ["item1","item2","item3","item4","item5","item6"];
    var groceries = []
    items.forEach(function (item) {
      var userInput = $("input#"+item).val();
      groceries.push (userInput.toUpperCase());
    });
    var sortedGroceries = groceries.sort()
    $("#formOne").hide();
    $("#story").show();
    sortedGroceries.forEach (function (grocery){
        $("#story").append ("<p>"+grocery+"</p>");
    });
    event.preventDefault();
  });
});
