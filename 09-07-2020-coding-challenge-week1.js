// Largest Time for Given Digits

// Given an array arr of 4 digits, find the latest 24-hour time that can be made using each digit exactly once.

// 24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.

// Return the latest 24-hour time in "HH:MM" format.  If no valid time can be made, return an empty string.


const largestTime = (arr) => {
  let result = [];

  for(let i = 2; i >= 0; i--) {    
    if(arr.includes(i)){
      result.push(i);
      arr.filter(e => e === i);
      let index = arr.findIndex(e => e === i);
      arr.splice(index, 1);
      break;
    }    
  }

  if(result.length === 0) {
    return '';
  }

  if(result[0] === 2) {
    for(let i = 3; i >= 0; i--) {    
      if(arr.includes(i)){
        result.push(i);
        arr.filter(e => e === i);
        let index = arr.findIndex(e => e === i);
        arr.splice(index, 1);
        break;
      }
    }
  } else {
    for(let i = 9; i >= 0; i--) {    
      if(arr.includes(i)){
        result.push(i);
        arr.filter(e => e === i);
        let index = arr.findIndex(e => e === i);
        arr.splice(index, 1);
        break;
      }
    }
  }

  result.push(':');

  if(result.length < 3) {
    return '';
  }  

  for(let i = 5; i >= 0; i--) {    
    if(arr.includes(i)){
      result.push(i);
      arr.filter(e => e === i);
      let index = arr.findIndex(e => e === i);
      arr.splice(index, 1);
      break;
    }
  }

  if(result.length < 4) {
    return '';
  }

  result.push(arr[0]);

  return result.join('');

  // let highestLessThree = 0;
  // let highestLessFour = 0;
  // let highestLessSix = 0;
  // let last = 0;

  // let found = false;

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > highestLessThree && arr[i] < 3) {
  //     highestLessThree = arr[i];
  //     arr[i] = -1;
  //   }
  // }

  // for (let i = 0; i < arr.length; i++) {
  //   if (highestLessThree <= 0) {
  //     if (arr[i] > highestLessFour && arr[i] < 4) {
  //       highestLessFour = arr[i];
  //       arr[i] = -1;
  //     }
  //   } else {
  //     if (arr[i] > highestLessFour && arr[i] < 10) {
  //       highestLessFour = arr[i];
  //       arr[i] = -1;
  //     }
  //   }

  // }

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > highestLessSix && arr[i] < 6) {
  //     highestLessSix = arr[i];
  //     arr[i] = -1;
  //   }
  // }

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > last) {
  //     last = arr[i];
  //     arr[i] = -1;
  //     found = true;
  //   }
  // }

  // result = `${highestLessThree}${highestLessFour}:${highestLessSix}${last}`;

  // return result;
};



console.log(largestTime([1, 2, 3, 4])); // '23:41'
console.log(largestTime([0, 0, 0, 0])); // '00:00'
console.log(largestTime([5, 5, 5, 5])); // ''
console.log(largestTime([0, 3, 9, 4])); // '09:43'