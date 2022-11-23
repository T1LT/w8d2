Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

// Array.prototype.myMap = function(callback) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(callback(this[i]));
//   }
//   return newArr;
// }

Array.prototype.myMap = function(callback) {
  let newArr = [];
  this.myEach((num) => {
    newArr.push(callback(num));
  })
  return newArr;
}

Array.prototype.myReduce = function(callback, initialValue) {
  if (initialValue) {
    // start at first element
    let acc = initialValue;
    for (let i = 0; i < this.length; i++) {
      acc = callback(acc, this[i]);
    }
    return acc;
  } else {
    let acc = this[0];
    // start at second element
    for (let i = 1; i < this.length; i++) {
      acc = callback(acc, this[i]);
    }
    return acc;
  }
}

