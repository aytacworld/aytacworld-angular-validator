const pkg = require('./package.json');

export default {
  output: {
    file: 'dist/bundles/' + pkg.name + '.umd.js',
    format: 'umd'
  },
  input: 'dist/index.js',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/forms': 'ng.forms',
    'rxjs': 'rxjs',
    'validator': 'validator'
  },
  name: 'ng.formValidators',
  sourceMap: false,
  external: ['@angular/core', '@angular/forms', 'rxjs', 'validator']
}
