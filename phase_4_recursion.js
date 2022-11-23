function range(start, end) {
  if (start === end) return [start];
  // [0].push DOESNT WORK!!!
  return [ ...range(start, end - 1), end ];
}

function sumRec(arr) {
  if (arr.length === 1) return arr[0];
  return arr[0] + sumRec(arr.slice(1, arr.length));
}

function exponent(base, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return base;
  return base * exponent(base, exp - 1);
}

// 1 1 2 3 5 8 13 21
function fibonacci(n) {
  if (n === 1) return [1];
  if (n === 2) return [1, 1];
  res = fibonacci(n - 1);
  res.push(res[res.length - 1] + res[res.length - 2]);
  return res
}

console.log(fibonacci(5));