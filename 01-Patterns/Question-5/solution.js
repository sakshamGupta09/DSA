function printPattern(n) {
  let output = "";
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      output += "* ";
    }
    output += "\n";
  }
  console.log(output);
}

printPattern(5);
