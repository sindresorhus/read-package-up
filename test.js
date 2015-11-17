import test from 'ava';
import path from 'path';
import fn from './';

const cwd = path.join(__dirname, 'fixture');
const pkgPath = path.join(__dirname, 'package.json');

test('async', async t => {
	const x = await fn({cwd});

	t.is(x.pkg.name, 'read-pkg-up');
	t.is(x.path, pkgPath);
});

test('sync', t => {
	const x = fn.sync({cwd});

	t.is(x.pkg.name, 'read-pkg-up');
	t.is(x.path, pkgPath);
	t.end();
});
