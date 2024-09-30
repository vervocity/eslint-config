import eslintJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import neostandard from 'neostandard'

const eslintBase = [
    { languageOptions: { globals: globals.browser } },
    eslintJs.configs.recommended,
    ...neostandard({ noStyle: true }),
    {
        rules: { 'no-console': 'warn' },
    },
]

export const eslint = {
    base: eslintBase,
    standard: [...eslintBase, eslintConfigPrettier],
    vue3: [
        ...eslintBase,
        ...eslintPluginVue.configs['flat/recommended'],
        eslintConfigPrettier, // Remove stylistic eslint rules
        {
            rules: {
                'vue/multi-word-component-names': 'off',
                'vue/html-self-closing': ['error', { html: { void: 'any' } }],
            },
        },
    ],
    vue2: [
        ...eslintBase,
        ...eslintPluginVue.configs['flat/vue2-recommended'],
        eslintConfigPrettier, // Remove stylistic eslint rules
        {
            rules: {
                'vue/multi-word-component-names': 'off',
                'vue/html-self-closing': ['error', { html: { void: 'any' } }],
            },
        },
    ],
}

export default eslint.standard

export const prettier = {
    standard: {
        tabWidth: 4,
        semi: false,
        singleQuote: true,
        quoteProps: 'consistent',
        plugins: [
            'prettier-plugin-organize-imports',
            'prettier-plugin-tailwindcss',
        ],
    },
}
