/*
 * Grunt Commands
 * ==============
 * Use `grunt` in the root directory to select and run a specific task.
 */
module.exports = {
  'default': [
    'test',
    'build'
  ],

  // create the plugin
  'build': [
    'clean:dist',
    'sass:dist',
    'copy:dist',
    'umd',
    'uglify:dist'
  ],

  //tests
  'test': [
    'clean:tmp',
    'jasmine'
  ]
};
