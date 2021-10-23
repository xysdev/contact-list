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
        result[index].sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
    });
    return result;
};
