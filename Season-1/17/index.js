const users = [
  { firstName: "Ankita", lastname: "Das", age: 26 },
  { firstName: "Kumkum", lastname: "Tosh", age: 20 },
  { firstName: "Adyasha", lastname: "Mohanty", age: 20 },
  { firstName: "Sonali", lastname: "Bera", age: 24 },
  { firstName: "Farheen", lastname: "Nawaz", age: 26 },
];
//List of full name
const op = users.map((x) => x.firstName + x.lastname);
console.log(op);

//same age people no
const outp = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(outp);
//filter first name of all the people whos age is greater than 25
// const outpu = users.filter((x) => x.age > 25)
// .map((x) => x.firstName);
// console.log(outpu);

const result = users.reduce(function (acc, curr) {
  if (curr.age > 25) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(result);
