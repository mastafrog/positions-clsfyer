const cheerio = require('cheerio')
const markdown = require('to-markdown')
const fs = require('fs')
const { URL } = require('url')

require.extensions['.html'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8')
};

var body = require("./index.html")
const $ = cheerio.load(body)

body = body.replace(/<\/?[^>]+(>|$)/g, "").replace(/\s{2,}/g,'\n');
console.log(body)
fs.writeFile('stripstr.txt', body)
