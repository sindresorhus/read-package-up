declare module 'read-pkg-up' {
  interface IReadPkgUp {
    (options?: IOptions): Promise<IPackage>;

    sync (options?: IOptions): IPackage;
  }

  interface IOptions {
    /**
     * Directory to start looking for a package.json file.
     *
     * @default 'process.cwd()'
     */
    cwd?: string;
    /**
     * [Normalize](https://github.com/npm/normalize-package-data#what-normalization-currently-entails) the package data.
     *
     * @default true
     */
    normalize?: boolean;
  }

  interface IPackage {
    [key: string]: any;
  }

  const read_pkg_up: IReadPkgUp;

  export = read_pkg_up;
}
