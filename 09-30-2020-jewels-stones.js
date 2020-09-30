/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let jewels = new Map();
  let count = 0;

  for (let i = 0; i < J.length; i++) {
    jewels.set(J[i], true);
  }
  for (let i = 0; i < S.length; i++) {
    if (jewels.get(S[i]))
      count++;
  }

  return count;
};

var numJewelsInStonesOld = function (J, S) {
  let jewels = {};
  let count = 0;

  for (const jewel of J) {
    jewels[jewel] = 0;
  }

  for (const stone of S) {
    if (Object.keys(jewels).includes(stone)) {
      jewels[stone]++;
    }

  }

  Object.keys(jewels).forEach(key => {
    count += jewels[key];
  });

  return count;
};

console.log(numJewelsInStones('aA', 'aAAbbbbbb'));