const VOWELS = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

function reverseVowels(s: string): string {
  const isVowel = (c: string): boolean => VOWELS.includes(c);
  const strArr = s.split("");
  let vowels: string[] = [];
  let indexes: number[] = [];

  for (const [index, c] of strArr.entries()) {
    if (isVowel(c)) {
      vowels.push(c);
      indexes.push(index);
    }
  }

  const reversedVowels = vowels.reverse();

  for (const [index, v] of reversedVowels.entries()) {
    const insertionIndex = indexes[index];
    strArr[insertionIndex] = v;
  }

  return strArr.join("");
}

// function reverseVowels(s: string): string {
//   let left = 0;
//   let right = s.length - 1;

//   while (left < right) {

//   }

//   return s;
// }

console.log(reverseVowels("hello"), reverseVowels("leetcode"));
