export const formatter = (
    value: string,
    action: 'format' | 'unformat'
): string => {
    if (action === 'format') {
        const format = value.split('').reduce((acc, val, index) => {
            if ((index === 2 || index === 7 || index === 12) && val !== ' ') {
                acc = acc + ' ';
            }

            acc = acc + val;

            return acc;
        }, '');

        const match = format.match(
            /^(?:\d{2}\s\d{4}\s\d{4}\s\d{0,4})|(?:\d{2}\s\d{4}\s\d{0,4})|(?:\d{2}\s\d{0,4})|(?:\d{0,2})/
        );

        return match?.[0]!;
    } else {
        const format = value?.replace(/\s/g, '');

        return format;
    }
};
