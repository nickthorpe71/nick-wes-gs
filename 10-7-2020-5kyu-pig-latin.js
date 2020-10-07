function pigIt(str) {
  const words = [];
  let wordIdx = 0;

  // separate string into an array of words
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      wordIdx++;
    }
    else {
      if (words[wordIdx])
        words[wordIdx] += str[i];
      else
        words[wordIdx] = str[i];
    }

  }

  // for each word move the first character to the end and add 'ay'
  for (let i = 0; i < words.length; i++) {
    if (words[i][words[i].length - 1] === '.'
      || words[i][words[i].length - 1] === ','
      || words[i][words[i].length - 1] === '!'
      || words[i][words[i].length - 1] === '?'
    ) {
      if (words[i].length > 1) {
        let temp1 = words[i][0];
        let temp2 = words[i][words[i].length - 1];
        words[i] = `${words[i].slice(1, words[i].length - 1)}${temp1}ay${temp2} `;
      }
    }
    else {
      let temp = words[i][0];
      words[i] = `${words[i].slice(1, words[i].length)}${temp}ay`;
    }

  }

  return words.join(' ');
}

console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !