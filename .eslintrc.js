/*
 * @Author: wuxiaobin
 * @Date: 2022-05-08 21:16:47
 * @LastEditors: wuxiaobin
 * @LastEditTime: 2022-05-08 22:26:16
 * @FilePath: \vue3\.eslintrc.js
 */
/*eslint-disable */
module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended'
    ],
    "parser": "vue-eslint-parser",
    'parserOptions': {
        'ecmaVersion': 12,
        'parser': '@typescript-eslint/parser',
        'sourceType': 'module'
    },
    'plugins': [
        'vue',
        '@typescript-eslint'
    ],
    'rules': {
        "@typescript-eslint/no-explicit-any": ["off"]
    }
};
