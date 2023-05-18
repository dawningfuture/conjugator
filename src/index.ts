import { Command } from 'commander';
import { Parser } from './parser';
import { Conjugator } from './conjugator';

const program = new Command()
  .name('Conjugator')
  .argument(
    '<integers>',
    'A comma-separated collection of positive integers (descending order)'
  )
  .action((integersArg: string) => {
    const integers = Parser.parseInput(integersArg);

    console.log(`Parsed input as ${JSON.stringify(integers)}`);

    const conjugate = Conjugator.conjugate(integers);

    console.log(`Conjugate: ${JSON.stringify(conjugate)}`);
  });

const main = () => {
  program.parse();
};

main();
