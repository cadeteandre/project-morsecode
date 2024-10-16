import './style.css'
import { morseAlphabet } from './morseAlphabet'

const inputMessage = document.querySelector('#inputMessage') as HTMLInputElement;
const encrypt = document.querySelector('#encrypt') as HTMLElement;
const output = document.querySelector('#output') as HTMLElement;

encrypt.addEventListener('click', () => {
  output.textContent = '';
  const message = inputMessage.value;
  const messageArr = message.toUpperCase().split('');
  for(let i: number = 0; i < message.length; i++) {
    morseAlphabet.forEach((elt) => {
      const letterLow = elt.letter;
      if(messageArr[i] === letterLow) {
        messageArr[i] = elt.morseCode;
      };
    });
  };
  output.textContent = messageArr.join('')
});


// ? Minyeong version: 

// encrypt.addEventListener("click", () => {
//   output.innerHTML = "";
//   let textValue: string = inputMessage.value.toUpperCase().trim();
//   let letterArr: string[] = textValue.split("");
//   letterArr.forEach((letter) => {
//     const objectMorse = morseAlphabet.find((elt) => elt.letter === letter);

//     output.innerHTML += objectMorse?.morseCode;
//   });
// });