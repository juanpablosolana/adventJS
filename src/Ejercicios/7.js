function contains(store, product) {
  // for (const prop in store) {
  //   for (const prop2 in store[prop]) {
  //     for (const prop3 in store[prop][prop2]) {
  //       if (store[prop][prop2][prop3] === product) {
  //         return true;
  //       }
  //     }
  //   }
  // }
  // return false;

return (JSON.stringify(store).includes(`"${product}"`));

}
const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}


console.log(contains(almacen, 'camiseta'));