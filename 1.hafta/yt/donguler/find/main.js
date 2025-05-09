const users = [
  {id: 0,name: "Eren",age: 23,},
  {id: 1,name: "Yiğit",age: 30,},
  {id: 3,name: "Mehmet",age: 55,},
];

// const findAges = (user) => {
//   if (user.age === 23) {
//     return true;
//   }
// };

// function findAges(user) {
//   if (user.age === 23) {
//     return true;
//   }
// }

const findAges = (user) => user.age === 23;

// const kirktanKucukler = [];
// 2 tane varsa ilkini kontrol eder
// const test = users.find((user) => {
//   if (user.age === 31) {
//     return true;
//   }
// });

const test = users.find(findAges);

console.log(test);
