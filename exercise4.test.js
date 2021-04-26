const multiplication = require('./exercise4')

test('multiplication 5 * 5 is 25', () => {
    expect(multiplication(5,5)).toBe(25)

    })
test('multiplication 2 * 6 is not 11' , () => {
    expect(multiplication(2,6)).not.toBe(11)
})