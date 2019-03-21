import path from 'path';
import test from 'ava';
import readPkgUp from '.';

const cwd = 'fixture';
const pkgPath = path.resolve('.', 'package.json');

test('async', async t => {
	const result = await readPkgUp({cwd});
	t.is(result.pkg.name, 'read-pkg-up');
	t.is(result.path, pkgPath);

	const result2 = await readPkgUp({cwd: '/'});
	t.is(result2.pkg, undefined);
	t.is(result2.path, undefined);
});

test('sync', t => {
	const result = readPkgUp.sync({cwd});
	t.is(result.pkg.name, 'read-pkg-up');
	t.is(result.path, pkgPath);

	const result2 = readPkgUp.sync({cwd: '/'});
	t.is(result2.pkg, undefined);
	t.is(result2.path, undefined);
});
