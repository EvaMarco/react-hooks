module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        commonjs: true,
        es6: true,
        jest:true,
    },
    extends: ["plugin:react/recommended", "airbnb", "prettier"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "comma-dangle": "off",
        "global-require": "off",
        "max-len": [
            "warn",
            {
                code: 100,
            },
        ],
        "no-multiple-empty-lines": [
            "warn",
            {
                max: 1,
            },
        ],
        semi: "error",
        "sort-imports": [
            "off",
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
            },
        ],
        indent: "off",

        "import/prefer-default-export": "warn",
        "vars-on-top": "warn",
        "no-var": "warn",
        "prefer-const": "warn",
        "prefer-destructuring": "warn",
        "no-restricted-syntax": "warn",
        "prefer-template": "warn",
        "object-shorthand": "warn",
        "no-plusplus": "warn",
        "consistent-return": "warn",
        "import/no-useless-path-segments": "warn",
        "import/newline-after-import": "warn",
        "import/no-unresolved": "off",
        "import/order": "off",
        "no-else-return": "warn",
        "array-callback-return": "warn",
        "prefer-arrow-callback": "warn",
        "import/extensions": "warn",
        "no-prototype-builtins": "warn",
        "no-param-reassign": "warn",
        "arrow-body-style": "off",
        "import/no-extraneous-dependencies": "warn",
        "default-case": "warn",
        "no-empty": "warn",
        "no-case-declarations": "warn",
        "guard-for-in": "warn",
        "max-classes-per-file": "warn",
        "prefer-object-spread": "warn",
        "class-methods-use-this": "warn",
        "one-var": "off",
        "no-underscore-dangle": "warn",
        "import/no-named-as-default": "warn",
        "no-continue": "warn",
        "import/export": "warn",
        "no-lonely-if": "warn",
        "block-scoped-var": "warn",
        radix: "warn",
        "operator-assignment": "warn",
        "no-nested-ternary": "warn",
        "no-useless-return": "warn",
        "no-multi-assign": "warn",
        "no-useless-concat": "warn",
        "no-restricted-globals": "warn",
        "no-bitwise": "warn",
        "no-useless-catch": "warn",
        "new-cap": "warn",
        "no-extend-native": "warn",
        "prefer-rest-params": "warn",
        "no-restricted-properties": "warn",
        "import/no-mutable-exports": "warn",
        "no-extra-boolean-cast": "warn",
        "no-cond-assign": "warn",
        "import/first": "warn",
        "no-import-assign": "warn",
        "no-redeclare": "warn",

        "no-unused-vars": "warn",
        "import/no-duplicates": "warn",
        "spaced-comment": "warn",
        "no-useless-escape": "warn",
        "prefer-promise-reject-errors": "warn",
        "no-func-assign": "warn",
        yoda: "off",
    },
    overrides: [
      {
        "files": [
          "**/*.spec.js",
          "**/*.spec.jsx",
          "**/*.test.jsx"
        ],
        "env": {
          "jest": true
        }
      }
    ],
};
