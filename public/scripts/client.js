/*
 * Client-side JS logic goes here
 */

$(() => {
  const escape = function(str) {
    // uses a fake div to change the text into text made safe from cross-scripting
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweet) {
    // formats the tweet from the database into html with date reformatted and text made safe from cross-scripting
    const postDate = timeago.format(tweet.created_at);
    const safeHTML = `<p class="tweetContents">${escape(tweet.content.text)}</p>`;
    const $tweet = `<article class="aTweet">
        <div>
          <div class="tweeter">
            <div class="tweeterImageName">
              <picture>
                <img src=${tweet.user.avatars}>
              </picture>
              <div class="name">
                ${tweet.user.name}
              </div>
            </div>
            <div class="tweeterHandle">
              ${tweet.user.handle}
            </div>
          </div>
            ${safeHTML}
        </div>
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

  const clearForm = function() {
    // clears the contents of the form before rehiding it
    $("textarea").val("");
    $("output").val("140");
    $(".error").css("display", "none");
  };

  const loadTweets = function() {
    $.get('tweets')
      .then((tweets) => {
        renderTweets(tweets);
      })
      .then(() => {
        clearForm();
      });
  };

  const renderTweets = function(tweetArray) {
    $('.old-tweets').empty();
    for (const tweet of tweetArray) {
      const $tweetArticle = createTweetElement(tweet);
      $('.old-tweets').append($tweetArticle);
    }
  };

  $("form").submit(function(event) {
    // form submission, prevents default behaviour and captures iet to get the data in the right format before adding it to the database, also checks for 0 text and too much text
    event.preventDefault();
    const serializedData = $("form").serialize();
    const tweetContent = $('#tweet-text').val().trim();
    if (!tweetContent) {
      $(".error-message").text("You can't tweet nothing!");
      $(".error").slideDown();
    } else if (tweetContent.length > 140) {
      $(".error-message").text(`You are using too many characters! Keep it under 140, k?`);
      $(".error").slideDown();
    } else {
      $.post('/tweets', serializedData);
      // tucks the form back up to hidden
      $(".new-tweet").slideToggle("slow");
      loadTweets();
      // toggles the arrows up or down depending on if the form is shown or not
      $("span.down").toggle();
      $("span.up").toggle();
    }
  });

  loadTweets();

  $("button.clickWriteTweet").on("click", () => {
    // when the arrows are clicked it opens the form and gives it focus or hides it if already open and brings the page up to the top as well (so the form can be seen)
    $(".new-tweet").slideToggle();
    $("span.down").toggle();
    $("span.up").toggle();
    $("textarea").focus();
    $(window).scrollTop(0);
  });

});