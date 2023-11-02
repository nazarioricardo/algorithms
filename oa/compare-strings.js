/**
 * str1 with m strings
 * str2 with n strings
 * return A of n integers
 *
 * For 0 <= i < n -- i >= 0 || i < n
 * A[i] = number of strings
 * that are strictly smaller than the comparison i-th string in str2
 */

// const getStrictlySize = (s) => {
//   let smallestChar = s[0];
//   let size = 0;

//   for (let i = 0; i < s.length; i++) {
//     let c = s[i];

//     if (c < smallestChar) {
//       smallestChar = c;
//       size = 1;
//     }

//     if (c === smallestChar) {
//       size += 1;
//     }
//   }

//   return size;
// };

// const isStrictlySmaller = (s1, s2) => {
//   const s1Count = getStrictlySize(s1);
//   const s2Count = getStrictlySize(s2);

//   return s1Count < s2Count;
// };

// function compareStrings(str1, str2) {
//   const split1 = str1.split(" ");
//   const split2 = str2.split(" ");

//   const counts = [];
//   for (const [index, str] of split2.entries()) {
//     counts.push(0);

//     for (const s of split1) {
//       if (isStrictlySmaller(s, str)) {
//         counts[index] += 1;
//       }
//     }
//   }

//   return counts;
// }

const MAX_STRING_SIZE = 10;
const getLexCount = (s) => {
  let minChar = null;
  let minCount = 0;
  for (const char of s) {
    if (char < minChar || minChar === null) {
      minChar = char;
      minCount = 1;
    } else if (char === minChar) {
      minCount++;
    }
  }

  return minCount;
};

const compareStrings = (str1, str2) => {
  const split1 = str1.split(" ");
  const split2 = str2.split(" ");
  const lexCounts = [...Array(MAX_STRING_SIZE).keys()];

  for (const s of split1) {
    const count = getLexCount(s);
    lexCounts[count] += 1;
  }

  const smallerCount = [0];

  for (const [index, value] of lexCounts.entries()) {
    smallerCount.push(0);
    smallerCount[index + 1] = smallerCount[index] + value;
  }

  const returnCount = [];

  for (const str of split2) {
    returnCount.push(smallerCount[getLexCount(str)]);
  }

  return returnCount;
};

const str1 = "abcd aabc bd";
const str2 = "aaa aa";

console.log(compareStrings(str1, str2));
