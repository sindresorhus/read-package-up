import {expectType, expectError} from 'tsd';
import readPkgUp = require('.');

expectType<Promise<readPkgUp.NormalizedReadResult | undefined>>(readPkgUp());
expectType<Promise<readPkgUp.NormalizedReadResult | undefined>>(
	readPkgUp({cwd: '.'})
);
expectType<Promise<readPkgUp.NormalizedReadResult | undefined>>(
	readPkgUp({normalize: true})
);
expectType<Promise<readPkgUp.NormalizedReadResult | undefined>>(
	readPkgUp({cwd: '.', normalize: true})
);
expectType<Promise<readPkgUp.ReadResult | undefined>>(
	readPkgUp({normalize: false})
);
expectError<Promise<readPkgUp.NormalizedReadResult | undefined>>(
	readPkgUp({normalize: false})
);

expectType<readPkgUp.NormalizedReadResult | undefined>(readPkgUp.sync());
expectType<readPkgUp.NormalizedReadResult | undefined>(
	readPkgUp.sync({cwd: '.'})
);
expectType<readPkgUp.NormalizedReadResult | undefined>(
	readPkgUp.sync({normalize: true})
);
expectType<readPkgUp.NormalizedReadResult | undefined>(
	readPkgUp.sync({cwd: '.', normalize: true})
);
expectType<readPkgUp.ReadResult | undefined>(
	readPkgUp.sync({normalize: false})
);
expectError<readPkgUp.NormalizedReadResult | undefined>(
	readPkgUp.sync({normalize: false})
);
