import {Options as FindUpOptions} from 'find-up';
import {Options as ReadPkgOptions, PackageMetadata} from 'read-pkg';
export {PackageMetadata} from 'read-pkg';

export interface Options extends FindUpOptions, ReadPkgOptions {}

/** Returns a `Promise` for the result object. */
declare function readPkgUp(options?: Options): Promise<PackageMetadata>;

declare namespace readPkgUp {
	/** Returns the result object. */
	function sync(options?: Options): PackageMetadata;
}

export default readPkgUp;
