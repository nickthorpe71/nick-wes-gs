function solve(s, k) {
  let count = 0;
  let alphaIndex = 0;
  let stringIndex = 0;
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  if (k === 0)
    return s;

  do {
    if (s[stringIndex] === alphabet[alphaIndex]) {
      s = s.slice(0, stringIndex) + s.slice(stringIndex + 1);
      count++;
      stringIndex--;
    }

    stringIndex++;

    if (stringIndex === s.length) {
      alphaIndex++;
      stringIndex = 0;
    }

    if (s === '')
      return s;

  } while (count !== k);

  return s;
}

console.log(solve('abracadabra', 50));