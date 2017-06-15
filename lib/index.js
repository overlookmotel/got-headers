/* --------------------
 * got-headers module
 * ------------------*/

'use strict';

// Modules
const got = require('got'),
	Promise = require('bluebird');

// Exports

/**
 * Hit URL and get headers only
 * @param {string} url - URL
 * @param {Object} [options] - Options object to pass to `got`
 * @returns {Promise} - Bluebird Promise which resolves with response object
 */
module.exports = function(url, options) {
	return new Promise((resolve, reject) => {
		const stream = got.stream(url, options);

		let req;
		stream.on('request', _req => req = _req);

		stream.on('response', res => {
			req.abort();
			resolve(res);
		});

		stream.on('error', (err, body, response) => {
			err.body = body;
			err.response = response;
			reject(err);
		});
	});
};
