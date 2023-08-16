function printPattern(n) {
  let output = "";
  for (let i = 0; i < 2 * n - 1; i++) {
    let cols = i < n ? i + 1 : 2 * n - i - 1;
    for (let j = 0; j < cols; j++) {
      output += "* ";
    }
    output += "\n";
  }
  console.log(output);
}

printPattern(5);
