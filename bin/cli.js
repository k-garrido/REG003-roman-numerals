const { program } = require('commander');
const { stringify, parse } = require('../index');

program.version('0.0.1', '-v, --version', 'It show the current version');

// Parse
program
  .command('parse')
  .argument('<string>','Integer argument')
  .description('Convert from Roman to Arabic number, it receives a String as argument.')
  .action((string) => {
      const response =  parse(string)
      console.log(response); 
  })

// Stringify
program
  .command('stringify')
  .argument('<number>','String argument')
  .description('Convert from Arabic to Roman number, it receives a Number as argument.')
  .action((number) => {
      const toNumber = parseInt(number,10);
      const response =  stringify(toNumber);
      console.log(response); 
  })


program.parse(process.argv);


process.stdout.write ('hola')
