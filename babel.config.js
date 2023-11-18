module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
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
          i18n: './src/i18n',
          services: './src/services',
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
