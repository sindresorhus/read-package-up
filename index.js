'use strict';
const path = require('path');
const findUp = require('find-up');
const readPkg = require('read-pkg');

module.exports = options => {
	return findUp('package.json', options).then(fp => {
		if (!fp) {
			return {};
		}

		return readPkg(Object.assign({}, options, {cwd: path.dirname(fp)}))
			.then(pkg => ({pkg, path: fp}));
	});
};

module.exports.sync = options => {
	const fp = findUp.sync('package.json', options);

	if (!fp) {
		return {};
	}

	return {
		pkg: readPkg.sync(Object.assign({}, options, {cwd: path.dirname(fp)})),
		path: fp
	};
};
