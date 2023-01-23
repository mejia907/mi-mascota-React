module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins:[
    [
      'module-resolver',
      {
        alias:{
          '@routes': './src/routes',
          '@controllers': './src/controllers',
          '@config': './src/config',
          '@models': './src/models',
          '@interfaces': './src/interfaces',
          '@services': './src/services',
          '@utils': './src/utils',
          '@middlewares': './src/middlewares'
        }
      }
    ]
  ],
  ignore: ['**/**.spec.ts']
};
