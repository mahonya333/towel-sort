// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == [] || matrix === undefined) {
        return [];
    } else {
        let resultArray = [];
        matrix.forEach((element, index) => {
            resultArray = resultArray.concat(
                index % 2 !== 0 ? element.reverse() : element
            );
        });

        return resultArray;
    }
};
