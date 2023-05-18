class Parser {
  static parseInput = (input: string) => {
    const validatedInput = this.validateInput(input.split(','));

    return validatedInput;
  };

  private static validateInput = (integers: string[]) => {
    const validatedIntegers = integers.filter((integer) =>
      /^\d+$/.test(integer)
    );

    if (integers.length !== validatedIntegers.length) {
      console.warn('Invalid integers have been removed from input');
    }

    const numericIntegers = validatedIntegers.map((integer) =>
      parseInt(integer, 10)
    );

    return numericIntegers;
  };
}

export { Parser };
