import path from 'path';
import test from 'ava';
import {readPackageUpAsync, readPackageUpSync} from './index.js';

const cwd = 'fixture';
const packagePath = path.resolve('.', 'package.json');

test('async', async t => {
	const result = await readPackageUpAsync({cwd});
	t.is(result.packageJson.name, 'read-pkg-up');
	t.is(result.path, packagePath);

	t.is(await readPackageUpAsync({cwd: '/'}), undefined);
});

test('sync', t => {
	const result = readPackageUpSync({cwd});
	t.is(result.packageJson.name, 'read-pkg-up');
	t.is(result.path, packagePath);

	t.is(readPackageUpSync({cwd: '/'}), undefined);
});
