function rob(nums: number[]): number {
  function isEven(number) {
    return number % 2 === 0;
  }

  let evensSum = 0;
  let oddsSum = 0;
  for (const [index, num] of nums.entries()) {
    const isEvenIndex = isEven(index);

    if (isEvenIndex) {
      evensSum += num;
    } else {
      oddsSum += num;
    }
  }

  return Math.max(evensSum, oddsSum);
}
