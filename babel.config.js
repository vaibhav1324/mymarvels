/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
const MODULE_RESOLVER = [
    'module-resolver',
    {
        "root": ['./src'],
        "alias": {
            "@api": './api',
            '@components': './components',
            '@constants': './constants',
            '@navigation': './navigation',
            "@res": './res',
            "@screens": './screens',
            "@types": './types',
        },
        "extensions": ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
    },
];

module.exports = {
    "plugins": [MODULE_RESOLVER],
    "presets": ['module:metro-react-native-babel-preset'],
};
