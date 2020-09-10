// Largest Time for Given Digits

// Given an array arr of 4 digits, find the latest 24-hour time that can be made using each digit exactly once.

// 24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.

// Return the latest 24-hour time in "HH:MM" format.  If no valid time can be made, return an empty string.


const largestTime = (arr) => {
  let result = '';

  arr.sort((a, b) => a - b);

  // HOURS
  //does it contain a 0,1,2,3?
  // if yes, does it also contain an additional 0,1,2?
  // if no, find the largest 1 - 9 and place that in the 0X:00 pos

  // MINS
  // out of the remaining numbers find the highest number less than 6 and place in the 00:X0 pos
  // the remaining number goes in the 00:0X pos

};


console.log(largestTime([1, 2, 3, 4])); // '12:34'
console.log(largestTime([0, 0, 0, 0])); // '00:00'
console.log(largestTime([5, 5, 5, 5])); // ''
console.log(largestTime([0, 3, 9, 4])); // '04:39'