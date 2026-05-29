const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = 0;
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) max = arr[i];
}
console.log("Maximum Number in the array:", max);
