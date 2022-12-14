import compact from "../src/compact";

test('properly removes falsey values', () => {
    const newList = compact(['', 'Pohjoisen jääsalaatti', false, 'Petterin maalaisleipä', null, 'Tampereen makkara', 0])

    expect(newList).toEqual(['Pohjoisen jääsalaatti', 'Petterin maalaisleipä', 'Tampereen makkara'])
})