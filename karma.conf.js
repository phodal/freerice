module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'requirejs'],
    files: [
      {pattern: 'web/lib/**/*.js', included: false},
      {pattern: 'web/test/lib/**/*.js', included: false},
      {pattern: 'web/test/spec/*Spec.js', include: false},
      'web/test/test-main.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true
  });
};
