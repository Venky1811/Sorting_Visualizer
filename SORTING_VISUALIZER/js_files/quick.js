// Function to swap two elements
function swap(el1, el2) {
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);

  const height1 = style1.getPropertyValue("height");
  const height2 = style2.getPropertyValue("height");

  el1.style.height = height2;
  el2.style.height = height1;
}

// Function to partition the array and return the pivot index
async function partition(arr, low, high, bars) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    // Highlight bars being compared
    bars[j].style.background = 'red';
    await new Promise(resolve => setTimeout(resolve, delayTime));

    if (arr[j] < pivot) {
      i++;

      // Swap elements
      await swap(bars[i], bars[j]);
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    // Reset background color
    bars[j].style.background = 'blue';
  }

  // Place pivot at its correct position
  await swap(bars[i + 1], bars[high]);
  const temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;

  // Reset background color
  bars[high].style.background = 'blue';

  return i + 1;
}

// Function to perform Quick Sort
async function quickSort(arr, low, high, bars) {
  if (low < high) {
    const pivotIndex = await partition(arr, low, high, bars);

    // Recursively sort the left and right sub-arrays
    await quickSort(arr, low, pivotIndex - 1, bars);
    await quickSort(arr, pivotIndex + 1, high, bars);
  }
  
}
