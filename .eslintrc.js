module.exports = {
    parserOptions: {
        parser: 'babel-eslint'
    },
    // Комплекты конфигураций Eslint
    extends: [
        'plugin:vue/recommended' /* Конфигурация для Vue.js 2.x. Базовые правила 
      для обеспечения соблюдения субъективных значений по умолчанию сообщества для обеспечения согласованности */
    ],
    // Регулировка правил Eslint
    rules: {
        'eol-last': ['error', 'never'], // Нужен ли пробел вконце документа (always - нужен, never - не нужен)

        'vue/html-self-closing': [
            'error',
            {
                html: { void: 'always' }
            }
        ],

        'vue/max-attributes-per-line': 'off',

        'vue/html-indent': ['error', 4] // Размер таба в пробелах

        // инфу по правилам можно найти здесь https://eslint.vuejs.org/rules
    }
};