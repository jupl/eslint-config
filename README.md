# eslint-config
[![NPM](http://img.shields.io/npm/v/eslint-config-jupl.svg?style=flat-square)](https://www.npmjs.org/package/eslint-config-jupl)
![License](http://img.shields.io/npm/l/eslint-config-jupl.svg?style=flat-square)

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
