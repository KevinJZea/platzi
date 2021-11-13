/*

The Fibonacci sequence appears in nature all around us,
in the arrangement of seeds in a sunflower and the spiral
of a nautilus for example.

The Fibonacci sequence begins with fibonacci(0) = 0
and fibonacci(1) = 1 as its first and second terms.
After these first two elements,
each subsequent element is equal to the sum of the
previous two elements.

Programmatically:

- fibonacci(0) = 0
- fibonacci(1) = 1
- fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 1)

Given n, return the nth number in the sequence.

*/

function processData(input) {
  var n = parseInt(input);
  console.log(fibonacci(n));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});

function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}
