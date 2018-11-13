window = { YTD: { tweet: {} } };
const fs = require("fs");

const originalTweets = require("./filterTweets").originalTweetsNoMentions;
const createContent = require("./filterTweets").createContent;

const file = "tweets.csv";
const tweetScript = require(process.argv[2] || "./twitter_stuff/tweet");

fs.writeFile(file, createContent(originalTweets), err => {
  if (err) throw err;
  console.log(`tweet text written to ${file}`);
});
