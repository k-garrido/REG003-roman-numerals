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
  const verify = array.every(number => values.includes(number));
  return verify;
}

const verify5Numbers = (string) => {
  let verify = false
  const dontAllow = [ "VV", "LL", "DD"]
  for (let i = 0; i < dontAllow.length; i++) {
    const includes = string.includes(dontAllow[i])
    if (includes === true) {
      verify = true
    }
  }
  return verify
}


const verifyRepeatNumbers = (string) => {
  let verify = false
  const dontAllow = [ "MMMM", "CCCC", "XXXX", "IIII"]
  for (let i = 0; i < dontAllow.length; i++) {
   const includes = string.includes(dontAllow[i])
   if (includes === true) {
     verify = true
   }
  }
  return verify
}

module.exports = {
  verifyRomanNumeral,
  verify5Numbers,
  verifyRepeatNumbers
}
