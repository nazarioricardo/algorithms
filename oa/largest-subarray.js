const getSubarrays = (arr, k) => {
  const subarrays = [];
  for (let i = 0; i <= arr.length - k; i++) {
    subarrays.push(arr.slice(i, k + i));
  }

  return subarrays;
};

const mapArrays = (arr) => {
  // for each subarray add one item from given index to a new array
  const mappedArrays = [];

  for (let i = 0; i < arr.length; i++) {
    const a = arr[i];
    for (let j = 0; j < a.length; j++) {
      if (!mappedArrays[j]) {
        mappedArrays[j] = [];
      }

      const mod = i % arr.length;
      mappedArrays[j].push(arr[i][j]);
    }
  }

  return mappedArrays;
};

const getMax = (mappedArrays) => {
  for (let i = 0; i < mappedArrays.length; i++) {
    let prevVal = mappedArrays[i][0];
    for (let j = 1; j < mappedArrays[i].length; j++) {
      if (mappedArrays[i][j] > prevVal) {
        return j;
      }
    }
  }
};

function getLargestSubarray(arr, k) {
  // get all contiguous subarrays
  const subarrays = getSubarrays(arr, k);
  const mappedArrays = mapArrays(subarrays);
  const maxIndex = getMax(mappedArrays);
  console.log(mappedArrays);
  return maxIndex;
}

/*

[ 
  [ 1, 4, 3, 2 ]
  [ 4, 3, 2, 5 ] 
  [ 3, 2, 5, 6 ]
]

[
  [1 4 3]
  [4 3 2]
  [3 2 5]
  [2 5 6]
]

*/

console.log(getLargestSubarray([1, 4, 3, 2, 5, 6], 4));
