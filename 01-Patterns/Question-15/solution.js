function printPattern(n) {
  let output = "";
  for (let i = 0; i < 2 * n; i++) {
    let cols = i < n ? n - i : i - n + 1;
    let spaces = 2 * n - 2 * cols;

    for (let j = 0; j < cols; j++) {
      output += "*";
    }
    for (let j = 0; j < spaces; j++) {
      output += " ";
    }
    for (let j = 0; j < cols; j++) {
      output += "*";
    }

    output += "\n";
  }
  console.log(output);
}

printPattern(5);
