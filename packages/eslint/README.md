# @danpack/eslint

Hub-like package collecting ESLint plugins and configs to use in other projects, without the need to individually install 10 thousand plugins alongside the main `eslint` package.

## Installation

Main package:

```
npm install -D @danpack/eslint

pnpm add -D @danpack/eslint
```

Peer deps:

```
pnpm add -D eslint@9 typescript-eslint@latest
```

Why `typescript-eslint` is currently required as a peerDep, I explained in the [Limitations](#limitations) section.

## Usage

```ts
// eslint.config.mjs

import { commonConfig, reactConfig } from '@danpack/eslint';

export default [
	...commonConfig,
	...reactConfig,
	...{
		/* other custom configs */
	},
];
```

`commonConfig` is required and needs to be used before other configs, for them to work properly.

## Configs list

### Common:

-  `@eslint/js`: recommended config
-  `typescript-eslint` - parser + recommended config
-  `eslint-plugin-import` - recommended config (WIP - it should be available soon)
-  a few custom rules overriding the recommendations

### React (requires React 19)

-  `eslint-plugin-react` - recommended rules
-  `eslint-plugin-react` - jsx-runtime rules
-  `eslint-plugin-react-hooks` - recommended rules
-  `eslint-plugin-jsx-a11y` - recommended rules

## Limitations

1. `typescript-eslint` is not bundled in this package, but is required as a peerDependency, because when it was bundled, it was causing weird runtime errors that I didn't have patience to fix yet.
2. `eslint-plugin-import` is currently disabled, because it was causing build-time as well as runtime issues, that I haven't figured out yet either.

## Missing type definitions

I added custom type definitions for `eslint-plugin-import` and `eslint-plugin-react-hooks` because at the time of making this package, they were not included in those plugins, nor available through `@types/plugin`.
