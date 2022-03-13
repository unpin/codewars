import { assertEquals } from '../../deps.ts';
import { highAndLow } from './high-and-low.ts';
Deno.test('should return 42 -9', () => {
    assertEquals(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'), '42 -9');
});

Deno.test('should return 3 1', () => {
    assertEquals(highAndLow('1 2 3'), '3 1');
});
