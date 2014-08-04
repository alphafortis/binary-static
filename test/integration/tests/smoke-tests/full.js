﻿var utils = require('../../utils');

var fullUrlList = require('../../url-list.json').urls;

var urls = fullUrlList.map(function(url, idx) {
    return {
        page: idx + 1 + '. ' + url,
         path: url
     };
});

console.log('\Testing ' + urls.length + ' urls....');

module.exports = utils.smoteTestUrls(urls);