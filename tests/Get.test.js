import get  from '../src/get.js'

test('properly gets the value at path of object', () => {
    const object = { "Lihat" : {"Pertun Potkapalat" : {"Keskusvarasto" : 10, "Myymälä" : 2},
                                "Martin minuuttisuikaleet" : {"Keskusvarasto" : 3, "Myymälä" : 1},
                                "Liisan lihaisat luut" : {"Keskusvarasto" : 2, "Myymälä" : 7}}};

    expect(get(object, ['Lihat', 'Martin minuuttisuikaleet', 'Keskusvarasto'])).toEqual(3)
})