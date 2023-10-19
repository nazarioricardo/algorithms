// https://leetcode.com/problems/valid-parentheses/

const OPEN_BRACKETS = ["(", "[", "{"];
const CLOSE_BRACKETS = [")", "]", "}"];

const BRACKETS_PAIRS: { [key: string]: string } = {
  "(": ")",
  "[": "]",
  "{": "}",
};

function isValid(s: string): boolean {
  const didCloseAllBrackets = (brackets: string[]): boolean => {
    return brackets.length === 0;
  };
  let currentOpenBrackets: string[] = [];
  for (const c of s) {
    if (OPEN_BRACKETS.includes(c)) {
      currentOpenBrackets.push(c);
      continue;
    }

    if (CLOSE_BRACKETS.includes(c)) {
      const lastOpenBracket: string =
        currentOpenBrackets[currentOpenBrackets.length - 1];
      const matchingBracket = BRACKETS_PAIRS[lastOpenBracket];
      const isMatch = c === matchingBracket;

      if (isMatch) {
        currentOpenBrackets.pop();
      } else {
        return false;
      }
    }
  }

  return didCloseAllBrackets(currentOpenBrackets);
}

console.log(
  isValid("()"),
  isValid("()[]{}"),
  isValid("(]"),
  isValid("("), // should false
  isValid("(("), // should false
  isValid("]")
);
