module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    "space-before-function-paren":[0, "always"],
    "semi":[2,'always'],
    "one-var": 0,
    "quotes": 0,
    "eqeqeq": 0,
    "comma-spacing": 0,
    "no-useless-escape":0
  },
  globals: {}
}
