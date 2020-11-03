/*module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    "quotes": [2, "single", { "avoidEscape": true }],
    'jsx-quotes': [2, 'prefer-double'],
  }
};*/
module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  rules: {
    'import/no-unresolved': 'off',
    'react/destructuring-assignment': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 0,
    "react/jsx-props-no-spreading": "off",
    '@typescript-eslint/no-unused-vars': 'off',
    'no-nested-ternary': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['storybook/**'],
      },
    ],
    'no-irregular-whitespace': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'tsx', 'ts'] }],
    "import/order": [
      "error",
      {
        "groups": ["external", "builtin", "internal"],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react"],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ]
  },
};
