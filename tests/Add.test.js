import add  from '../src/add.js'

test('properly adds two numbers', () => {
    expect(add(2.95, 3.49)).toEqual(6.44)
    expect(add(9.95, 2.59)).not.toEqual(12.64)
})