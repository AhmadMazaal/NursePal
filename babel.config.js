module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            '&components': './src/components',
            '&controls': './src/controls',
            '&screens': './src/screens',
            '&globals': './src/globals',
            '&services': './src/services',
            '&types': './src/types',
            '&hooks': './src/hooks',
            '&assets': './assets',
            '&styles': './styles'
          },
        }
      ],
      [
        'module:react-native-dotenv',
        {
          'moduleName': '@env',
          'path': '.env',
          'blacklist': null,
          'whitelist': null,
          'safe': false,
          'allowUndefined': true
        }
      ]
    ],
  };
};
