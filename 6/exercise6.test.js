const multiplicationTable = require('./exercise6')

test('if multiplier is undefined then multiplier is equal to 10', () => {
    expect(multiplicationTable(5, undefined)).toEqual[
      0,
      5,
      10,
      15,
      20,
      25,
      30,
      35,
      40,
      45,
      50
    ]
  })
  
  test('multiplicando is 5 and multiplier 5', () => {
    expect(multiplicationTable(5, 5)).toEqual([0, 5, 10, 15, 20, 25,])
  })