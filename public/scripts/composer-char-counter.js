// all jQuery methods should be inside a document ready event to prevent any jQuery code from running before the document is finished loading. This allows us to have it in the head section of the coument.
$(document).ready(function() { // $ define/access jQuery, (document) is the slector to find html elements, .ready() the action to be performed on the elements
  console.log('The DOM is ready for manipulation!');
  // register an event handler to the textarea element for the form inside of the .new-tweet section.
  // $("textarea").blur(function() {
  //   console.log('the user has left the form');
  // });
  // $("textarea").keydown(function() {
    // console.log("the user has pressed a key (on it's way down)");
  // });
  // $("textarea").keyup(function() {
    // console.log('the user has released a key');
  // });
  // $("textarea").keypress(function() {
    // console.log('a key is pressed down');
  // });
  // $("textarea").change(function() { // For select menus, the change event occurs when an option is selected. For text fields or text areas, the change event occurs when the field loses focus, after the content has been changed.
    // console.log('the text has been changed after losing focus');
  // });
  $("textarea").on('input', function() { // like .change but registers immediately, not when losing focus.
      console.log(this);
      let textLength = $(this).val().length;
      console.log(textLength);
      let counterValue = $(this).closest("counter").val()
      counterValue = 140 - textLength;
      console.log(counterValue);
      $("output").text(counterValue);
  });
});