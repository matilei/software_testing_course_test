import capitalize  from '../src/capitalize.js'

test('properly converts first character to upper case and rest to lower case', () => {
    const testText = capitalize("tEsT123");

    expect(testText).toEqual("Test123")
})