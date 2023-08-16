function printPattern(n) {
  let output = "";
  for (let i = 0; i < n; i++) {
    let start = i % 2 == 0 ? 1 : 0;
    for (let j = 0; j <= i; j++) {
      output += `${start} `;
      start = 1 - start;
    }
    output += `\n`;
  }
  console.log(output);
}

printPattern(5);
