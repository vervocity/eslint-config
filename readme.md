# Vervocity JS Coding Standard

```sh
npm i --save-dev @vervocity/eslint-config
```

Create `.eslintrc.js` file.
```js
module.exports = {
    'extends': [
        '@vervocity',
        // 'plugin:vue/vue3-recommended' // Vue 3.x
        // 'plugin:vue/recommended' // Vue 2.x
    ],
}
```

```sh
npx eslint "resources/js/**/*.{js,vue}"
```

## Vue projects

Add `vue/html-indent` rule eslint configuration file.
```js
module.exports = {
    'extends': [
        '@vervocity',
        // 'plugin:vue/vue3-recommended' // Vue 3.x
        // 'plugin:vue/recommended' // Vue 2.x
    ],
    'rules': {
        'vue/html-indent': [`error`, 4],
    },
}
```


## React & React Native projects

```js
module.exports = {
    'extends': [
        "@vervocity",
        "plugin:react/recommended"
    ],
    "rules": {
        "react/prop-types": ["warn", { "skipUndeclared": true }],
        "no-console": "off"
    },
}
```
