const calculateMatrixSum = matrix =>
    matrix.reduce(
        (sum, element) => sum + element.reduce((accumulator, current) => accumulator + current),
        0
    );
