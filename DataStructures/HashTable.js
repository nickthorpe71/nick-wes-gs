// Simple HashTable using separate chaining
// Soes not implement resizing

function hashStringToInt(s, tableSize) {
  let hash = 17;

  for (i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tableSize;
  }

  return hash;
}

class HashTable {
  table = new Array(997);

  setItem = (key, value) => {
    const idx = hashStringToInt(key, this.table.legnth);

    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  };

  getItem = (key) => {
    const idx = hashStringToInt(key, this.table.legnth);

    if (!this.table[idx])
      return null;

    return this.table[idx].find(x => x[0] === key)[1];
  };
}

const myTable = new HashTable();

myTable.setItem('firstName', 'silvers');
myTable.setItem('lastName', 'reighley');
myTable.setItem('age', 63);
myTable.setItem('dob', 1957);
console.log(myTable.table);
console.log(myTable.getItem('firstName'));
console.log(myTable.getItem('lastName'));
console.log(myTable.getItem('age'));
console.log(myTable.getItem('dob'));