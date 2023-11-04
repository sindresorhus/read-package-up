import path from 'node:path';
import test from 'ava';
import {readPackageUp, readPackageUpSync} from './index.js';

const cwd = 'fixture';
const packagePath = path.resolve('.', 'package.json');

test('async', async t => {
	const result = await readPackageUp({cwd});
	t.is(result.packageJson.name, 'read-package-up');
	t.is(result.path, packagePath);
	t.deepEqual(
		await readPackageUp({cwd: new URL(cwd, import.meta.url)}),
		result,
	);

	t.is(await readPackageUp({cwd: '/'}), undefined);
});

test('sync', t => {
	const result = readPackageUpSync({cwd});
	t.is(result.packageJson.name, 'read-package-up');
	t.is(result.path, packagePath);
	t.deepEqual(
		readPackageUpSync({cwd: new URL(cwd, import.meta.url)}),
		result,
	);

	t.is(readPackageUpSync({cwd: '/'}), undefined);
});
