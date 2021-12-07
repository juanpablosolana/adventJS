function daysToXmas(date) {
  // ¡Y no olvides compartir tu solución en redes!
  let fecha1 = new Date('Dec 25, 2021 23:59:59');
  let fecha2 = new Date(date);
  fecha2.setHours(23,59,59,0);
    let daysToXmas = fecha1.getTime() - fecha2.getTime()
    // console.log(daysToXmas)
    return (Math.round(daysToXmas / (1000 * 60 * 60 * 24)))
}
console.log(daysToXmas('Dec 2, 2021'))