function isPowerOfTwo(n: number): boolean {
  // Easy solution
  return Number.isInteger(Math.log2(n));
}

console.log(isPowerOfTwo(2), isPowerOfTwo(3), isPowerOfTwo(4));
