const carta = 'bici coche balón _playstation bici coche peluche  rosa    verde        rifle bici';

function listGifts(letter) {
  const items = []
  const gifts = {}
  const letterSplit = letter.split(' ');
  for (let character = 0; character < letterSplit.length; character++) {
    if (letterSplit[character] !== '') {
      letterSplit[character].includes('_')? console.log('Saludos midu xD') :items.push(letterSplit[character])
    }
  }
items.forEach(item => {gifts[item] = (gifts[item] || 0) + 1})
return gifts
}
const regalos = listGifts(carta)

console.log(regalos)