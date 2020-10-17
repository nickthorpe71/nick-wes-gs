function validate(username, password) {
  let minLength = username.length;

  if (username.length < 1 || password.length < 1)
    return false;

  if (username.length > password.length)
    minLength = password.length;

  minLength = Math.round(minLength / 2);

  //check for repetition in password
  for (let j = 0; j < password.length; j++) {
    for (let i = 0; i < password.length - minLength - j + 1; i++) {
      let temp = password.slice(i, i + minLength + j);

      if (username.includes(temp))
        return false;
    }
  }

  //check for repetition in username
  for (let j = 0; j < username.length; j++) {
    for (let i = 0; i < username.length - minLength - j + 1; i++) {
      let temp = username.slice(i, i + minLength + j);

      if (password.includes(temp))
        return false;
    }
  }

  return true;
}

// Optimal Answer
const validateBest = (username, password) => {
  const half = Math.ceil(Math.min(username.length, password.length) / 2);
  for (let i = 0; i <= password.length - half; i++) {
    if (username.includes(password.substr(i, half))) return false;
  }
  return true;
};

console.log(validate('', '')); // false
console.log(validate('username', 'myname')); // false
console.log(validate('sword', 'password')); // false
console.log(validate('qwertyuiop', 'asdfghjkl')); // true
console.log(validate('MASH', 'M*A*S*H')); // true
console.log(validate('asdfghjkl', 'lkjhgfdsa')); // true