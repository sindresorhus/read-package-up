import { expectType } from 'tsd-check';
import readPkgUp from '.';
import { IPackage } from '.';

(async () => {
	expectType<IPackage>(await readPkgUp());
	expectType<IPackage>(await readPkgUp({ cwd: './', normalize: false }));

	expectType<IPackage>(readPkgUp.sync());
	expectType<IPackage>(readPkgUp.sync({ cwd: './', normalize: false }));
})();
