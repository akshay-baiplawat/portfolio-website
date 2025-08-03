module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    globals: {
        AOS: 'readonly',
        Typed: 'readonly',
        PureCounter: 'readonly',
        GLightbox: 'readonly',
        Isotope: 'readonly',
        imagesLoaded: 'readonly',
        Swiper: 'readonly'
    },
    extends: ['eslint:recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
    },
    plugins: ['@typescript-eslint', 'import', 'security'],
    rules: {
        // TypeScript specific rules
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/prefer-const': 'off',
        '@typescript-eslint/no-var-requires': 'off',

        // General rules
        'no-console': 'warn',
        'no-debugger': 'error',
        'prefer-const': 'error',
        'no-var': 'error',

        // Import rules
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always'
            }
        ],

        // Security rules
        'security/detect-object-injection': 'warn',
        'security/detect-non-literal-regexp': 'warn',
        'security/detect-unsafe-regex': 'error'
    },
    ignorePatterns: ['dist/', 'node_modules/', '*.config.js', 'src/test/', 'src/js/', 'src/types/']
};
