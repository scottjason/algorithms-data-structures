// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(arr, size) {
  const chunkedArr = [];
  for (let elem of arr) {
    const lastChunk = chunkedArr[chunkedArr.length - 1];
    if (!lastChunk || lastChunk.length === size) {
      chunkedArr.push([elem]);
    } else {
      lastChunk.push(elem);
    }
  }
  return chunkedArr;
}

// function chunk(arr, size) {
//   const output = [];
//   for (let elem of arr) {
//     const lastChunk = output[output.length - 1];
//     if (!lastChunk || lastChunk.length === size) {
//       output.push([elem]);
//     } else {
//       lastChunk.push(elem);
//     }
//   }
//   return output;
// }

module.exports = chunk;
