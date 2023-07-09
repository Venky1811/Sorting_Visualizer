// Function to swap two elements
function swap(el1, el2) {
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);

  const height1 = style1.getPropertyValue("height");
  const height2 = style2.getPropertyValue("height");

  el1.style.height = height2;
  el2.style.height = height1;
}

// Function to perform Bubble Sort
async function bubbleSort() {
  const bars = document.querySelectorAll('.bar');
  const n = bars.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      const bar1 = bars[j];
      const bar2 = bars[j + 1];

      // Highlight bars being compared
      bar1.style.background = 'red';
      bar2.style.background = 'red';

      await new Promise(resolve => setTimeout(resolve, delayTime));

      const height1 = parseInt(bar1.style.height);
      const height2 = parseInt(bar2.style.height);

      if (height1 > height2) {
        await swap(bar1, bar2);
        bars[j] = bar2;
        bars[j + 1] = bar1;
      }

      // Reset background color
      bar1.style.background = 'blue';
      bar2.style.background = 'blue';
    }

    // Mark the sorted bar with green
    bars[n - i - 1].style.background = 'green';
  }
}