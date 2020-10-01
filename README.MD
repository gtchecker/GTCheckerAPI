[![NPM](https://nodei.co/npm/gtchecker.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gtchecker)

# gtchecker
The official [GTCHECKER](https://gtchecker.com) API wrapper for Node.js

## Installation
Simply run `npm i gtchecker` (or `yarn add gtchecker`)

## What is GTChecker (Node Module)
It's a nodejs module designed to interact with our website [GTChecker.com](https://gtchecker.com)
Which is a fully customized Gamertag & PSN Username checker website + Discord bot,

It's purpose is simply to check if your desired username is available on either platform,
This project was developed simply from a [Discord.js](https://discord.js.org/) Bot Command,

Mainly made for Educational Research and studying the functionality of [Express.js](https://expressjs.com/) with other features such as [SQLite3](https://www.npmjs.com/package/sqlite3).


## Usage
(Basic)

Getting Xbox Result:
```js
const GTCHECKER = require('gtchecker');
const Check = new GTCHECKER('API TOKEN');

Check.Gamertag('CHECK_USERNAME').then(result => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});
```

Getting PSN Result:
```js
const GTCHECKER = require('gtchecker');
const Check = new GTCHECKER('API_TOKEN');

Check.PSN('CHECK_USERNAME').then(result => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});
```
## Technical Usage
(Advanced)

Getting Xbox Result w/ Custom User-Agent & Referer Link:
```js
const GTCHECKER = require('gtchecker');
const Check = new GTCHECKER('API_TOKEN', 'BOT_USERNAME/WEBSITE', 'REFERAL_LINK');

Check.Gamertag('CHECK_USERNAME').then(result => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});
```

Getting PSN Result w/ Custom User-Agent & Referer Link:
```js
const GTCHECKER = require('gtchecker');
const Check = new GTCHECKER('API_TOKEN', 'BOT_USERNAME/WEBSITE', 'REFERAL_LINK');

Check.PSN('CHECK_USERNAME').then(result => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});
```



## License
[MIT](LICENSE)

## Credits
[Joker](https://twitter.com/antidoxable)

[VB](https://twitter.com/GTPSNChecker)

## Copyright Footer
© 2020 GTCHECKER.COM, ALL RIGHTS RESERVED.
