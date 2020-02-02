# Vervocity JS Coding Standard

```sh
npm i @vervocity/eslint-config
```

Create `.eslintrc.json` file.
```json
{
    "extends": "@vervocity"
}
```

```sh
npx eslint resources/js
```

## React & React Native projects


```sh
npm install eslint-plugin-react --save-dev
```

.eslintrc.json

```json
{
    "extends": [
        "plugin:react/recommended",
        "@vervocity"
    ],
    "parserOptions": {
        "parser": "babel-eslint"
    },
    "rules": {
        "react/prop-types": ["warn", { "skipUndeclared": true }]
    }
}

```
