const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (min > arr[i]) min = arr[i];
}
console.log("Minimum Number of the array", min);
