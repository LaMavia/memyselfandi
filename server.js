const fs = require('fs');
const { URL } = require('url');
const fileUrl = new URL('memyselfandi.pl');

fs.readFileSync(fileUrl);