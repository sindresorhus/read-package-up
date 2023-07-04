import {expectType, expectError} from 'tsd';
import {readPackageUp, readPackageUpSync, type ReadResult, type NormalizedReadResult} from './index.js';

expectType<Promise<NormalizedReadResult | undefined>>(readPackageUp());
expectType<Promise<NormalizedReadResult | undefined>>(
	readPackageUp({cwd: '.'}),
);
expectType<Promise<NormalizedReadResult | undefined>>(
	readPackageUp({cwd: new URL('file:///path/to/cwd/')}),
);
expectType<Promise<NormalizedReadResult | undefined>>(
	readPackageUp({normalize: true}),
);
expectType<Promise<NormalizedReadResult | undefined>>(
	readPackageUp({cwd: '.', normalize: true}),
);
expectType<Promise<NormalizedReadResult | undefined>>(
	readPackageUp({cwd: new URL('file:///path/to/cwd/'), normalize: true}),
);
expectType<Promise<ReadResult | undefined>>(
	readPackageUp({normalize: false}),
);
expectError<Promise<NormalizedReadResult | undefined>>(
	readPackageUp({normalize: false}),
);

expectType<NormalizedReadResult | undefined>(readPackageUpSync());
expectType<NormalizedReadResult | undefined>(
	readPackageUpSync({cwd: '.'}),
);
expectType<NormalizedReadResult | undefined>(
	readPackageUpSync({cwd: new URL('file:///path/to/cwd/')}),
);
expectType<NormalizedReadResult | undefined>(
	readPackageUpSync({normalize: true}),
);
expectType<NormalizedReadResult | undefined>(
	readPackageUpSync({cwd: '.', normalize: true}),
);
expectType<NormalizedReadResult | undefined>(
	readPackageUpSync({cwd: new URL('file:///path/to/cwd/'), normalize: true}),
);
expectType<ReadResult | undefined>(
	readPackageUpSync({normalize: false}),
);
expectError<NormalizedReadResult | undefined>(
	readPackageUpSync({normalize: false}),
);
