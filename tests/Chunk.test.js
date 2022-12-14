import chunk from "../src/chunk";

test('properly splits items into arrays', () => {
    const newList = chunk(['Oriveden kauramaito', 'Petterin maalaisleipä', 'Maijan tomaatti', 'Pohjoisen jääsalaatti'], 2);

    expect(newList).toEqual([['Oriveden kauramaito', 'Petterin maalaisleipä'], ['Maijan tomaatti', 'Pohjoisen jääsalaatti']]);
})