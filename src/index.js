
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix) {
        return matrix.flatMap((v, i) => i % 2 === 0 ? v : v.reverse());
    }
    return [];
}
