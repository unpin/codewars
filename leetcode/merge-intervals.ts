export function merge(intervals: number[][]) {
  intervals.sort((a: number[], b: number[]) => a[0] - b[0]);
  const output: number[][] = [intervals[0]];

  for (const curr of intervals) {
    const prev = output[output.length - 1];
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(curr[1], prev[1]);
    } else {
      output.push([curr[0], curr[1]]);
    }
  }

  return output;
}
