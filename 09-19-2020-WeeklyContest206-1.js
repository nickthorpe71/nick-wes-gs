

// Question 1
let matrix = [
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0]
];

const findSpecial = (mat) => {
  let rows = [];
  let cols = [];
  let count = 0;

  // count how many 1s per row
  for (let i = 0; i < mat.length; i++) {
    rows.push(0);
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 1) {
        rows[i]++;
      }
    }
  }

  // count how many 1s per column
  for (let k = 0; k < mat[0].length; k++) {
    cols.push(0);
    for (let n = 0; n < mat.length; n++) {
      if (mat[n][k] === 1) {
        cols[k]++;
      }
    }
  }

  for (let b = 0; b < mat.length; b++) {
    for (let m = 0; m < mat[0].length; m++) {
      if (mat[b][m] === 1) {
        if (rows[b] === 1 && cols[m] === 1) {
          count++;
        }
      }
    }
  }

  return count;
};

//console.log(findSpecial(matrix));

// Question 2

var unhappyFriends = function (n, preferences, pairs) {
  let unhappy = 0;

  // for each person loop through their preferences
  for (let i = 0; i < n; i++) {
    let pair;

    for (let k = 0; k < pairs.length; k++) {
      if (pairs[k][0] === i) {
        pair = pairs[k][1];
        break;
      }
      else if (pairs[k][1] === i) {
        pair = pairs[k][0];
        break;
      }
    }

    for (let j = 0; j < n - 1; j++) {
      let unhappyTracker = false;
      // if their pair is highest rated - continue
      if (preferences[i][j] === pair) {
        break;
      }
      // check the people that are higher to see if the current person is rated higher than their pair -- if so unhappy++
      else {
        let theirPair;

        for (let m = 0; m < pairs.length; m++) {
          if (pairs[m][0] === preferences[i][j]) {
            theirPair = pairs[m][1];
            break;
          }
          else if (pairs[m][1] === preferences[i][j]) {
            theirPair = pairs[m][0];
            break;
          }
        }

        for (let b = 0; b < n - 1; b++) {
          if (preferences[theirPair][b] === i) {
            console.log('unhappy - current person | pair | higher rated | their pair', i, pair, preferences[i][j], theirPair);
            unhappyTracker = true;
            break;
          } else if (preferences[theirPair][b] === preferences[i][j]) {
            console.log('happy - current person | pair | higher rated | their pair', i, pair, preferences[i][j], theirPair);
            // break;
          }
        }
      }
      if (unhappyTracker) {
        unhappy++;
        break;
      }
    }
  }

  return unhappy;

};


console.log(unhappyFriends(4, [[1, 3, 2], [2, 3, 0], [1, 0, 3], [1, 0, 2]], [[2, 1], [3, 0]]));