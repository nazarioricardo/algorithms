const VOWELS = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

function reverseVowels(s: string): string {
  const isVowel = (c: string): boolean => VOWELS.includes(c);
  let vowels: string[] = [];
  let indexes: number[] = [];
  let index = 0;

  const strArr = s.split("");

  for (const c of strArr) {
    if (isVowel(c)) {
      vowels.push(c);
      indexes.push(index);
    }

    index++;
  }

  const reversedVowels = vowels.reverse();

  let vIndex = 0;
  for (const v of reversedVowels) {
    const insertionIndex = indexes[vIndex];
    strArr[insertionIndex] = v;
    vIndex++;
  }

  return strArr.join("");
}

console.log(reverseVowels("hello"), reverseVowels("leetcode"));
