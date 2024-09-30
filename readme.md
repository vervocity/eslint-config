# Vervocity JS Coding Standard

## Installation

> [!NOTE]  
> All eslint configurations are setup to be used with [prettier](https://prettier.io).

```sh
npm install --save-dev @vervocity/eslint-config
```

Create `eslint.config.mjs` file.

```js
import { eslint } from '@vervocity/eslint-config'

export default eslint.standard
```

Create `prettier.config.mjs`

```js
import { prettier } from '@vervocity/eslint-config'

export default prettier.standard
```

Create a `.prettierignore` to ignore files from prettier.

```
*.md
```

## Usage

```sh
npx prettier resources/js --check
```

```sh
npx eslint "resources/js/**/*.{js,ts,vue}"
```

If desired, add the following to your `package.json`. Make sure to update the `resources` path to the correct location.

```json
"scripts" {
    "lint": "npx eslint resources",
    "lint:fix": "npm run lint -- --fix",
    "prettier": "npx prettier resources --check",
    "prettier:fix": "npm run prettier -- --write",
    "format": "npm run prettier:fix && npm run lint:fix",
}
```

Then run the following to format your entire codebase.

```sh
npm run format
```

## VS Code

**Extensions**

-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

**Settings.json**

```json
{
    // Disable since we will be using `editor.codeActionsOnSave` instead
    "editor.formatOnSave": false,
    "eslint.format.enable": false,

    // Set the default formatter to prettier
    "editor.defaultFormatter": "esbenp.prettier-vscode",

    // Runs Prettier, then ESLint
    "editor.codeActionsOnSave": [
        // `source.formatDocument` will first run the defaultFormatter
        "source.formatDocument",
        // Then run eslint after prettier
        "source.fixAll.eslint"
    ]
}
```
