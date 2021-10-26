const { program } = require('commander');
const { stringify, parse } = require('../index');
const options = program.opts();

program.version('0.0.1', '-v, --version', 'It show the current version');

// Parse
program
  .command('parse')
  .argument('<number>','Integer argument')
  .description('Convert from Arabic to Roman number, it receives a Number as argument.')
  .action((number) => {
      const response =  parse(number)
      console.log(response); 
  })

// Stringify
program
  .command('stringify')
  .argument('<string>','String argument')
  .description('Convert from Roman to Arabic number, it receives a String as argument.')
  .action((string) => {
      const toNumber = parseInt(string,10);
      const response =  stringify(toNumber);
      console.log(response); 
  })


program.parse(process.argv);

