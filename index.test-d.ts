import {expectType, expectError} from 'tsd';
import {readPackageUpAsync, readPackageUpSync, ReadResult, NormalizedReadResult} from './index.js';

expectType<Promise<NormalizedReadResult | undefined>>(readPackageUpAsync());
expectType<Promise<NormalizedReadResult | undefined>>(
	readPackageUpAsync({cwd: '.'})
);
expectType<Promise<NormalizedReadResult | undefined>>(
	readPackageUpAsync({normalize: true})
);
expectType<Promise<NormalizedReadResult | undefined>>(
	readPackageUpAsync({cwd: '.', normalize: true})
);
expectType<Promise<ReadResult | undefined>>(
	readPackageUpAsync({normalize: false})
);
expectError<Promise<NormalizedReadResult | undefined>>(
	readPackageUpAsync({normalize: false})
);

expectType<NormalizedReadResult | undefined>(readPackageUpSync());
expectType<NormalizedReadResult | undefined>(
	readPackageUpSync({cwd: '.'})
);
expectType<NormalizedReadResult | undefined>(
	readPackageUpSync({normalize: true})
);
expectType<NormalizedReadResult | undefined>(
	readPackageUpSync({cwd: '.', normalize: true})
);
expectType<ReadResult | undefined>(
	readPackageUpSync({normalize: false})
);
expectError<NormalizedReadResult | undefined>(
	readPackageUpSync({normalize: false})
);
