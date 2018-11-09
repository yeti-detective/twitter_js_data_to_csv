const filterTweets = require("./filterTweets");

const createContent = filterTweets.createContent;
const originalTweets = filterTweets.originalTweetsNoMentions;

test("createContent concatenates input to csv formatted text fields", () => {
  // Arrange
  const tweet1 = { full_text: "full text of tweet 1" };
  const tweet2 = { full_text: "full text of tweet 2" };
  const expectedTweetsInput = [tweet1, tweet2];
  const expectedString = `${tweet1.full_text},\n${tweet2.full_text},\n`;
  // Act
  const actualString = createContent(expectedTweetsInput);
  // Assert
  expect(actualString).toBe(expectedString);
});
