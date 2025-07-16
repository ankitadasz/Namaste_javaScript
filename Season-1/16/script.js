const radius = [1, 2, 3, 4];
const area = function area(radius) {
  return Math.PI * radius * radius;
};
const perimeter = function perimeter(radius) {
  return 2 * Math.PI * radius;
};
const diameter = function diameter(radius) {
  return 2 * radius;
};

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};
console.log(radius.map(area));
console.log(radius.calculate(area));
// console.log(calculate(radius, area));
// console.log(calculate(radius, perimeter));
// console.log(calculate(radius, diameter));
