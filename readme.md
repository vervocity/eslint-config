# Vervocity JS Coding Standard

```sh
npm i @vervocity/eslint-config
```

Create `.eslintrc.js` file.
```js
module.exports = {
    'extends': [
        '@vervocity',
        // 'plugin:vue/vue3-recommended' // Vue 3.x
        // 'plugin:vue/recommended' // Vue 2.x
    ]
}
```

```sh
npx eslint "resources/js/**/*.{js,vue}"
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
