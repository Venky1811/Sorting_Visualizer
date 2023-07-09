// Function to perform Selection Sort
async function selectionSort(arr, bars) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Highlight the current minimum bar
    bars[minIndex].style.background = 'red';

    for (let j = i + 1; j < n; j++) {
      // Highlight bars being compared
      bars[j].style.background = 'red';
      await new Promise(resolve => setTimeout(resolve, delayTime));

      if (arr[j] < arr[minIndex]) {
        // Reset the color of the previous minimum bar
        bars[minIndex].style.background = 'blue';

        minIndex = j;
      } else {
        // Reset the color of the bar being compared
        bars[j].style.background = 'blue';
      }
    }

    if (minIndex !== i) {
      // Swap elements
      await swap(bars[minIndex], bars[i]);
      const temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }

    // Set the sorted bar to green
    bars[i].style.background = 'green';
  }
  
}
