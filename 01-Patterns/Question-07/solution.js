function printPattern(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    // spaces
    for (let j = i; j < n; j++) {
      output += " ";
    }
    // stars
    for (let j = 1; j < 2 * i; j++) {
      output += "*";
    }

    // new line
    output += "\n";
  }
  console.log(output);
}

printPattern(5);
