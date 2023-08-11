export const duplicator = (list: { ttn?: string }[], ttn: string) => {
    const isDuplicate = list.some((item) => item.ttn === ttn);

    return isDuplicate;
};
