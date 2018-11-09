window = { YTD: { tweet: {} } };
const fs = require("fs");

const originalTweets = require("./filterTweets").originalTweetsNoMentions;
const createContent = require("./filterTweets").createContent;

const file = "tweets.csv";
console.log("are you even getting to line six, dawg?");
const tweetScript = process.env.TESTTWEET || require("./twitter_stuff/tweet");
debugger;
/*
Tweet Object Example
{
  created_at: "Thu Oct 18 02:08:11 +0000 2018"
  display_text_range: (2) ["0", "20"]
  entities: {hashtags: Array(0), symbols: Array(0), user_mentions: Array(1), urls: Array(0)}
  favorite_count: "0"
  favorited: false
  full_text: "I am a tweet's text. I have an apostrophe \nas well as a newline character, oh and a comma. What a nightmare to parse :)"
  id: "1052743110667702272"
  id_str: "1052743110667702272"
  in_reply_to_screen_name: "InfiniteFruit"
  in_reply_to_status_id: "1052735987313496064"
  in_reply_to_status_id_str: "1052735987313496064"
  in_reply_to_user_id: "172954008"
  in_reply_to_user_id_str: "172954008"
  lang: "en"
  retweet_count: "0"
  retweeted: false
  source: "<a href="https://about.twitter.com/products/tweetdeck" rel="nofollow">TweetDeck</a>"
  truncated: false
}
*/

fs.writeFile(file, createContent(originalTweets), err => {
  if (err) throw err;
  console.log(`tweet text written to ${file}`);
});

module.exports.createContent = createContent;
