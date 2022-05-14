import { assertEquals } from "../deps.ts";
import { merge } from "./merge-intervals.ts";

const input1 = [[2, 6], [1, 3], [8, 10], [15, 18]];
const input2 = [[1, 4], [4, 5]];
const input3 = [[2, 7], [1, 4], [5, 12], [15, 16], [18, 20], [20, 22]];

Deno.test("should merge intervals correctly", () => {
  assertEquals(merge(input1), [[1, 6], [8, 10], [15, 18]]);
  assertEquals(merge(input2), [[1, 5]]);
  assertEquals(merge(input3), [[1, 12], [15, 16], [18, 22]]);
});
