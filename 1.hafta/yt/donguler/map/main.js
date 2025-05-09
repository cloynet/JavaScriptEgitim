const users = [
  {
    id: 0,
    name: "Eren",
    age: 23,
  },
  {
    id: 1,
    name: "Yiğit",
    age: 30,
  },
  {
    id: 3,
    name: "Mehmet",
    age: 55,
  },
];

const kirktanKucukler = [];

const test = users.map((user) => {
  if (user.age < 40) {
    return user;
  }
});

console.log(test);
