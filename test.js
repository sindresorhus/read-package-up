import path from 'path';
import test from 'ava';
import readPackageUp from '.';

const cwd = 'fixture';
const packagePath = path.resolve('.', 'package.json');

test('async', async t => {
	const result = await readPackageUp({cwd});
	t.is(result.package.name, 'read-pkg-up');
	t.is(result.path, packagePath);

	t.is(await readPackageUp({cwd: '/'}), undefined);
});

test('sync', t => {
	const result = readPackageUp.sync({cwd});
	t.is(result.package.name, 'read-pkg-up');
	t.is(result.path, packagePath);

	t.is(readPackageUp.sync({cwd: '/'}), undefined);
});
