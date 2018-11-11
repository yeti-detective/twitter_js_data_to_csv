const filterTweets = require("./filterTweets");

const createContent = filterTweets.createContent;
const originalTweets = filterTweets.originalTweetsNoMentions;

describe("createContent", () => {
  test("createContent converts tweet objects to comma-separated text", () => {
    // Arrange
    const tweet1 = { full_text: "full text of tweet 1" };
    const tweet2 = { full_text: "full text of tweet 2" };
    const expectedTweetsInput = [tweet1, tweet2];
    const expectedString = `"""${tweet1.full_text}""",\n"""${
      tweet2.full_text
    }""",\n`;

    // Act
    const actualString = createContent(expectedTweetsInput);

    // Assert
    expect(actualString).toBe(expectedString);
  });

  test("createContent double quotes appropriately", () => {
    // Arrange
    const tweet1 = {
      full_text: 'full text of "tweet 1", but there are commas\n and newlines'
    };
    const tweet2 = {
      full_text: 'full text of "tweet 2", but there are commas\n and newlines'
    };
    const expectedTweetsInput = [tweet1, tweet2];
    const expectedString =
      '"""full text of ""tweet 1"", but there are commas\n and newlines""",\n' +
      '"""full text of ""tweet 2"", but there are commas\n and newlines""",\n';

    // Act
    const actualString = createContent(expectedTweetsInput);
    // Assert
    expect(actualString).toBe(expectedString);
  });
});

describe("originalTweetsNoMentions", () => {
  test("originalTweetsNoMentions filters retweets and mentions", () => {
    // Arrange
    const expectedTweets = [
      { full_text: "RT @some_user this tweet shouldn't be in it" },
      { full_text: "this tweet should be in it" },
      { full_text: "@some_users this is a mention and should not be included" }
    ];
    const expectedTweetsArray = [{ full_text: "this tweet should be in it" }];

    // Act
    const actualTweetArray = originalTweets(expectedTweets);

    // Assert
    expect(actualTweetArray).toEqual(expectedTweetsArray);
  });
});
