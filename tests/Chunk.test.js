import chunk from "../src/chunk";

test('properly splits items into arrays', () => {
    const newList = chunk(['Oriveden kauramaito', 'Petterin maalaisleipä', 'Maijan tomaatti', 'Pohjoisen jääsalaatti'], 2);

    /* CORRECT FUNCTIONALITY
    expect(newList).toEqual([['Oriveden kauramaito', 'Petterin maalaisleipä'], ['Maijan tomaatti', 'Pohjoisen jääsalaatti']])
    */

    // FALSE FUNCTIONALITY
    expect(newList).toEqual([['Maijan tomaatti', 'Pohjoisen jääsalaatti'], undefined]);
})