function repeats(arr) {
  let store = {};
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Object.keys(store).includes(String(arr[i]))) {
      store[arr[i]] += 1;
    }
    else {
      store[arr[i]] = 1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (store[arr[i]] === 1) {
      result += arr[i];
    }
  }

  return result;
}

console.log(repeats([4, 5, 7, 5, 4, 8]));