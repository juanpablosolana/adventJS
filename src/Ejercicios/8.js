function maxProfit(prices) {
  const buy = []
  const sell = []
  const tope = prices.length

  for (let j = 0; j < tope; j++) {
    if (prices[j - 1] < prices[j]) {
      sell.push(prices[j])
    }
    else if (prices[j] !== prices[tope - 1]) {
      buy.push(prices[j])
    }
  }
  return (Math.max(...sell) - Math.min(...buy) > 0) ? Math.max(...sell) - Math.min(...buy) : -1
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
const pricesEth = [10, 20, 30, 40, 50, 60, 70]

console.log(maxProfit(pricesEth))