/**
 * str1 with m strings
 * str2 with n strings
 * return A of n integers
 *
 * For 0 <= i < n -- i >= 0 || i < n
 * A.length should equal number of strings in str2
 * A[i] = number of strings that are strictly smaller than the comparison i-th string in str2
 *
 */

const getStrictSize = (s) => {
  let total = 0;
  let smallest = Infinity;
  for (const c of s) {
    const value = c.charCodeAt(0);

    if (smallest === value) {
      total += 1;
    }

    if (value < smallest) {
      smallest = value;
      total = 1;
    }
  }

  return total;
};

const str1 = "abcd aabc bd";
const str2 = "aaa aa";

console.log(compareStrings(str1, str2));
