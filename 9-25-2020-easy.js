/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  n = '' + n + '';
  const arr = n.split('').map(num => parseInt(num));

  const product = arr.reduce((acc, num) => {
    acc *= num;

    return acc;
  }, 1);

  const sum = arr.reduce((acc, num) => {
    acc += num;

    return acc;
  }, 0);

  return product - sum;
};

var subtractProductAndSumSecond = function (n) {
  let num = n.toString().split('');
  let sum = 0;
  let product = 1;

  for (let i = 0; i < num.length; i++) {
    sum += parseInt(num[i]);
    product *= parseInt(num[i]);
  }

  return product - sum;
};

var subtractProductAndSumFirst = function (n) {
  if (n === 0)
    return 0;

  let num = n;
  let product = 1;
  let sum = 0;

  while (num > 0) {
    let current = num % 10;
    product *= current;
    sum += current;
    num = Math.floor(num / 10);
  }

  return product - sum;
};


console.log(subtractProductAndSum(234));