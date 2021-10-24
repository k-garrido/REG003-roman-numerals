const romanNumerals = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};

const verifyRomanNumeral = (array) => {
  const values = Object.values(romanNumerals);
  const verify = array.every(number => values.includes(number))
  console.log(verify)
  return verify
}

const verify5Numbers = (string) => {
  switch (string) {
    case 'VV': throw new Error('Invalid repetition of number starting with 5: V (5)');
    case 'LL': throw new Error('Invalid repetition of number starting with 5: L (50)');
    case 'DD': throw new Error('Invalid repetition of number starting with 5: D (500)');
  }
}

const verifyRepeatNumbers = (array) => {
  const counter =  array.reduce((a, d) => ( a[d] ? a[d] += 1 : a[d] = 1, a ), {});
  const values  = Object.values(counter);
  const checkSequense = values.some( element => element >= 4)
  return checkSequense
}


module.exports = {
  verifyRomanNumeral,
  verify5Numbers,
  verifyRepeatNumbers
}
