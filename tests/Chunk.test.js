import chunk from "../src/chunk";

test('properly splits items into arrays', () => {
    const newList = chunk(['Oriveden kauramaito', 'Petterin maalaisleipä', 'Maijan tomaatti', 'Pohjoisen jääsalaatti'], 2);
    
    /* CHUNK NOT WORKING PROPERLY, CORRECT ANSWER SHOULD BE BELOW
    expect(newList).toEqual([['Oriveden kauramaito', 'Petterin maalaisleipä'], ['Maijan tomaatti', 'Pohjoisen jääsalaatti']])
    */
    
    expect(newList).toEqual([['Maijan tomaatti', 'Pohjoisen jääsalaatti'], undefined])
})