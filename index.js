import eslintJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintReactPlugin from 'eslint-plugin-react'
import eslintPluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import neostandard from 'neostandard'
import eslintTs from 'typescript-eslint'

const eslintBase = [
    { languageOptions: { globals: globals.browser } },
    eslintJs.configs.recommended,
    ...neostandard({ noStyle: true, ts: true }),
    {
        rules: { 'no-console': 'warn' },
    },
]

const vuePostPrettier = {
    rules: {
        'vue/multi-word-component-names': 'off',
        'vue/html-self-closing': ['error', { html: { void: 'any' } }],
        'vue/block-order': [
            'error',
            {
                order: ['template', 'script', 'style'],
            },
        ],
    },
}

const vueTs = {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: eslintTs.parser } },
}

export const eslint = {
    'base': eslintBase,
    'standard': [...eslintBase, eslintConfigPrettier],
    'standard-ts': [
        ...eslintBase,
        ...eslintTs.configs.recommended,
        eslintConfigPrettier,
    ],
    'react': [
        ...eslintBase,
        eslintReactPlugin.configs.flat.recommended,
        {
            rules: {
                'react/prop-types': ['warn', { skipUndeclared: true }],
                'no-console': 'off',
            },
        },
        eslintConfigPrettier,
    ],
    'vue3': [
        ...eslintBase,
        ...eslintPluginVue.configs['flat/recommended'],
        eslintConfigPrettier, // Remove stylistic eslint rules
        vuePostPrettier,
    ],
    'vue3-ts': [
        ...eslintBase,
        ...eslintTs.configs.recommended,
        ...eslintPluginVue.configs['flat/recommended'],
        vueTs,
        eslintConfigPrettier, // Remove stylistic eslint rules
        vuePostPrettier,
    ],
    'vue2': [
        ...eslintBase,
        ...eslintPluginVue.configs['flat/vue2-recommended'],
        eslintConfigPrettier, // Remove stylistic eslint rules
        vuePostPrettier,
    ],
    'vue2-ts': [
        ...eslintBase,
        ...eslintTs.configs.recommended,
        ...eslintPluginVue.configs['flat/vue2-recommended'],
        vueTs,
        eslintConfigPrettier, // Remove stylistic eslint rules
        vuePostPrettier,
    ],
}

export default eslint.standard

export const prettier = {
    standard: {
        tabWidth: 4,
        semi: false,
        singleQuote: true,
        quoteProps: 'consistent',
        arrowParens: 'avoid',
        organizeImportsSkipDestructiveCodeActions: true,
        plugins: [
            'prettier-plugin-organize-imports',
            'prettier-plugin-tailwindcss',
        ],
    },
}
