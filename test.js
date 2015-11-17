import test from 'ava';
import path from 'path';
import fn from './';

const cwd = 'fixture';
const pkgPath = path.resolve('.', 'package.json');

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
