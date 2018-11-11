window = { YTD: { tweet: {} } };
const fs = require("fs");

const originalTweets = require("./filterTweets").originalTweetsNoMentions;
const createContent = require("./filterTweets").createContent;

const file = "tweets.csv";
debugger;
const tweetScript = require(process.argv[0] || "./twitter_stuff/tweets");

fs.writeFile(file, createContent(originalTweets), err => {
  if (err) throw err;
  console.log(`tweet text written to ${file}`);
});
