const ONE_MINUTE = 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_YEAR = ONE_DAY * 365;

export function formatDuration(seconds: number) {
    function pushComponent(array: string[], number: number, tag: string) {
        if (number == 0) return;
        array.push(`${number} ${tag}${number > 1 ? 's' : ''}`);
    }

    function addCommas(array: string[]) {
        for (let i = 0; i < array.length - 2; i++) {
            array[i] = array[i] + ',';
        }

        if (array.length > 1) {
            array[array.length - 1] = 'and ' + array[array.length - 1];
        }
    }

    if (seconds == 0) return 'now';

    const output: string[] = [];

    const years = Math.floor(seconds / ONE_YEAR);
    seconds = seconds - years * ONE_YEAR;
    const days = Math.floor(seconds / ONE_DAY);
    seconds = seconds - days * ONE_DAY;
    const hours = Math.floor(seconds / ONE_HOUR);
    seconds = seconds - hours * ONE_HOUR;
    const minutes = Math.floor(seconds / ONE_MINUTE);
    seconds = seconds - minutes * ONE_MINUTE;

    pushComponent(output, years, 'year');
    pushComponent(output, days, 'day');
    pushComponent(output, hours, 'hour');
    pushComponent(output, minutes, 'minute');
    pushComponent(output, seconds, 'second');

    addCommas(output);

    return output.join(' ');
}
