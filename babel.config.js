module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', {
      useBuiltIns: 'usage',
      corejs: 3,
      targets: {
        browsers: ['> 1%', 'last 2 versions', 'not dead', 'ie >= 11']
      }
    }]
  ],
  plugins: [
    '@babel/plugin-transform-optional-chaining',
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      },
      'vant'
    ]
  ],
  env: {
    production: {
      presets: [
        ['@babel/preset-env', {
          modules: false,
          targets: {
            browsers: ['> 1%', 'last 2 versions', 'not dead', 'ie >= 11']
          },
          useBuiltIns: 'usage',
          corejs: 3
        }]
      ]
    },
    test: {
      presets: [
        ['@babel/preset-env', {
          targets: { node: 'current' }
        }]
      ]
    }
  }
}
