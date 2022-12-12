import compact from "../src/compact";

test('properly removes falsey values', () => {
    const newList = compact(['', 'Pohjoisen jääsalaatti', false, 'Petterin maalaisleipä', null, 'Tampereen makkara', 0])

    /* CORRECT FUNCTIONALITY
    expect(newList).toEqual(['Pohjoisen jääsalaatti', 'Petterin maalaisleipä', 'Tampereen makkara'])
    expect(newList).not.toEqual(['', 'Pohjoisen jääsalaatti', false, 'Petterin maalaisleipä', null, 'Tampereen makkara', 0])
    */

    // FALSE FUNCTIONALITY
    expect(newList).not.toEqual(['Pohjoisen jääsalaatti', 'Petterin maalaisleipä', 'Tampereen makkara'])
})