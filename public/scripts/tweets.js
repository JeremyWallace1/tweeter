$(document).ready(function() { // $ define/access jQuery, (document) is the selector to find html elements, .ready() the action to be performed on the elements
  $("article.aTweet").hover(function() { // like .change but registers immediately, not when losing focus.
    // console.log("hovering over the box containing the tweet");
    $(this).toggleClass('boxshadow');
    // $("header").mouseover(function() {
    //   console.log("hovered over the header");
    //   $(this).addClass("reddify");
    // });
    // $("footer").mouseover(function() {
    //   console.log("hovered over the footer");
    //   $(this).addClass("reddify");
    // });
  });

  $("article.aTweet footer div.flag").hover(function() {
    $(this).toggleClass('yellowify');
    console.log('hovered over flag');
  });

  $("article.aTweet footer div.retweet").hover(function() {
    $(this).toggleClass('yellowify');
    console.log('hovered over retweet');
  });

  $("article.aTweet footer div.like").hover(function() {
    $(this).toggleClass('yellowify');
    console.log('hovered over like');
  });

});