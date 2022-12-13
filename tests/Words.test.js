import words  from '../src/words.js'

test('properly splits string to array of its words', () => {
    const text = 'Sirkan sekapallerot sisältävät ruista, vehnäryynejä, kaalisalaattia ja perunaa';
    const textWords = ['Sirkan', 'sekapallerot', 'sisältävät', 'ruista', 'vehnäryynejä', 'kaalisalaattia', 'ja', 'perunaa'];
    const word = /vehnä/;
    const resultword = ['vehnä'];

    expect(words(text)).toEqual(textWords);
    expect(JSON.stringify(words(text, word))).toEqual(JSON.stringify(resultword));
})