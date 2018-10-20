import {Options as FindUpOptions} from 'find-up';
import {Options as ReadPkgOptions, PackageMetadata} from 'read-pkg';
export {PackageMetadata} from 'read-pkg';

export interface Options extends FindUpOptions, ReadPkgOptions {}

export interface PackageInfo {
	pkg: PackageMetadata;
	path: string;
}

/** Returns a `Promise` for the result object. */
declare function readPkgUp(options?: Options): Promise<PackageInfo>;

declare namespace readPkgUp {
	/** Returns the result object. */
	function sync(options?: Options): PackageInfo;
}

export default readPkgUp;
