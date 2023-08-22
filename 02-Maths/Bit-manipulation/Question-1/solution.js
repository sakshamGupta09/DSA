function oddEven(N) {
  return (N & 1) == 1 ? "odd" : "even";
}

const result = oddEven(3);
console.log(result);
