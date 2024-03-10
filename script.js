

const primeRow = [0, 2, 6, 5, 8, 7, 11, 9, 10, 4, 1, 3];
var conversion = new Map([
    [0, 'A'],
    [1, 'B&#9839;'],
    [2, 'B'],
    [3, 'C'],
    [4, 'D&#9839;'],
    [5, 'D'],
    [6, 'E&#9839;'],
    [7, 'E'],
    [8, 'F'],
    [9, 'G&#9839;'],
    [10, 'G'],
    [11, 'A&#9839;']
]);

function retrograde(row) {
    let retrograde = row.slice().reverse(); // Use slice() to create a copy before reversing
    return retrograde;
}
function invert(row) {
    let inverted = [];
    row.forEach(element => {
        inverted.push((12 - element) % 12);
    });
    return inverted;
}
function transpose(row, number) {
    let transposed = [];
    row.forEach(element => {
        transposed.push((element + number) % 12);
    });
    return transposed;
}
