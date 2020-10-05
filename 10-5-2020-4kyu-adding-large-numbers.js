function add(a, b) {
  let sum = '';  // result will be stored in a string.
  let carry = 0;

  let str1;
  let str2;
  let temp;
  let digitSum;

  let aLength = a.length;
  let bLength = b.length;

  // if s2 is longer than s1, swap them.
  if (bLength > aLength) {
    let temp = b;
    b = a;
    a = temp;
  }

  for (let i = 0; i < a.length; i++) {
    str1 = parseInt(a.charAt(a.length - 1 - i));
    str2 = parseInt(b.charAt(b.length - 1 - i));
    str2 = (str2) ? str2 : 0;
    temp = (carry + str1 + str2).toString();
    digitSum = temp.charAt(temp.length - 1);
    carry = parseInt(temp.substr(0, temp.length - 1));
    carry = (carry) ? carry : 0;

    sum = (i === a.length - 1) ? temp + sum : digitSum + sum;
  }

  return sum;

}

console.log(add('63829983432984289347293874', '90938498237058927340892374089')); // 91002328220491911630239667963
