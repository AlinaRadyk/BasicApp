module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        path: '.env',
        envName: 'APP_ENV',
        moduleName: '@env',
        allowUndefined: false,
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          application: './src/application',
          config: './src/config',
          assets: './src/assets',
          modules: './src/modules',
          constants: './src/constants',
          helpers: './src/helpers',
          screens: './src/screens',
          services: './src/services',
          i18n: './src/i18n',
          hooks: './src/hooks',
          navigation: './src/navigation',
          components: './src/components',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console', 'react-native-paper/babel'],
    },
  },
};
