/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => { // makes sure whole page is loaded first
  const refreshTweets = (data) => {
    $('.old-tweets').empty();
    renderTweets(data);
  };
  
  const renderTweets = function(tweets) {
    for (let twit of tweets) {
      $tweet = createTweetElement(twit);
      $('.old-tweets').append($tweet);
    }
  };

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweet) {
    const postDate = timeago.format(tweet.created_at);
    const safeHTML = `<div class="tweetContents">${escape(tweet.content.text)}</div>`;
    const $tweet = `<article class="aTweet">
        <header>
          <div class="tweeter">
            <div class="tweeterImageName">
              <div class="userImage">
                <img src=${tweet.user.avatars}>
              </div>
              <div class="name">
                ${tweet.user.name}
              </div>
            </div>
            <div class="tweeterHandle">
              ${tweet.user.handle}
            </div>
          </div>
            ${safeHTML}
        </header>
        <footer>
          <div class="date">
            ${postDate}
          </div>
          <div class="actions">
            <div class="flag">
              <i class="fa-solid fa-flag"></i>
            </div>
            <div class="retweet">
              <i class="fa-solid fa-retweet"></i>
            </div>
            <div class="like">
              <i class="fa-solid fa-heart"></i>
            </div>
          </div>
        </footer>
      </article>
    `;
    return $tweet;
  };

  const loadTweets = function(callback) {
    //responsible for fetching tweets from the http://localhost:8080/tweets page
    $.get('/tweets', function(response) {
      refreshTweets(response);
      callback();
    });
  };

  const clearForm = function() {
    $("textarea").val("");
    $("output").val("140");
    $(".emptyError").css("display", "none")
    $(".tooLongError").css("display", "none")
  }; 

  $("form").submit(function( event ) {
    event.preventDefault();
    const serializedData = $("form").serialize()
    const tweetContent = $('#tweet-text').val().trim();
    if (!tweetContent) {
      $(".emptyError").css("display", "block")
    } else if (tweetContent.length > 140) {
      $(".tooLongError").css("display", "block")
    } else {
      $.post('/tweets', serializedData);
      loadTweets(clearForm);
    }
  });

  loadTweets();
});