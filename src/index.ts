import { Command } from 'commander';
import { Parser } from './parser';
import { Conjugator } from './conjugator';

interface Options {
  showBeads: boolean;
}

const program = new Command()
  .name('Conjugator')
  .argument(
    '<integers>',
    'A comma-separated collection of positive integers (descending order)'
  )
  .option(
    '--showBeads',
    'Show beads representations of integers during conjugate transformation'
  )
  .action((integersArg: string, options: Options) => {
    const integers = Parser.parseInput(integersArg);

    console.log(`Parsed input as ${JSON.stringify(integers)}`);

    const conjugate = Conjugator.conjugate(integers, options.showBeads);

    console.log(`Conjugate: ${JSON.stringify(conjugate)}`);
  });

const main = () => {
  program.parse();
};

main();
