import isArguments from "../src/isArguments";

test('properly compares objects', () => {

    expect(isArguments(function() { return arguments }())).toEqual(true)
})