const leftZero = require('./exercise9')

test('Returns a string with leading zeros, the result is 00060', () => {
  expect(leftZero(60, 5)).toEqual('00060')
})

test('Returns a string with leading zeros, the result is 001', () => {
  expect(leftZero(1, 3)).toEqual('001')
})