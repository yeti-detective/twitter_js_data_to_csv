const filterTweets = require("./filterTweets");

const createContent = filterTweets.createContent;
const originalTweets = filterTweets.originalTweetsNoMentions;

describe("createContent", () => {
  test("createContent converts tweet objects to comma-separated text", () => {
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

  test("createContent escapes commas and newlines appropriately", () => {
    // Arrange
    const tweet1 = {
      full_text: "full text of tweet 1, but there are commas\n and newlines"
    };
    const tweet2 = {
      full_text: "full text of tweet 2, but there are commas\n and newlines"
    };
    const expectedTweetsInput = [tweet1, tweet2];
    const expectedString = `${tweet1.full_text},\n${tweet2.full_text},\n`;

    // Act
    const actualString = createContent(expectedTweetsInput);
    // Assert
  });
});
