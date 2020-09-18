//Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

var maxProfit = function(prices) {
  let max = 0;
  for(let i = 0; i < prices.length; i++){
    for(let j = i + 1; j < prices.length; j++) {
      if(prices[j]-[prices[i]] > max){
        max = prices[j]-[prices[i]];
      }
    }
  }
  return max;
};

console.log(maxProfit([7,1,5,3,6,4])); // 5

console.log(maxProfit([7,6,4,3,1])); // 0

console.log(maxProfit([6,7,2,5,1,2])); // 3