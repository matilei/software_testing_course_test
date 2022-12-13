import upperFirst  from '../src/upperFirst.js'

test('properly converts first character of string to upper case', () => {
    const testText = upperFirst("test123");

    expect(testText).toEqual("Test123")
})