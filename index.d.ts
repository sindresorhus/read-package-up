import { IOptions as IFindUpOptions } from 'find-up';
import { IOptions as IReadPkgOptions, IPackage } from 'read-pkg';
export { IPackage } from 'read-pkg';

export interface IOptions extends IFindUpOptions, IReadPkgOptions {}

/** Returns a `Promise` for the result object. */
declare function readPkgUp(options?: IOptions): Promise<IPackage>;

declare namespace readPkgUp {
	/** Returns the result object. */
	function sync(options?: IOptions): IPackage;
}

export default readPkgUp;
