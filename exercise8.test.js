const nested = require('./exercise8')

test('square 2² + 2² is 8' , () => {
    expect(nested(2,2)).toBe(8)
})
test('square 3² + 2² is not 15' , () => {
    expect(nested(3 ,2)).not.toBe(15)
})