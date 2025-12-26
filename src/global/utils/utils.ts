export const isPositive = (value: number) => {
    return value >= 0;
}

export const wait = (ms: number) => {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
};