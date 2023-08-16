function printPattern(n) {
  let output = "";
  for (let i = 0; i < 2 * n; i++) {
    let spaces = i < n ? n - i - 1 : i - n;
    let cols = i < n ? i + 1 : 2 * n - i;

    for (let j = 0; j < spaces; j++) {
      output += " ";
    }
    for (let j = 0; j < cols; j++) {
      output += "* ";
    }
    output += "\n";
  }
  console.log(output);
}

printPattern(5);
