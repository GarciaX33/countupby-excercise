$(document).ready(function() {
  $("#blanks-form").submit(function(event) {
    var number = $("input#number").val();
    var numberNew = parseInt(number);
    for (var index = 0; numberNew <= 50; (numberNew) += 5) {
      alert(numberNew);
    };
    event.preventDefault();
  });
});
