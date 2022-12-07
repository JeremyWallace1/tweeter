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
    // prevent the form from doing it's usual post and capture it instead.
    event.preventDefault();

    // Serialize the form data
    const serializedData = $("form").serialize()
    console.log(serializedData);
    // Use the jQuery library to submit a POST request that sends the serialized data to the server
    
    $.post('/tweets', serializedData);
    // alert( serializedData );
  });


  loadTweets();
});