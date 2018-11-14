# Tweets to CSV

Did you download your data from Twitter and get a bunch of JavaScript files?

Do you need to turn those JavaScript files into a CSV?

Well, here's a tool!

---

## Dependencies

You will need [Node](https://nodejs.org/) installed to run this script. I tested it with version 8.1, but I think it should be compatible with any version 4.0 or higher.

You will also need the [git](https://git-scm.com/) command line. I think it's installed by default on Mac and Linux OSes, & you can follow that link to install it on Windows.

## Input

In the bundles of files, the primary concern is called tweet.js

I have over 80K tweets, so opening this in a text editor caused a memory issue. You can probably use `less tweet.js` to print one page at a time to the terminal to make sure you've got the right page.

It will look like this:
![screenshot of tweet.js](https://dl.dropbox.com/s/3o1d5o9elx094e2/Screenshot%20from%202018-11-13%2019-27-31.png?dl=0)

## To run

First you have to have downloaded your twitter data (_see above_). Open your preferred command line program. Clone this repo:

- `git clone https://github.com/yeti-detective/twitter_js_data_to_csv.git`
- `cd twitter_js_data_to_csv`
- `npm install` OR if you prefer [yarn](https://yarnpkg.com/lang/en/docs/install/), like I do, `yarn install`
- if you get a success message after dependencies are installed, run `node tweetsToCSV.js <path to your tweets.js file> [<path and name of output file, defaults to ./tweets.csv>]`

_You should now have a CSV file with a single column of data where each cell (if you open it in a spreadsheet) is a discreet tweet, excluding your RTs and mentions._

_I should point out I've excluded RTs and mentions because I'm trying to use this CSV file to train a twitter bot. You can edit filterTweets.js to change whether RTs and mentions show up in your output._
