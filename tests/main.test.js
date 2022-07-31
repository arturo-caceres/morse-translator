import { translateToMorse, morseToEnglish } from '../scripts/main';

describe('Testing it should return the correct values from english to morse', () => {
  it('Should be able to translate a single letter of the english alphabet', () => {
    expect(translateToMorse('a')).toBe('.-');
  });
  it('Should be able to translate multiple letters(words) of the english language', () => {
    expect(translateToMorse('The quick brown fox jumps over a lazy dog')).toBe(
      '- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / .- / .-.. .- --.. -.-- / -.. --- --.'
    );
  });
  it('Should be able to translate individual spaces', () => {
    expect(translateToMorse(' ')).toBe('/');
  });
  it('Should be able return Invalid input when character is not recognised', () => {
    expect(translateToMorse('7')).toBe('Invalid Input');
  });
});

describe('Testing it should return the correct values from morse to english', () => {
  it('Should be able to translate a single morse code letter to an english letter', () => {
    expect(morseToEnglish('.-')).toBe('A');
  });
  it('Should be able to translate multiple morse codes to english words', () => {
    expect(
      morseToEnglish(
        '- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / .- / .-.. .- --.. -.-- / -.. --- --.'
      )
    ).toBe('THE QUICK BROWN FOX JUMPS OVER A LAZY DOG');
  });
  it('Should be able to translate "/" individual spaces to "" ', () => {
    expect(morseToEnglish('/')).toBe(' ');
  });
  it('Should be able return Invalid input when character is not recognised', () => {
    expect(morseToEnglish(']')).toBe('Invalid Input');
  });
});
