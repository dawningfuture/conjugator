class Conjugator {
  static conjugate(integers: number[], showBeads: boolean = false) {
    const bead = '0';

    // Make square matrix with beads at correct positions

    const matrixSize = integers[0];

    let beadsMatrix = new Array(matrixSize).fill(
      new Array(matrixSize).fill('')
    ) as string[][];

    beadsMatrix = beadsMatrix.map((row, rowI) =>
      row.map((_, columnI) => (columnI < integers[rowI] ? bead : ''))
    );

    if (showBeads) {
      console.log('Input beads representation');

      console.log(beadsMatrix);
    }

    // Transpose matrix

    beadsMatrix = beadsMatrix[0].map((_, columnI) =>
      beadsMatrix.map((row) => row[columnI])
    );

    if (showBeads) {
      console.log('Conjugated beads representation');

      console.log(beadsMatrix);
    }

    // Count beads in new positions

    const conjugate = beadsMatrix.map((row) =>
      row.reduce(
        (count, rowValue) => (rowValue === bead ? (count += 1) : count),
        0
      )
    );

    return conjugate;
  }
}

export { Conjugator };
