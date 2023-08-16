function printSquare(n) {
  let output = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      output += "* ";
    }
    output += "\n";
  }
  console.log(output);
}

printSquare(5);
