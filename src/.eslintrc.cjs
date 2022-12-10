module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript/recommended',
        '@vue/eslint-config-prettier',
    ],
    rules: {
        semi: [2, 'always'],
        'vue/multi-word-component-names': 'off',
        '@typescript-eslint/no-non-null-assertion': 'warn',
    },
    env: {
        'vue/setup-compiler-macros': true,
    },
};
