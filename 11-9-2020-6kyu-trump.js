function trumpDetector(trumpySpeech) {
  let prev = '';
  let results = {};
  let vowels = 'aeiou';
  let totalExtraVowels = 0;
  let numberBaseVowels = 0;

  trumpySpeech.split('').forEach(letter => {
    let lowLetter = letter.toLowerCase();


    if (lowLetter === prev && vowels.includes(lowLetter)) {
      if (Object.keys(results).includes(lowLetter))
        results[lowLetter] = results[lowLetter] + 1;
      else
        results[lowLetter] = 1;
    } else if (vowels.includes(lowLetter)) {
      numberBaseVowels++;
    }

    prev = lowLetter;

  });

  if (Object.keys(results).length === 0)
    return 0;

  Object.values(results).forEach(value => {
    totalExtraVowels += value;
  });

  return Number((totalExtraVowels / numberBaseVowels).toFixed(2));
}

console.log(trumpDetector("America NUUUUUKEEEE Oooobaaaamaaaaa"));