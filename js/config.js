System.config({
  transpiler: 'babel',
  baseURL: '/js',
  map: {
    babel: '../node_modules/babel/node_modules/babel-core/browser.js',
    'cycle/core': '../node_modules/@cycle/core',
    'cycle/dom': '../node_modules/@cycle/dom',
    'rx': '../node_modules/rx'
  },
  packages :{
    '../node_modules/@cycle/core': {
      main: 'lib/cycle.js',
      format: 'cjs',
      defaultExtension: 'js'
    },
    '../node_modules/@cycle/dom': {
      main: 'lib/cycle-dom.js',
      format: 'cjs',
      defaultExtension: 'js'
    },
    '../node_modules/rx': {
      main: 'index.js',
      format: 'cjs',
      defaultExtension: 'js'
    }

  }
})
