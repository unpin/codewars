import { assertEquals } from '../../deps.ts';
import { formatDuration } from './human-readable-duration.ts';

Deno.test('should return 1 second', () => {
    assertEquals(formatDuration(1), '1 second');
});

Deno.test('should return 1 minute 2 seconds', () => {
    assertEquals(formatDuration(62), '1 minute and 2 seconds');
});

Deno.test('should return 2 minutes', () => {
    assertEquals(formatDuration(120), '2 minutes');
});

Deno.test('should return 1 hour', () => {
    assertEquals(formatDuration(3600), '1 hour');
});

Deno.test('should return 1 hour, 1 minute and 2 seconds', () => {
    assertEquals(formatDuration(3662), '1 hour, 1 minute and 2 seconds');
});

Deno.test('should return 13 years, 2 hours, 37 minutes and 4 seconds', () => {
    assertEquals(
        formatDuration(
            60 * 60 * 24 * 365 * 13 +
                60 * 60 * 24 * 2 +
                60 * 60 * 2 +
                60 * 37 +
                4
        ),
        '13 years, 2 days, 2 hours, 37 minutes and 4 seconds'
    );
});
