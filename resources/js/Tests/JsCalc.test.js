const addString = require('../Helpers')

test('sums string 1,2,3 to equal 6', () => {
    expect(addString('1,2,3')).toStrictEqual({
        inputArr: [1,2,3],
        delimiter: null,
        total: 6
    })
})

test('sums string 5,10,20 to equal 35', () => {
    expect(addString('5,10,20')).toStrictEqual({
        inputArr: [5,10,20],
        delimiter: null,
        total: 35
    })
})

test('sums string 5,1001,20 ignore > 100 to equal 25', () => {
    expect(addString('5,1001,20')).toStrictEqual({
        inputArr: [5,20],
        delimiter: null,
        total: 25
    })
})

test('sums string 5,10,20 use delimiter : to equal 35', () => {
    expect(addString('//:\\n5:10:20')).toStrictEqual({
        inputArr: [5,10,20],
        delimiter: [':'],
        total: 35
    })
})

test('sums string 5,10,-20 to equal "Error: negative numbers used"', () => {
    expect(addString('5,10,-20')).toStrictEqual({
        inputArr: [5,10,-20],
        delimiter: null,
        total: "Error: negative numbers used",
        error:true
    })
})
