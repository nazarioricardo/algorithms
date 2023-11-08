const cakes = [
  // [weight, value]
  [7, 160],
  [3, 90],
  [2, 15],
];
const cap = 20;
// Returns 555 (6 of the middle type of cake and 1 of the last type of cake)

const maxBagValue = (cakes, capacity) => {
  let remainingCapacity = capacity;
  let totalValue = 0;
  for (let i = 0; i < cakes.length; i++) {
    if (remainingCapacity <= 0) {
      break;
    }
    const mass = cakes[i][0];
    const value = cakes[i][1];
    const quantity = Math.floor(remainingCapacity / mass);
    const spaceTaken = quantity * mass;
    console.log(mass, quantity);
    remainingCapacity -= spaceTaken;
    totalValue += quantity * value;
  }

  return totalValue;
};

console.log(maxBagValue(cakes, cap));
