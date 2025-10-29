module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Importante: ¡Reanimated debe ser el ÚLTIMO plugin en la lista!
      'react-native-reanimated/plugin',
    ],
  };
};