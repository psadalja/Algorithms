let a = [20, 11, 2, 9, 2];
const bubleSort = (array) => {
  for (let p = 0; p < array.length; p++) {
    let sorted = 1;
    // Boolean(isSorted)
    for (let q = 1; q < array.length - p; q++) {
      if (array[q] < array[q - 1]) {
        const temp = array[q];
        array[q] = array[q - 1];
        array[q - 1] = temp;
        sorted = 0;
        //  Boolean(isSorted);
        console.log(array);
      }
    }
    if (Boolean(sorted)) return;
  }
};
let b = bubleSort(a);
console.log(b);

// time complexity for bubble sort is O(n^2)

// best case scenario is O(n)
