window = { YTD: { tweet: {} } };
const fs = require("fs");

const originalTweets = require("./filterTweets").originalTweetsNoMentions;
const createContent = require("./filterTweets").createContent;

const file = "tweets.csv";

const tweetScript = process.env.TESTTWEET || require("./twitter_stuff/tweet");

fs.writeFile(file, createContent(originalTweets), err => {
  if (err) throw err;
  console.log(`tweet text written to ${file}`);
});
