'use strict';
var findUp = require('find-up');
var readPkg = require('read-pkg');

module.exports = function (cwd, opts) {
	if (typeof cwd !== 'string') {
		opts = cwd;
		cwd = '.';
	}

	return findUp('package.json', {cwd: cwd}).then(function (fp) {
		if (!fp) {
			return {};
		}

		return readPkg(fp, opts).then(function (pkg) {
			return {
				pkg: pkg,
				path: fp
			};
		});
	});
};

module.exports.sync = function (cwd, opts) {
	if (typeof cwd !== 'string') {
		opts = cwd;
		cwd = '.';
	}

	var fp = findUp.sync('package.json', {cwd: cwd});

	if (!fp) {
		return {};
	}

	return {
		pkg: readPkg.sync(fp, opts),
		path: fp
	};
};
