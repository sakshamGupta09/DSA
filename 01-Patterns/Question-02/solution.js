function printPattern(n) {
  let output = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      output += "* ";
    }
    output += "\n";
  }
  console.log(output);
}

printPattern(5);
