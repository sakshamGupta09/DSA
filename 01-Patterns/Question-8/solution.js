function printPattern(n) {
  let output = "";
  for (let i = 0; i < n; i++) {
    // spaces
    for (let j = 0; j < i; j++) {
      output += " ";
    }
    // star
    for (let j = 0; j < 2 * (n - i) - 1; j++) {
      output += "*";
    }
    output += "\n";
  }
  console.log(output);
}

printPattern(5);
