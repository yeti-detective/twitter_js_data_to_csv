module.exports.createContent = tweetsArray => {
  const texts = tweetsArray.map(tweet => tweet.full_text);
  texts.push("\n");
  return texts.join("\n");
};

module.exports.originalTweetsNoMentions = tweets => {
  return tweets.filter(tweet => {
    if (tweet.full_text.substr(0, 2) == "RT" || tweet.full_text[0] == "@") {
      return false;
    } else {
      return true;
    }
  });
};
