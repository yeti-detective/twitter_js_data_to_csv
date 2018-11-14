window = { YTD: { tweet: {} } };
const fs = require("fs");

const originalTweets = require("./filterTweets").originalTweetsNoMentions;
const createContent = require("./filterTweets").createContent;

const tweetScript = require(process.argv[2] || "./twitter_stuff/tweet");
const file = process.argv[3] || "tweets.csv";

fs.writeFile(
  file,
  createContent(originalTweets(window.YTD.tweet.part0)),
  err => {
    if (err) throw err;
    console.log(`tweet text written to ${file}`);
  }
);
