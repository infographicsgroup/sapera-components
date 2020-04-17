# Sapera Components

![Build Status](https://img.shields.io/circleci/build/gh/infographicsgroup/sapera-components/master)
![License](https://img.shields.io/github/license/infographicsgroup/sapera-components)
![version](https://img.shields.io/npm/v/sapera-components)

Sapera Pattern Library powered by [Storybook](https://storybook.js.org/) and [React](https://reactjs.org/).

Netlify URL: https://sapera-storybook.netlify.com/

## Usage
- Add the dependency to `package.json`, e.g.
```bash
yarn add sapera-components@^0.0.1-development
```

- Include the components you want.
```javascript
import { Button } from "sapera-components";
```

`sapera-components` provides an integrated TypeScript experience out of the box.<br/>
The types for each component is provided (following the pattern `{Component}Props` and can be imported for
type-checking while developing.

```javascript
import { Button, ButtonProps } from "sapera-components";
```

## General Notes
- Each `Component` has its own folder under `src/components/{Component}/`.
- Each `Component` has its tests under `src/components/{Component}.test.tsx`.
- Each `Component` has its stories under `src/components/{Component}.stories.tsx`.

## Storybook
To run Storybook use: `yarn start:storybook`. (served on http:localhost:9009)<br/>
The storybook is automatically build and deployed with every `master` branch commit and served using Netlify.

## Testing
Testing works with [jest](https://jestjs.io/)<br/>
There is a `yarn test` task that runs (automatically on every build)

## Linting
The code is linted with:
- [ESLint](https://eslint.org/) (linting)
- [Prettier](https://prettier.io/) (formatting)

There are [`yarn lint:check` and `yarn format:check` tasks](./package.json) that runs linting checks on every build.<br/>
There are also [`yarn lint` and `yarn format` tasks](./package.json) that run on staged files on a `pre-commit`
hook to automatically fix linting issues (when possible).

## Publishing
With every tag release the package is automatically published to NPM (automated through CircleCI)
you need to:
- update the version number in the [package.json](./package.json#L3)
- create a tag on GitHub to match the (semantic) version number to trigger the publish workflow through CircleCI.

The package is built -using [`rollup.js`](https://rollupjs.org/guide/en/)- to bundle only the components and typing
for production usage on other project.

## Advanced Usage
### Using `yarn` with git(hub) package
To use the package directly from git (`master` branch),
you need to build the package locally (after installing), this can be done with the following:
```bash
yarn add https://github.com/infographicsgroup/sapera-storybook#master
// or if it's already added
yarn upgrade sapera-storybook

cd node_modules/sapera-components && yarn build
```

### Developing/Debugging locally in another project
To actively develop a component while simultaneously using the new component in another project,
you can elevate the use of [`yarn link`](https://classic.yarnpkg.com/en/docs/cli/link/) as follows:
```bash
git clone https://github.com/infographicsgroup/sapera-components && cd sapera-component
yarn link                       # Create the symlink to be added in other project
yarn build --watch              # Automatically build new version on every change to the components code
cd /path/to/other/project/
yarn link "sapera-components"   # Use the symlink with the latest build edits and fetch latest build on code changes
```
