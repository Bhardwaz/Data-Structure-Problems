// Second Largest Element
function secondLargest(arr) {
  if (!arr.length) return -1;
  let bigger = arr[0];
  let secondBigger = -Infinity;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= bigger) {
      secondBigger = bigger;
      bigger = arr[i];
    } else if (arr[i] > secondBigger) {
      secondBigger = arr[i];
    }
  }
  return secondBigger;
}
const result = secondLargest([
  10, -5, 7, -12, 30, -8, 15, -3, 0, -20, 25, -18, 6, -9, 14, -22, 17, -4, 11,
  -27,
]);
console.log(result);
