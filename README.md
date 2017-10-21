# eslint-config

[![Greenkeeper badge](https://badges.greenkeeper.io/jupl/eslint-config.svg)](https://greenkeeper.io/)
[![NPM](http://img.shields.io/npm/v/eslint-config-jupl.svg?style=flat-square)](https://www.npmjs.org/package/eslint-config-jupl)
![License](http://img.shields.io/npm/l/eslint-config-jupl.svg?style=flat-square)
[![Dev Dependencies](http://img.shields.io/david/dev/jupl/eslint-config.svg?style=flat-square)](https://david-dm.org/jupl/eslint-config#info=devDependencies)
[![Travis](http://img.shields.io/travis/jupl/eslint-config.svg?style=flat-square&label=travis)](https://travis-ci.org/jupl/eslint-config)

Personal [ESLint](http://eslint.org/) and
[tslint](https://palantir.github.io/tslint/)
[configuration](http://eslint.org/docs/developer-guide/shareable-configs.html).

## Usage

### ESLint

Add to  `package.json`:

```json
{
  "eslintConfig": {
    "extends": ["jupl", "jupl/esnext"]
  }
}
```

Or to `.eslintrc`:

```json
{
  "extends": ["jupl", "jupl/esnext"]
}
```

If targeting older node.js (< 1.0):

```json
{
  "extends": "jupl"
}
```

If targeting the browser:

```json
{
  "extends": ["jupl", "jupl/browser"]
}
```

If using [Babel](http://babeljs.io/) (requires
[eslint-plugin-babel](babel/eslint-plugin-babel) and
[babel-eslint](babel/babel-eslint)):

```json
{
  "extends": ["jupl", "jupl/esnext", "jupl/babel"]
}
```

If using [React](facebook/react) (requires
[eslint-plugin-react](yannickcr/eslint-plugin-babel)):

```json
{
  "extends": ["jupl", "jupl/react"]
}
```

### TSLint

Add to  `tslint.json`:

```json
{
  "extends": "eslint-config-jupl/ts"
}
```

If using [React](facebook/react) (requires
[tslint-react](palantir/tslint-react)):

```json
{
  "extends": [
    "eslint-config-jupl/ts",
    "eslint-config-jupl/ts/react"
  ]
}
```
