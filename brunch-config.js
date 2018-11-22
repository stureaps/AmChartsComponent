module.exports = {
  files: {
    javascripts: { joinTo: 'bundle.js' },
    stylesheets: { joinTo: 'bundle.css' }
  },

  modules: {
    autoRequire: {
      'bundle.js': ['index']
    }
  },

  npm: {
    static: [
      'node_modules/amcharts3/amcharts/amcharts.js',
      'node_modules/amcharts3/amcharts/funnel.js',
      'node_modules/amcharts3/amcharts/gantt.js',
      'node_modules/amcharts3/amcharts/gauge.js',
      'node_modules/amcharts3/amcharts/pie.js',
      'node_modules/amcharts3/amcharts/radar.js',
      'node_modules/amcharts3/amcharts/serial.js',
      'node_modules/amcharts3/amcharts/xy.js'
    ]
  },

  paths: {
    public: 'AppHtml/amCharts'
  },

  plugins: {
    copyfilemon: {
      'images': ['node_modules/amcharts3/amcharts/images'],
      'patterns': ['node_modules/amcharts3/amcharts/patterns']
    }
  }
};
