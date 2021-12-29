/*
    Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not. 
*/

function solution(inputArray: string[]): boolean {
    const permutations: string[][] = getPermutations(inputArray);

    for (const stringArray of permutations) {
        if (exactlyOneLetterDifference(stringArray)) return true;
    }

    return false;
}

function getPermutations(array: string[]): string[][] {
    if (array.length === 0 || array.length === 1) return [array];
    const output: string[][] = [];

    for (let i = 0; i < array.length; i++) {
        const curr = array[i];
        const rest = array.slice(0, i).concat(array.slice(i + 1));
        const permutations = getPermutations(rest);
        for (const stringArray of permutations) {
            output.push([curr, ...stringArray]);
        }
    }

    return output;
}

function exactlyOneLetterDifference(array: string[]): boolean {
    for (let i = 1; i < array.length; i++) {
        if (countDifference(array[i], array[i - 1]) !== 1) {
            return false;
        }
    }

    return true;
}

function countDifference(a: string, b: string): number {
    let counter = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) counter++;
    }

    return counter;
}

console.log(solution(['aba', 'bbb', 'bab']), 'should be false');
console.log(solution(['ab', 'bb', 'aa']), 'should be true');
console.log(solution(['ff', 'gf', 'af', 'ar', 'hf']), 'should be true');
console.log(solution(['q', 'q']), 'should be false');
