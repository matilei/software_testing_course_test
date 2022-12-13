import isEmpty  from '../src/isEmpty.js'

test('properly checks if value is empty', () => {
    const array = isEmpty(["Maisan maalipurkki", "Pertin perunajauho", "Juuson juustoviipaleet"]);
    const map = isEmpty({"Maisan maalipurkki" : 2});
    const empty = isEmpty([]);

    expect(array).toEqual(false);
    expect(map).toEqual(false);
    expect(empty).toEqual(true);
})