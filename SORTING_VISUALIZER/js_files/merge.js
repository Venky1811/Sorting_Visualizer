// Function to merge two sub-arrays
async function merge(arr, low, mid, high, bars) {
  const n1 = mid - low + 1;
  const n2 = high - mid;

  // Create temporary arrays to hold the left and right sub-arrays
  const leftArray = new Array(n1);
  const rightArray = new Array(n2);

  // Copy data from the original array to the left and right sub-arrays
  for (let i = 0; i < n1; i++) {
    leftArray[i] = arr[low + i];
  }
  for (let j = 0; j < n2; j++) {
    rightArray[j] = arr[mid + 1 + j];
  }

  let i = 0; // Initial index of the left sub-array
  let j = 0; // Initial index of the right sub-array
  let k = low; // Initial index of the merged sub-array

  while (i < n1 && j < n2) {
    // Highlight bars being compared
    bars[low + i].style.background = 'red';
    bars[mid + 1 + j].style.background = 'red';
    await new Promise(resolve => setTimeout(resolve, delayTime));

    if (leftArray[i] <= rightArray[j]) {
      // Update the value in the original array
      arr[k] = leftArray[i];

      // Update the height of the corresponding bar
      bars[k].style.height = leftArray[i] + 'px';

      i++;
    } else {
      // Update the value in the original array
      arr[k] = rightArray[j];

      // Update the height of the corresponding bar
      bars[k].style.height = rightArray[j] + 'px';

      j++;
    }

    // Reset background color
    bars[low + i - 1].style.background = 'blue';
    bars[mid + 1 + j - 1].style.background = 'blue';

    k++;
  }

  // Copy the remaining elements from the left sub-array, if any
  while (i < n1) {
    arr[k] = leftArray[i];
    bars[k].style.height = leftArray[i] + 'px';

    i++;
    k++;
  }

  // Copy the remaining elements from the right sub-array, if any
  while (j < n2) {
    arr[k] = rightArray[j];
    bars[k].style.height = rightArray[j] + 'px';

    j++;
    k++;
  }
}

// Function to perform Merge Sort
async function mergeSort(arr, low, high, bars) {
  if (low < high) {
    const mid = Math.floor((low + high) / 2);

    // Recursively sort the left and right sub-arrays
    await mergeSort(arr, low, mid, bars);
    await mergeSort(arr, mid + 1, high, bars);

    // Merge the sorted sub-arrays
    await merge(arr, low, mid, high, bars);
  }

  
}
