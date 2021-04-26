const substract = require('./exercise3')

test('substract 20 - 10 is 10', () => {
    expect(substract(20,10)).toBe(10)
})
test('substract 15 - 5 is 10' , () => {
    expect(substract(15,5)).toBe(10)
})
  