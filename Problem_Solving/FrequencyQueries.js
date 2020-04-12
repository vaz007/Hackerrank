function freqQuery(queries) {
    const frequencies = [];
    const result = [];

    for (const query of queries) {
        const action = query[0];
        const value = query[1];

        if (action === 1) {
            if (typeof frequencies[value] === 'undefined') {
                frequencies[value] = 1;
            } else {
                ++frequencies[value];
            }
        }

        if (action === 2) {
            if (frequencies[value]) {
                --frequencies[value];
            }
        }

        if (action === 3) {
            result.push(frequencies.indexOf(value) === -1 ? 0 : 1);
        }
    }

    return result;
}

console.log(
    freqQuery([[1,1],[2,2],[3,2],[1,1],[1,1],[2,1],[3,2]]),
    freqQuery([[3, 4], [2, 1003], [1, 16], [3, 1]]),
    freqQuery([[1, 3], [2, 3], [3, 2], [1, 4], [1, 5], [1, 5], [1, 4], [3, 2], [2, 4], [3, 2]]),
    freqQuery([[1, 5], [1, 6], [3, 2], [1, 10], [1, 10], [1, 6], [2, 5], [3, 2]]),
    freqQuery([[1, 3], [1, 38], [2, 1], [1, 16], [2, 1], [2, 2], [1, 64], [1, 84], [3, 1], [1, 100], [1, 10], [2, 2], [2, 1], [1, 67], [2, 2], [3, 1], [1, 99], [1, 32], [1, 58], [3, 2]]),
);