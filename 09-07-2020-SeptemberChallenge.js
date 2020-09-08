function checkPattern(pattern, str) {
  let hash = {};
  let hash2 = {};
  str = str.split(' ');
  
  if(pattern.length !== str.length){
    return false;
  }
  
  let result = true;
  for(let i = 0; i < pattern.length; i++) {
    if(hash[str[i]]) {
      if(hash[str[i]] !== pattern[i]){
        result = false;
      }
    } else {
      hash[str[i]] = pattern[i];
    }

    if(hash2[pattern[i]]) {
      if(hash2[pattern[i]] !== str[i]){
        result = false;
      }
    } else {
      hash2[pattern[i]] = str[i];
    }
  }
  return result;
}

console.log(checkPattern('abba','dog cat at dog'));