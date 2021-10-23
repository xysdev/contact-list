export const sortAlphabetical = (array) => {
    ///TODO: replace with insertion sort
    const result = {};
    if (array == null) return result;
    array.forEach((item) => {
        const letter = item.name.last[0].toLocaleLowerCase();
        if (!result[letter]) {
            result[[letter]] = [];
        }
        result[letter].push(item);
    });
    Object.keys(result).forEach((index) => {
        result[index].sort(function (a, b) {
            debugger
            if (a.name.last < b.name.last) {
                return -1;
            }
            if (a.name.last > b.name.last) {
                return 1;
            }
            return 0;
        });
    });
    return result;
};
