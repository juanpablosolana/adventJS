const letter = 'bici carro rifle canicas  (rifle)';

function isValid(letter) {
  const letterSplit = letter.split('');
  console.log(letterSplit);
  for (let character = 0; character < letterSplit.length; character++) {
    if (letter[character].includes('[')
      || letterSplit[character].includes(']')
      || letterSplit[character].includes('{')
      || letterSplit[character].includes('}')
      || (letterSplit[character].includes('(') && letterSplit[character + 1].includes(')'))
      || (letter.includes('(') && !letter.includes(')'))
    ) {
      return false;
    }
  }
  return true
}

console.log(isValid(letter));
