$(document).ready(function() { // $ define/access jQuery, (document) is the selector to find html elements, .ready() the action to be performed on the elements
  $(".aTweet").hover(function() { 
    console.log("hovering over the box containing the tweet");
    $(this).toggleClass('boxshadow');

  });

  $(".flag").hover(function() {
    $(this).toggleClass('yellowify');
    console.log('hovered over flag');
  });

  $(".retweet").hover(function() {
    $(this).toggleClass('yellowify');
    console.log('hovered over retweet');
  });

  $(".like").hover(function() {
    $(this).toggleClass('yellowify');
    console.log('hovered over like');
  });

});