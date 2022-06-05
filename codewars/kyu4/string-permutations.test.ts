import { assertEquals } from "../../deps.ts";
import { permutations } from "./string-permutations.ts";

Deno.test("should return array with one char if length equals to one", () => {
  assertEquals(permutations("a"), ["a"]);
});

Deno.test("should return all string permutations", () => {
  assertEquals(permutations("abc"), ["abc", "acb", "bac", "bca", "cab", "cba"]);
});
