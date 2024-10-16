// src/utils/sum.ts
export const sum = (a: number, b: number): number => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return a + b;
};
