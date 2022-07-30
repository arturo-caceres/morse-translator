import { morseToEnglish, translateToMorse } from './main.js';

const mainInp = document.getElementById('inputText');
const morseInp = document.getElementById('inputMorse');
const mainBtn = document.getElementById('primaryBtn');
const secondaryBtn = document.getElementById('secondaryBtn');

mainBtn.addEventListener('click', () => {
  const mainValue = mainInp.value;
  const englishToMorseValue = translateToMorse(mainValue);
  morseInp.value = englishToMorseValue;
});

secondaryBtn.addEventListener('click', () => {
  const secondaryValue = morseInp.value;
  const morseToEnglishValue = morseToEnglish(secondaryValue);
  mainInp.value = morseToEnglishValue;
});
