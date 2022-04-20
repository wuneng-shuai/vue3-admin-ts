const { getStylelintConfig } = require('@iceworks/spec');

// https://www.npmjs.com/package/@iceworks/spec
module.exports = getStylelintConfig('vue', {
  "root": true,
  "env": {
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 2020
  },
  "rules": {
    "no-console": "off",
    "no-debugger": "off"
  }
});
