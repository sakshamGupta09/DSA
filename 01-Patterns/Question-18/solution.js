function printPattern(n) {
  let output = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      if (i == n - 1 || i + j == n - 1 || j - i == n - 1) {
        output += "*";
      } else {
        output += " ";
      }
    }
    output += "\n";
  }
  console.log(output);
}

printPattern(6);
