import path from 'path';
import styleDictionary from 'style-dictionary';

styleDictionary.extend({
  source: [path.resolve(__dirname, 'tmp/transformed-figma-tokens.json')],

  platforms: {
    js: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          format: 'javascript/es6',
          destination: 'styles.ts',
          options: {
            showFileHeader: false
          }
        }
      ]
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'scss/',
      files: [{
        destination: 'tokens.scss',
        format: 'scss/variables',
        options: {
          showFileHeader: false
        }
      }]
    },
    less: {
      transformGroup: 'less',
      buildPath: 'less/',
      files: [{
        destination: 'tokens.less',
        format: 'less/variables',
        options: {
          showFileHeader: false
        }
      }]
    },
  }
}).buildAllPlatforms();
