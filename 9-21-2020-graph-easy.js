/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  let judgeNum = -1;
  let personMap = {};

  // check to see what number from 1 - n is missing from the start of each array
  for (let i = 1; i <= N; i++) {
    personMap[i] = false;
  }

  for (let i = 0; i < trust.length; i++) {
    if (Object.keys(personMap).includes(String(trust[i][0]))) {
      personMap[String(trust[i][0])] = true;
    }
  }

  // check if any people numbers didn't show up in the trust arr
  for (let i = 1; i <= N; i++) {
    if (personMap[String(i)] === false)
      judgeNum = i;
    personMap[i] = false;
  }

  // if not found return - 1
  if (judgeNum === -1)
    return -1;

  // check that everyone trusts the judge num
  for (let i = 0; i < trust.length; i++) {
    if (trust[i][1] === judgeNum) {
      personMap[String(trust[i][0])] = true;
    }
  }

  // set judge to true for next test
  personMap[String(judgeNum)] = true;

  for (let i = 1; i <= N; i++) {
    if (personMap[String(i)] === false) {
      return -1;
    }
  }

  return judgeNum;
};

const findTheJudge = (N, trust) => {
  const pairsArray = [];
  for (let i = 0; i < N + 1; i++) {
    pairsArray.push(
      {
        trusts: 0,
        trustedBy: 0
      }
    );
  }
  for (let i = 0; i < trust.length; i++) {
    const selectedPair = trust[i];
    pairsArray[selectedPair[0]].trusts += 1;
    pairsArray[selectedPair[1]].trustedBy += 1;
  }
  for (let i = 1; i <= N; i++) {
    if (pairsArray[i].trusts === 0 && pairsArray[i].trustedBy === N - 1) return i;
  }
  return -1;
};

console.log(findTheJudge(2, [[1, 2]]));
console.log(findTheJudge(2, [[1, 2], [2, 1]]));
console.log(findTheJudge(4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]));
console.log(findTheJudge(4, [[1, 3], [1, 4], [2, 3], [3, 4], [4, 3]]));
