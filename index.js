const { verifyRomanNumeral, verify5Numbers, verifyRepeatNumbers } = require('./utils');
const fromRomanToArabic = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};
const fromArabicToRoman = {
  M:1000,
  CM:900,
  D:500,
  CD:400,
  C:100,
  XC:90,
  L:50,
  XL:40,
  X:10,
  IX:9,
  V:5,
  IV:4,
  I:1,
};


// Esta funcion es para convertir de numero a romano.
const stringify = (num) => {
  if (typeof num !== "number") {
    throw new Error('Not a number');
  } else if (num > 3999 || num < 0) {
    throw new Error('out of range');
  }
  
  let roman = '';
  for ( i in fromArabicToRoman ) {
    while ( num >= fromArabicToRoman[i] ) {
      roman += i;
      num -= fromArabicToRoman[i];
    }
  }
  return roman;
};


// Esta funcion es para convertir de romano a numero arabico.
const parse = (str) => {
  if (typeof str !== "string") {
    console.log('string')
    throw new Error('Not a string');
  } 
  const arrayRoman = str.toUpperCase().split("");
  const conversion = [];
  let finalNumber = 0;

  if (!verifyRomanNumeral(arrayRoman)) {
    console.log('verify roman')
    throw new Error('Unknown roman numeral');
  } else if (verify5Numbers(str) === true) {
    console.log('verify 5 numbers')
    throw new Error('Invalid repetition of number starting with 5: L (50)');
  } else if (verifyRepeatNumbers(str) === true) {
    throw new Error('Too many repetitions of roman numeral I');
  }
  
  
  // Buscando en nuestro objeto de numeros romanos el key correpondiente al valor entregado.
  arrayRoman.forEach((element) => {
    for (const key in fromRomanToArabic) {
      const value = fromRomanToArabic[key];
      if (value === element) {
        conversion.push(parseInt(key, 10));
      }
    }
  });
  // Analizando en que caso sumar o restar para definir el numero final.
  for (let i = 0; i < conversion.length; i++) {
    if (conversion[i] < conversion[i + 1]) {
      // En este caso debemos restar.
      finalNumber += conversion[i + 1] - conversion[i];
      conversion.splice(i, 2);
      i--;
    } else if (
      conversion[i] >= conversion[i + 1] || conversion[i + 1] === undefined
    ) {
      // En este caso debemos sumar.
      finalNumber += conversion[i];
    }
  }
  return finalNumber;
};


module.exports = {
  stringify,
  parse,
};
