/** @type {import('prettier').Config} */
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  tailwindFunctions: ['cn'],
  tailwindAttributes: ['tw'],
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
};
