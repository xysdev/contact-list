export const sortAlphabetical = (array) => {
    const result = {};
    if (array == null) return result;
    array.forEach((item) => {
        const letter= item.name.last[0].toLocaleLowerCase()
        if (!result[letter]) {
            result[[letter]] = [];
        }
        result[letter].push(item);
    });
    return result;
};
