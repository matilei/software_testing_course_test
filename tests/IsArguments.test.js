import isArguments from "../src/isArguments";

test('properly returns if arguments', () => {
    expect(isArguments(function() { return arguments }())).toEqual(true)
})