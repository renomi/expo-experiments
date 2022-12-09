module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@assets': './assets',
            '@components': './src/components',
            '@ui': './src/ui',
            '@hooks': './src/hooks',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@api': './src/api',
            '@store': './src/store',
            '@utils': './src/utils',
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: ['transform-remove-console'], //removing consoles.log from app during release (production) versions
      },
    },
  };
};
