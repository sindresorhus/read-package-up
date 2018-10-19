import {expectType} from 'tsd-check';
import readPkgUp from '.';
import {PackageMetadata} from '.';

(async () => {
	expectType<PackageMetadata>(await readPkgUp());
	expectType<PackageMetadata>(await readPkgUp({ cwd: '.', normalize: false }));

	expectType<PackageMetadata>(readPkgUp.sync());
	expectType<PackageMetadata>(readPkgUp.sync({ cwd: '.', normalize: false }));
})();
