function printPattern(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      output += `${j} `;
    }
    output += `\n`;
  }
  console.log(output);
}

printPattern(5);
