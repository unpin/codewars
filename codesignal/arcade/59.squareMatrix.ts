function solution(n: number) {
  const array = Array.from(Array(n), () => Array(n).fill(0));
  let offsetY = 0;
  let offsetX = 0;
  let width = n - 1;
  let height = n - 1;
  let count = 0;
  const target = n ** 2;

  while (true) {
    for (let x = offsetX; x <= width; x++) {
      array[offsetY][x] = ++count;
    }
    offsetY++;
    for (let y = offsetY; y <= height; y++) {
      array[y][width] = ++count;
    }
    width--;
    for (let x = width; x >= offsetX; x--) {
      array[height][x] = ++count;
    }
    height--;
    for (let y = height; y >= offsetY; y--) {
      array[y][offsetX] = ++count;
    }
    offsetX++;
    if (count >= target) break;
  }

  return array;
}

console.log(solution(5));
/**
 * [
 *  [ 1,  2,  3,  4, 5],
 *  [16, 17, 18, 19, 6],
 *  [15, 24, 25, 20, 7],
 *  [14, 23, 22, 21, 8],
 *  [13, 12, 11, 10, 9]
 * ]
 */
