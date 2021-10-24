const { verifyRomanNumeral, verify5Numbers, verifyRepeatNumbers } = require('./utils');
const romanNumerals = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};

// Los numero romanos llegan al numero 3999
const stringify = (num) => {
  if (typeof num !== "Number") {
    console.log("El argumento no es tipo Number");
  } else if (num < 3999) {
    console.log("Fuera de rango");
  }
  let roman;

  console.log("esta funcion es para convertir de numero a romano");
};

// Esta funcion es para convertir de romano a numero.
const parse = (str) => {
  if (typeof str !== "string") {
    throw new Error('Not a string');
  } else if (str === 'VV' || str === 'LL' ||str ===  'DD' ) {
    verify5Numbers(str)
  }
  const arrayRoman = str.toUpperCase().split("");
  const conversion = [];
  let finalNumber = 0;

  if (!verifyRomanNumeral(arrayRoman)) {
    throw new Error('Unknown roman numeral');
  }else if (verifyRepeatNumbers(arrayRoman)) {
    throw new Error('Too many repetitions of roman numeral I');
  }
  
  
  // Buscando en nuestro objeto de numeros romanos el key correpondiente al valor entregado.
  arrayRoman.forEach((element) => {
    for (const key in romanNumerals) {
      const value = romanNumerals[key];
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

console.log(parse('X'));
module.exports = {
  stringify,
  parse,
};
