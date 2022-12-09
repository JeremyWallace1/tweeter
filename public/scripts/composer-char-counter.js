$(() => {
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

  // When the user clicks on the button, scroll to the top of the document
  $("#toTopButton").on("click", () => {
    $(window).scrollTop(0);
    $("#toTopButton").css("display", "none");
  });

  $(window).on('scroll', function() {
    let scroll = $(window).scrollTop();
    if (scroll > 0) {
      $("#toTopButton").css("display", "block");
    } else {
      $("#toTopButton").css("display", "none");
    }
  });
});

