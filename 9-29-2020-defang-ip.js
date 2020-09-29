/** https://leetcode.com/problems/defanging-an-ip-address/
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  return address.split('.').join('[.]');
};

var defangIPaddrOld = function (address) {
  let newAddress = '';

  for (let i = 0; i < address.length; i++)
    if (address[i] === '.')
      newAddress += '[.]';
    else
      newAddress += address[i];

  return newAddress;
};

console.log(defangIPaddr('1.1.1.1'));