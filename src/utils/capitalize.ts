export const capitalize = (word: string) => {
    const capitalized = word.replace(/\w/, (value) => value.toUpperCase());
    return capitalized;
};
