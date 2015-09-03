'use strict';
var path = require('path');
var test = require('ava');
var fn = require('./');
var cwd = path.join(__dirname, 'fixture');
var pkgPath = path.join(__dirname, 'package.json');

test('async', function (t) {
	return fn({cwd: cwd}).then(function (x) {
		t.is(x.pkg.name, 'read-pkg-up');
		t.is(x.path, pkgPath);
	});
});

test('sync', function (t) {
	var x = fn.sync({cwd: cwd});
	t.is(x.pkg.name, 'read-pkg-up');
	t.is(x.path, pkgPath);
	t.end();
});
