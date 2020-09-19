//Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

var maxProfit = function(prices) {
  let currMin = null;
  let maxDiff = 0;
  for(let i = 0; i < prices.length; i++){
    if(currMin === null) {
      currMin = prices[i];
    }

    if(currMin > prices[i]){
      currMin = prices[i];
    }

    if (prices[i] - currMin > maxDiff){
      maxDiff = prices[i] - currMin;
    }
  }
  return maxDiff;
};

console.log(maxProfit([7,1,5,3,6,4])); // 5

console.log(maxProfit([7,6,4,3,1])); // 0

console.log(maxProfit([6,7,2,5,1,2])); // 3