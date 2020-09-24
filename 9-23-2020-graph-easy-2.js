/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let countMap = new Map();
  let count = 0;

  nums.forEach(num => {
    let temp = countMap.get(num);
    temp === undefined ? countMap.set(num, 1) : countMap.set(num, countMap.get(num) + 1);
  });

  console.log(countMap);

  countMap.forEach(element => {
    count += sumTo(element);
  });

  return count;
};

const sumTo = (num) => {
  let sum = 0;
  for (let i = num - 1; i > 0; i--)
    sum += i;
  return sum;
};

console.log(numIdenticalPairs([]));
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1, 1, 1, 1]));
console.log(numIdenticalPairs([1, 2, 3]));
