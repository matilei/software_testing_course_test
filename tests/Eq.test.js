import eq from "../src/eq";

test('properly compares objects', () => {
    const shoppingCartTotal = { 'total': 29.99 }
    const paymentTotal = { 'total': 29.99 }

    expect(eq(shoppingCartTotal, shoppingCartTotal)).toEqual(true)
    expect(eq(shoppingCartTotal, paymentTotal)).toEqual(false)
})