$(() => {
  console.log('The DOM is ready for manipulation!');
  $("textarea").on('input', function() {
    let textLength = $(this).val().length;
    let counterValue = $(this).closest("output").val();
    counterValue = 140 - textLength;
    $("output").text(counterValue);
    if (counterValue < 0) {
      $("output").addClass("reddify");
    } else {
      $("output").removeClass("reddify");
    }
  });
});