function fix(paragraph) {
  let result = '';

  if (paragraph.length === 0)
    return result;

  if (paragraph[0] !== paragraph[0].toUpperCase()) {
    result += (paragraph[0].toUpperCase());
  }

  for (let i = 1; i < paragraph.length; i++) {
    if (paragraph[i - 1] === ' ' && paragraph[i - 2] === '.' && paragraph[i] !== paragraph[i].toUpperCase()) {
      result += (paragraph[i].toUpperCase());
    } else {
      result += paragraph[i];
    }
  }

  return result;
}

console.log(fix('hello. my name is inigo montoya. you killed my father. prepare to die.'));
console.log(fix(''));