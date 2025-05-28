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

for (let i = 0; i < users.length; i++) {
  if (users[i].age < 40) {
    kirktanKucukler.push(users[i].name);
  }
}

console.log(kirktanKucukler);
