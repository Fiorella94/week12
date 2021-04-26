const division = require('./exercise5')

test('division 2 / 0 is undefined', () => {
    expect(division(2,0)).toBe('cannot be divided by zero')
})
test('division 14 / 2 is 7', () => {
      expect(division(14,2)).toBe(7)
  })
test('division 10 / 2 is not 4', () => {
    expect(division(10,2)).not.toBe(4)
})