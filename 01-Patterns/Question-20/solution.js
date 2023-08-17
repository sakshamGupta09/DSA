function printPattern(n) {
  let output = "";
  for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      if (
        i + j == n - 1 ||
        i - j == n - 1 ||
        j - i == n - 1 ||
        i + j == 3 * (n - 1)
      ) {
        output += "*";
      } else {
        output += " ";
      }
    }
    output += "\n";
  }
  console.log(output);
}

printPattern(11);
