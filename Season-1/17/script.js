const arr = [1, 2, 3, 4];

// Mapping----------------------------------------------
// function double(x) {
//   return 2 * x;
// }
// const output = arr.map((x) =>  x.toString(2));
// console.log(output);

// Filter-----------------------------------------------
//odd values

// const op = arr.filter((x) => x > 2);
// console.log(op);

//Reduce------------------------------------------------
//sum or max
// function sum(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i];
//     }
//     return sum;
// }
// console.log(sum(arr));

// const op=arr.reduce(function(acc,curr){
//     acc=acc+curr;
//     return acc;
// },0);
// console.log(op);

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(arr));

const output = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);
console.log(output);
