/* eslint-env node */
module.exports = {
    root: true,
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-typescript",
    ],
    parserOptions: {
        ecmaVersion: "latest",
    },
    plugins: [
        "import",
    ],
    rules: {
        indent: [
            "error",
            4,
            {
                SwitchCase: 1,
                ArrayExpression: 1,
                ObjectExpression: 1,
                ignoredNodes: [
                    "PropertyDefinition",
                ],
            },
        ],
        "max-len": [ "error", 120 ],
        "array-bracket-spacing": [ "error", "always" ],
        "arrow-parens": [ "error", "always" ],
        "arrow-spacing": [ "error", { before: true, after: true } ],
        "brace-style": [ "error", "1tbs" ],
        "comma-dangle": [ "error", "always-multiline" ],
        "comma-spacing": [ "error", { before: false, after: true } ],
        "linebreak-style": "off",
        "newline-before-return": "error",
        "no-const-assign": "error",
        "no-duplicate-imports": "error",
        "no-multi-assign": "error",
        "no-multiple-empty-lines": "error",
        "no-new-object": "error",
        "no-unreachable": "error",
        "no-unneeded-ternary": "error",
        "no-useless-constructor": "error",
        "nonblock-statement-body-position": [ "error", "beside" ],
        "object-curly-spacing": [ "error", "always" ],
        "operator-linebreak": [ "error", "before" ],
        "padded-blocks": [ "error", "never" ],
        "prefer-const": "error",
        "prefer-destructuring": [ "error", { object: true, array: true } ],
        "prefer-template": "error",
        "quote-props": [ "error", "as-needed" ],
        quotes: [ "error", "double" ],
        semi: [ "error", "always" ],
        "space-before-blocks": [ "error", "always" ],
        "space-before-function-paren": [ "error", "never" ],
        "space-in-parens": [ "error", "never" ],
        "template-curly-spacing": [ "error", "never" ],
        "import/order": [
            "error",
            {
                groups: [
                    [ "builtin", "external" ],
                    [ "parent", "sibling", "index" ],
                    "internal", 

                ],
                "newlines-between": "always",
                pathGroups: [
                    {
                        pattern: "@/**",
                        group: "external",
                        position: "after",
                    },
                    {
                        pattern:
            "./",
                        group: "internal",
                    },
                ],
                pathGroupsExcludedImportTypes: [ "builtin" ],
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
        "import/no-relative-parent-imports": "off",
        "vue/html-indent": [ "error", 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: [],
        } ],
        "vue/singleline-html-element-content-newline": "off",
        "vue/order-in-components": "error",
        "vue/require-prop-types": "error",
        "vue/require-default-prop": "error",
        "vue/no-v-html": "off",
        "vue/attributes-order": "error",
        "vue/multi-word-component-names": "error",
        "vue/padding-line-between-blocks": "error",
        "vue/mustache-interpolation-spacing": "error",
        "vue/html-closing-bracket-spacing": "error",
        "vue/html-closing-bracket-newline": "error",
        "vue/html-self-closing": "error",
        "vue/first-attribute-linebreak": "error",
        "vue/multiline-html-element-content-newline": "error",
        "vue/attribute-hyphenation": "error",
        "vue/max-attributes-per-line": [ "error", {
            singleline: {
                max: 1,
            },
            multiline: {
                max: 1,
            },
        } ],
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "vue/no-deprecated-slot-attribute": "off",
        "@typescript-eslint/no-explicit-any": "off",
    },
};
