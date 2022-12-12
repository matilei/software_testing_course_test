import chunk from "../src/chunk";

test('properly splits items into arrays', () => {
    const newList = chunk(['Oriveden kauramaito', 'Petterin maalaisleipä', 'Maijan tomaatti', 'Pohjoisen jääsalaatti'], 2);

    /* CHUNK NOT WORKING PROPERLY, BELOW IS PASSING FALSELY
    expect(newList).toEqual([['Maijan tomaatti', 'Pohjoisen jääsalaatti'], undefined]);
    */

    expect(newList).toEqual([['Oriveden kauramaito', 'Petterin maalaisleipä'], ['Maijan tomaatti', 'Pohjoisen jääsalaatti']])
})