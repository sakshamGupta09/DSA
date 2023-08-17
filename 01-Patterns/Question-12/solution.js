function printPattern(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      output += `${j} `;
    }
    for (let j = 0; j < 2 * (n - i); j++) {
      output += "  ";
    }
    for (let j = i; j >= 1; j--) {
      output += `${j} `;
    }
    output += "\n";
  }
  console.log(output);
}

printPattern(5);
