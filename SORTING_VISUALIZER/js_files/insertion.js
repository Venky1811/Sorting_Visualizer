// insertion.js

// Insertion Sort algorithm
async function insertionSort() {
    const bars = document.querySelectorAll(".bar");
    const n = bars.length;
  
    for (let i = 1; i < n; i++) {
      const key = parseInt(bars[i].style.height);
      let j = i - 1;
  
      while (j >= 0 && parseInt(bars[j].style.height) > key) {
        const bar1 = bars[j + 1];
        const bar2 = bars[j];
  
        bar1.style.background = "red";
        bar2.style.background = "red";
  
        await new Promise(resolve => setTimeout(resolve, delayTime)); // Delay in milliseconds
  
        const height1 = parseInt(bar1.style.height);
        const height2 = parseInt(bar2.style.height);
  
        bar1.style.height = `${height2}px`;
        bar2.style.height = `${height1}px`;
  
        bar1.style.background = "";
        bar2.style.background = "";
  
        j--;
      }
  
      bars[j + 1].style.height = `${key}px`;
    }
  
    bars.forEach((bar, i) => {
      setTimeout(() => {
        bar.style.background = "green";
      }, i * 100);
    });
  }
  
  
  // Event listener
  document.getElementById("insertionSortBtn").addEventListener("click", insertionSort);
  