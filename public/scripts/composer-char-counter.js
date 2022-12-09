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

// Get the button:
let mybutton = document.getElementById("toTopButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}