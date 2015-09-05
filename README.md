# eslint-config
[![NPM](http://img.shields.io/npm/v/eslint-config-jupl.svg?style=flat-square)](https://www.npmjs.org/package/eslint-config-jupl)
![License](http://img.shields.io/npm/l/eslint-config-jupl.svg?style=flat-square)
[![Dev Dependencies](http://img.shields.io/david/dev/jupl/eslint-config.svg?style=flat-square)](https://david-dm.org/jupl/eslint-config#info=devDependencies)
[![Travis](http://img.shields.io/travis/jupl/eslint-config.svg?style=flat-square&label=travis)](https://travis-ci.org/jupl/eslint-config)

Personal [ESLint](http://eslint.org/)
[configuration](http://eslint.org/docs/developer-guide/shareable-configs.html).

## Usage

Add to  `package.json`:

```json
{
  "eslintConfig": {
    "extends": "jupl"
  }
}
```

Or to `.eslintrc`:

```json
{
  "extends": "jupl"
}
```

If using [Babel](http://babeljs.io/) (requires
[eslint-plugin-babel](babel/eslint-plugin-babel) and
[babel-eslint](babel/babel-eslint)):

```json
{
  "extends": ["jupl", "jupl/babel"]
}
```

If targeting the browser:

```json
{
  "extends": ["jupl", "jupl/browser"]
}
```
