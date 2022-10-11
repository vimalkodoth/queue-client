module.exports = {
  root: true,
  extends: ['airbnb-base', 'airbnb-typescript/base'],
  plugins: ['import', 'prettier'],
  rules: {
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/static-property-placement': 0,
    'jsx-a11y/alt-text': 0,
    'react/jsx-props-no-spreading': 0,
  },
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
};
