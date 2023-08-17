function printPattern(n) {
  let output = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {
        output += "*";
      } else {
        output += " ";
      }
    }
    output += "\n";
  }
  console.log(output);
}

printPattern(5);
