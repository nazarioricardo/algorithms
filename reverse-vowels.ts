const VOWELS = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
const isVowel = (c: string): boolean => VOWELS.includes(c);

function reverseVowels(s: string): string {
  const strArr = s.split("");
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let leftChar = strArr[left];
    let rightChar = strArr[right];
    const leftIsVowel = isVowel(leftChar);
    const rightIsVowel = isVowel(rightChar);

    const shouldSwap = leftIsVowel && rightIsVowel;
    if (shouldSwap) {
      strArr[right] = leftChar;
      strArr[left] = rightChar;
      left++;
      right--;
      continue;
    }

    if (!rightIsVowel) {
      right--;
    }

    if (!leftIsVowel) {
      left++;
    }
  }

  return strArr.join("");
}

console.log(reverseVowels("hello"), reverseVowels("leetcode"));
