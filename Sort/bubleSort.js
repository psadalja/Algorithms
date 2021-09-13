let a = [20, 11, 2, 9, 2];
const bubleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let sorted = 1;
    // Boolean(isSorted)
    for (let j = 1; j < array.length - i; j++) {
      if (array[j] < array[j - 1]) {
        const temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
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
