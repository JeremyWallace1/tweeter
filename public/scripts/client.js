/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.

$(document).ready(function() { // $ define/access jQuery, (document) is the selector to find html elements, .ready() the action to be performed on the elements

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const renderTweets = function(tweets) {
    for (let twit of tweets) {
      $tweet = createTweetElement(twit);
      $('.container').append($tweet);
    }
  };

  const createTweetElement = function(tweet) {
    const postDate = new Date(tweet.created_at);
    const $tweet = `<article class = "aTweet">
        <header>
          <div class = "tweeter">
            <div class = "tweeterImageName">
              <div class = "userImage">
                <img src = ${tweet.user.avatars}>
              </div>
              <div class = "name">
                ${tweet.user.name}
              </div>
            </div>
            <div class = "tweeterHandle">
              ${tweet.user.handle}
            </div>
          </div>
          <div class = "tweetContents">
            ${tweet.content.text}
          </div>
        </header>
        <footer>
          <div class = "date">
            ${postDate}
          </div>
          <div class = "actions">
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

  renderTweets(data);
  // Test / driver code (temporary)
  // $('.container').append('<article class="tweet">'+$tweet+'</article>'); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});