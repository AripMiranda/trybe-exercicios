let palavra = 'Ariana';
let reverseWord = '';

for (let index = 0; index < palavra.length; index += 1) {
  reverseWord += palavra[palavra.length - 1 - index];
}

console.log(reverseWord);