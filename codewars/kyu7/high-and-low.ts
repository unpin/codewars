type MinMax = {
    min: number;
    max: number;
};

export function highAndLow(numbers: string) {
    // ...
    const minmax = numbers
        .split(' ')
        .map(Number)
        .reduce(
            (output: MinMax, curr: number) => {
                if (curr > output.max) {
                    output.max = curr;
                }

                if (curr < output.min) {
                    output.min = curr;
                }

                return output;
            },
            {
                min: Infinity,
                max: -Infinity,
            }
        );

    return `${minmax.max} ${minmax.min}`;
}
