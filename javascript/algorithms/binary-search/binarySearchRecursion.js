function binarySearch(arr, startLeftIndex, startRightIndex, x) {

  if (startRightIndex >= startLeftIndex) {
      let midIdx = startLeftIndex + Math.floor((startRightIndex - startLeftIndex) / 2);

      // If the element is present at the middle
      // itself
      if (arr[midIdx] == x)
          return arr[midIdx];

      // If element is smaller than mid, then
      // it can only be present in left subarray
      if (arr[midIdx] > x)
          return binarySearch(arr, startLeftIndex, midIdx - 1, x);

      // Else the element can only be present
      // in right subarray
      return binarySearch(arr, midIdx + 1, startRightIndex, x);
  }

  // We reach here when element is not
  // present in array
  return -1;
}

let arr = [2, 3, 4, 10, 40];
let x = 11;
let n = arr.length
let result = binarySearch(arr, 0, n - 1, x);
(result == -1) ? console.log("Element is not present in array")
                 : console.log("Element is present at: " +result);

