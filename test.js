import path from 'path';
import test from 'ava';
import m from '.';

const cwd = 'fixture';
const pkgPath = path.resolve('.', 'package.json');

test('async', async t => {
	const x = await m({cwd});
	t.is(x.pkg.name, 'read-pkg-up');
	t.is(x.path, pkgPath);
});

test('sync', t => {
	const x = m.sync({cwd});
	t.is(x.pkg.name, 'read-pkg-up');
	t.is(x.path, pkgPath);
});
