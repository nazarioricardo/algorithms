function isPowerOfTwo(n: number): boolean {
  /**
   * Easy Solution:
   */

  // return Number.isInteger(Math.log2(n));

  /**
   * Recursion Solution
   */
  if (n === 1) {
    return true;
  }

  if (n < 1) {
    return false;
  }

  return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(2), isPowerOfTwo(3), isPowerOfTwo(4));
