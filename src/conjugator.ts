class Conjugator {
  static conjugate(integers: number[]) {
    const bead = 'X';

    // Make square matrix with beads at correct positions

    const matrixSize = integers[0];

    let beadsMatrix = new Array(matrixSize).fill(
      new Array(matrixSize)
    ) as string[][];

    for (let row = 0; row < matrixSize; row++) {
      beadsMatrix[row] = new Array(matrixSize) as string[];

      for (let cell = 0; cell < matrixSize; cell++) {
        beadsMatrix[row][cell] = cell < integers[row] ? bead : '';
      }
    }

    // Transpose matrix

    for (var row = 0; row < matrixSize; row++) {
      for (var column = 0; column < row; column++) {
        const temp = beadsMatrix[row][column];

        beadsMatrix[row][column] = beadsMatrix[column][row];

        beadsMatrix[column][row] = temp;
      }
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
