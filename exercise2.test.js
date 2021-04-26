const sum = require('./exercise2')

test('sum 5 + 5 is 10', () => {
  expect(sum(5, 5)).toBe(10)
})
test('sum 2 + 2 is not 5', () => {
  expect(sum(2, 2)).not.toBe(5)
})