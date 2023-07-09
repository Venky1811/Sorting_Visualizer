function generateRandomArray(length, min, max) {
  const array = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    array.push(randomNumber);
  }
  return array;
}

let array = generateRandomArray(100, 0, 100);
let numberOfBars = 100;

function createBars() {
  const barsContainer = document.getElementById('bars-container');
  barsContainer.innerHTML = '';

  array = generateRandomArray(numberOfBars, 0, 100);

  for (let i = 0; i < array.length; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = array[i] + 'px';

    barsContainer.appendChild(bar);
  }
}

const generateArrayBtn = document.getElementById('generate-array-btn');
generateArrayBtn.addEventListener('click', () => {
  array = generateRandomArray(numberOfBars, 0, 100);
  createBars();
});

// Bubble Sort implementation
const bubbleSortBtn = document.getElementById('bubble-sort-btn');
bubbleSortBtn.addEventListener('click', bubbleSort);

// Quick Sort implementation
const quickSortBtn = document.getElementById('quick-sort-btn');
quickSortBtn.addEventListener('click', async () => {
  const bars = document.querySelectorAll('.bar');
  const arr = Array.from(bars).map(bar => parseInt(bar.style.height));

  await quickSort(arr, 0, arr.length - 1, bars);
});

// Merge Sort implementation
const mergeSortBtn = document.getElementById('merge-sort-btn');
mergeSortBtn.addEventListener('click', async () => {
  const bars = document.querySelectorAll('.bar');
  const arr = Array.from(bars).map(bar => parseInt(bar.style.height));

  await mergeSort(arr, 0, arr.length - 1, bars);
});

// Selection Sort implementation
const selectionSortBtn = document.getElementById('selection-sort-btn');
selectionSortBtn.addEventListener('click', async () => {
  const bars = document.querySelectorAll('.bar');
  const arr = Array.from(bars).map(bar => parseInt(bar.style.height));

  await selectionSort(arr, bars);
});

// Insertion Sort implementation
const insertionSortBtn = document.getElementById('insertion-sort-btn');
insertionSortBtn.addEventListener('click', async () => {
  const bars = document.querySelectorAll('.bar');
  const arr = Array.from(bars).map(bar => parseInt(bar.style.height));

  await insertionSort(arr, bars);
});

// Number of bars input
const arrSizeInput = document.getElementById('arr_sz');
arrSizeInput.addEventListener('input', () => {
  numberOfBars = arrSizeInput.value;
  createBars();
});

// Speed control input
const speedInput = document.getElementById('speed-input');
const delayTime = 200 / speedInput.value; // Adjust the division factor to control the speed

// Initial creation of bars
createBars();
