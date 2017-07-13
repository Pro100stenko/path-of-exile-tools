module.exports = {
  extends: "airbnb",
  env: {
    browser: true,
    jest: true,
  },
  plugins: [
    "jest"
  ],
  rules: {
    "quotes": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/prefer-stateless-function": 0,
    "react/require-default-props": 0,
    "spaced-comment": 0,
    "react/no-children-prop": 0,
    "import/prefer-default-export": 0,
    "arrow-body-style": 0,
    "no-console": 0,
    "radix": 0,
  }
}
