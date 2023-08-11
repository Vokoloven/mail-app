export const duplicator = (
    list: { id?: string; ttn?: string }[],
    ttn: string
) => {
    const isDuplicate = list.some((item) => item.ttn === ttn);

    return isDuplicate;
};
