const potencia = require('./exercise7')

test('multiplication 3^3 is 27' , () => {
    expect(potencia(3,3)).toBe(27)
})
test('multiplication 2^3 is not 9' , () => {
    expect(potencia(2,3)).not.toBe(9)
})