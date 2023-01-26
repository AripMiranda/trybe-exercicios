let MaiorNumeroPrimo = 0;

for (let num1 = 2; num1 <= 50; num1 += 1) {
  let éNumeroPrimo = true;
  for (let divisor = 2; divisor < num1; divisor += 1) {
    if (num1 % divisor === 0) {
      éNumeroPrimo = false;
    }
  }
  if (éNumeroPrimo) {
    MaiorNumeroPrimo = num1;
  }
}

console.log(MaiorNumeroPrimo);