export function permutations(str: string): string[] {
  if (str.length == 1) return [str];
  //   const out: string[] = [];
  //   for (let i = 0; i < str.length; i++) {
  //     const c = str[i];
  //     const p = permutation(str.slice(0, i) + str.slice(i + 1));
  //     p.forEach((e) => out.push(c + e));
  //   }
  return [...str].reduce((acc: string[], c, i) => {
    return acc.concat(
      permutations(str.slice(0, i) + str.slice(i + 1))
        .map((val) => c + val),
    );
  }, []);
}
