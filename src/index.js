//You should implement your task here.
module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length < 1) {
        return [];
    }
    let a = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 != 0) {
            matrix[i].reverse();
        }
        a.push(`${matrix[i]}`);
    }
    let b = a
        .join(",")
        .split(",")
        .map((el) => Number(el));
    return b;
};
