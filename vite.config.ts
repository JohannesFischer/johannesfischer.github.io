import react from "@vitejs/plugin-react";
import { defineConfig, lazyPlugins } from "vite-plus";

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        kicks: "./kicks/index.html",
        main: "./index.html",
        mujin: "./mujin/index.html",
      },
      output: {
        manualChunks: (id) => {
          if (
            id.includes("node_modules/react") ||
            id.includes("node_modules/react-dom")
          ) {
            return "vendor";
          }
        },
      },
    },
  },
  fmt: {
    ignorePatterns: [],
    printWidth: 80,
    semi: true,
    singleQuote: false,
    sortPackageJson: false,
    tabWidth: 2,
    trailingComma: "all",
  },
  lint: {
    categories: {
      correctness: "warn",
    },
    env: {
      builtin: true,
    },
    ignorePatterns: ["dist"],
    jsPlugins: [
      {
        name: "vite-plus",
        specifier: "vite-plus/oxlint-plugin",
      },
    ],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    overrides: [
      {
        env: {
          browser: true,
          es2020: true,
        },
        files: ["**/*.{ts,tsx}"],
        jsPlugins: ["eslint-plugin-perfectionist"],
        plugins: ["react"],
        rules: {
          "constructor-super": "error",
          "for-direction": "error",
          "getter-return": "error",
          "no-array-constructor": "error",
          "no-async-promise-executor": "error",
          "no-case-declarations": "error",
          "no-class-assign": "error",
          "no-compare-neg-zero": "error",
          "no-cond-assign": "error",
          "no-const-assign": "error",
          "no-constant-binary-expression": "error",
          "no-constant-condition": "error",
          "no-control-regex": "error",
          "no-debugger": "error",
          "no-delete-var": "error",
          "no-dupe-class-members": "error",
          "no-dupe-else-if": "error",
          "no-dupe-keys": "error",
          "no-duplicate-case": "error",
          "no-empty": "error",
          "no-empty-character-class": "error",
          "no-empty-pattern": "error",
          "no-empty-static-block": "error",
          "no-ex-assign": "error",
          "no-extra-boolean-cast": "error",
          "no-fallthrough": "error",
          "no-func-assign": "error",
          "no-global-assign": "error",
          "no-import-assign": "error",
          "no-invalid-regexp": "error",
          "no-irregular-whitespace": "error",
          "no-loss-of-precision": "error",
          "no-misleading-character-class": "error",
          "no-new-native-nonconstructor": "error",
          "no-nonoctal-decimal-escape": "error",
          "no-obj-calls": "error",
          "no-prototype-builtins": "error",
          "no-redeclare": "error",
          "no-regex-spaces": "error",
          "no-self-assign": "error",
          "no-setter-return": "error",
          "no-shadow-restricted-names": "error",
          "no-sparse-arrays": "error",
          "no-this-before-super": "error",
          "no-undef": "error",
          "no-unexpected-multiline": "error",
          "no-unreachable": "error",
          "no-unsafe-finally": "error",
          "no-unsafe-negation": "error",
          "no-unsafe-optional-chaining": "error",
          "no-unused-expressions": "error",
          "no-unused-labels": "error",
          "no-unused-private-class-members": "error",
          "no-unused-vars": "error",
          "no-useless-backreference": "error",
          "no-useless-catch": "error",
          "no-useless-escape": "error",
          "no-with": "error",
          "perfectionist/sort-array-includes": [
            "error",
            {
              order: "asc",
              type: "natural",
            },
          ],
          "perfectionist/sort-classes": [
            "error",
            {
              order: "asc",
              type: "natural",
            },
          ],
          "perfectionist/sort-decorators": [
            "error",
            {
              order: "asc",
              type: "natural",
            },
          ],
          "perfectionist/sort-enums": [
            "error",
            {
              order: "asc",
              type: "natural",
            },
          ],
          "perfectionist/sort-export-attributes": [
            "error",
            {
              order: "asc",
              type: "natural",
            },
          ],
          "perfectionist/sort-exports": [
            "error",
            {
              order: "asc",
              type: "natural",
            },
          ],
          "perfectionist/sort-heritage-clauses": [
            "error",
            {
              order: "asc",
              type: "natural",
            },
          ],
          "perfectionist/sort-import-attributes": [
            "error",
            {
              order: "asc",
              type: "natural",
            },
          ],
          "perfectionist/sort-interfaces": [
            "error",
            {
              order: "asc",
              type: "natural",
            },
          ],
          "perfectionist/sort-intersection-types": "off",
          "perfectionist/sort-jsx-props": [
            "error",
            {
              order: "asc",
              type: "natural",
            },
          ],
          "perfectionist/sort-maps": [
            "error",
            {
              order: "asc",
              type: "natural",
            },
          ],
          "perfectionist/sort-modules": [
            "error",
            {
              order: "asc",
              type: "natural",
            },
          ],
          "perfectionist/sort-named-exports": [
            "error",
            {
              order: "asc",
              type: "natural",
            },
          ],
          "perfectionist/sort-named-imports": [
            "error",
            {
              order: "asc",
              type: "natural",
            },
          ],
          "perfectionist/sort-object-types": [
            "error",
            {
              order: "asc",
              type: "natural",
            },
          ],
          "perfectionist/sort-objects": [
            "error",
            {
              styledComponents: false,
            },
          ],
          "perfectionist/sort-sets": [
            "error",
            {
              order: "asc",
              type: "natural",
            },
          ],
          "perfectionist/sort-switch-case": [
            "error",
            {
              order: "asc",
              type: "natural",
            },
          ],
          "perfectionist/sort-union-types": "off",
          "perfectionist/sort-variable-declarations": [
            "error",
            {
              order: "asc",
              type: "natural",
            },
          ],
          "react/error-boundaries": "error",
          "react/exhaustive-deps": "warn",
          "react/globals": "error",
          "react/immutability": "error",
          "react/incompatible-library": "warn",
          "react/only-export-components": [
            "error",
            {
              allowConstantExport: true,
            },
          ],
          "react/preserve-manual-memoization": "error",
          "react/purity": "error",
          "react/refs": "error",
          "react/rules-of-hooks": "error",
          "react/set-state-in-effect": "error",
          "react/set-state-in-render": "error",
          "react/static-components": "error",
          "react/unsupported-syntax": "warn",
          "react/use-memo": "error",
          "require-yield": "error",
          "typescript/ban-ts-comment": "error",
          "typescript/no-duplicate-enum-values": "error",
          "typescript/no-empty-object-type": "error",
          "typescript/no-explicit-any": "error",
          "typescript/no-extra-non-null-assertion": "error",
          "typescript/no-misused-new": "error",
          "typescript/no-namespace": "error",
          "typescript/no-non-null-asserted-optional-chain": "error",
          "typescript/no-require-imports": "error",
          "typescript/no-this-alias": "error",
          "typescript/no-unnecessary-type-constraint": "error",
          "typescript/no-unsafe-declaration-merging": "error",
          "typescript/no-unsafe-function-type": "error",
          "typescript/no-wrapper-object-types": "error",
          "typescript/prefer-as-const": "error",
          "typescript/prefer-namespace-keyword": "error",
          "typescript/triple-slash-reference": "error",
          "use-isnan": "error",
          "valid-typeof": "error",
        },
      },
      {
        files: [
          "**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)",
          "**/*.story.@(ts|tsx|js|jsx|mjs|cjs)",
        ],
        jsPlugins: ["eslint-plugin-storybook"],
        plugins: ["react", "import"],
        rules: {
          "import/no-anonymous-default-export": "off",
          "react/rules-of-hooks": "off",
          "storybook/await-interactions": "error",
          "storybook/context-in-play-function": "error",
          "storybook/default-exports": "error",
          "storybook/hierarchy-separator": "warn",
          "storybook/no-redundant-story-name": "warn",
          "storybook/no-renderer-packages": "error",
          "storybook/prefer-pascal-case": "warn",
          "storybook/story-exports": "error",
          "storybook/use-storybook-expect": "error",
          "storybook/use-storybook-testing-library": "error",
        },
      },
      {
        files: [".storybook/main.@(js|cjs|mjs|ts)"],
        jsPlugins: ["eslint-plugin-storybook"],
        rules: {
          "storybook/no-uninstalled-addons": "error",
        },
      },
    ],
    plugins: ["oxc", "typescript", "unicorn"],
    rules: {
      "vite-plus/prefer-vite-plus-imports": "error",
    },
  },
  plugins: lazyPlugins(() => [react()]),
  staged: {
    "*.{css,json,md}": "vp fmt",
    "*.{ts,tsx}": ["vp lint --fix", "vp fmt"],
  },
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://viteplus.dev/guide/vitest-v5#remove-unneeded-compatibility-settings
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false,
  },
});
