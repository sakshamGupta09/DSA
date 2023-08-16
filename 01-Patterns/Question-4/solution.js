function printPattern(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      output += `${i} `;
    }
    output += `\n`;
  }
  console.log(output);
}

printPattern(5);
