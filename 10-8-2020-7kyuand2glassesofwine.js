function getStrings(city) {
  city = city.toLowerCase();
  let letters = {};
  let result = '';

  for (const letter of city) {
    if (!Object.keys(letters).includes(letter)) {
      letters[letter] = '*';
    } else {
      letters[letter] += '*';
    }
  }

  for (let i = 0; i < Object.keys(letters).length; i++) {
    if (Object.keys(letters)[i] !== ' ') {
      if (i !== Object.keys(letters).length - 1)
        result += `${Object.keys(letters)[i]}:${letters[Object.keys(letters)[i]]},`;
      else
        result += `${Object.keys(letters)[i]}:${letters[Object.keys(letters)[i]]}`;
    }
  }

  return result;
}

console.log(getStrings('Las Vegas'));