module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'jsx-quotes': [2, 'prefer-double'],
    '@typescript-eslint/no-unused-vars': 'off',
    'no-extra-boolean-cast': 'off',
    'react-native/no-inline-styles': 'off',
  },
};
