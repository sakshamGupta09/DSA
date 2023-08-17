function printPattern(n) {
  let output = "";
  let num = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      output += `${num} `;
      num++;
    }
    output += "\n";
  }
  console.log(output);
}

printPattern(5);
