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

  
  const createTweetElement = function(tweet) {
    const postDate = timeago.format(tweet.created_at);
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
          <div class="tweetContents">
            ${tweet.content.text}
          </div>
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

  const loadTweets = function() {
    //responsible for fetching tweets from the http://localhost:8080/tweets page
    $.get('/tweets', function(response) {
      console.log(response);
      refreshTweets(response);
    });
  };


  $("form").submit(function( event ) {
    event.preventDefault();
    const serializedData = $("form").serialize()
    // The user should be given an error that their tweet content is too long or that it is not present (ideally separate messages for each scenario)
    const tweetContent = $('#tweet-text').val().trim();
    // The form should not be cleared
    // The form should not submit
    console.log(tweetContent);
    if (!tweetContent) {
      alert("empty string!");
    } else if (tweetContent.length > 140) {
      alert("too much!");
    } else {
      $.post('/tweets', serializedData);
    }
    loadTweets();
    //$('#tweet-text').val("");  // NOT WORKING

  });



  loadTweets();
});