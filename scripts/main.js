import morseVocabulary, { reversedMorse } from './morse-vocab.js';

export function translateToMorse(englishText) {
  const wordExtendedEnglish = englishText
    .toUpperCase()
    .split('')
    .map((letter) => {
      letter = morseVocabulary[letter] || 'Invalid Input';
      return letter;
    })
    .join(' ');

  return wordExtendedEnglish;
}

export function morseToEnglish(morseText) {
  const wordExtendedMorse = morseText
    .split(' ')
    .map((code) => {
      code = reversedMorse[code] || 'Invalid Input';
      return code;
    })
    .join('');

  return wordExtendedMorse;
}

export default translateToMorse;
