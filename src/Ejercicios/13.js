function wrapGifts(gifts) {
  // ¡No olvides compartir tu solución en redes!
  if (gifts.length === 0) {
    return [];
  }
  const gift = []
  let top
  gifts.forEach(element => {
    top = element.length
    gift.push(`*${element}*`)
  })
  gift.unshift('*'.repeat(top + 2))
  gift.push('*'.repeat(top + 2))
  return gift
}
console.log(wrapGifts(["🏈🎸", "🎮🧸"]))

// ¡Hay demasiados regalos 🎁!Y envolverlos es una locura...
// Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han sido envueltos con asteríscos tanto por arriba como por los lados.
// Sólo tienes que tener en cuenta unas cosillas ✌️:
// Si el array está vacío, devuelve un array vacío
// Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
// wrapGifts(["📷", "⚽️"])
// /* Resultado:
// [ '****',
//   '*📷*',
//   '*⚽️*',
//   '****'
// ]
// */

// wrapGifts(["🏈🎸", "🎮🧸"])
// /* Resultado:
// [ '******',
//   '*🏈🎸*',
//   '*🎮🧸*',
//   '******'
// ]
// */

// wrapGifts(["📷"])
// /* Resultado:
// [ '****',
//   '*📷*',
//   '****'
// ]
// */
