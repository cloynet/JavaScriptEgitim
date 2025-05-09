// Object
// freeze - hasOwnProperty - keys - values - entries

const user = {
  name: "Eren",
  age: 23,
  skills: ["HTML", "CSS", "Javascript"],
  isSomething: false,
  //   family: [
  //     {
  //       name: "Yiğit",
  //       surname: "Esenli",
  //     },
  //     {
  //       name: "Mehmet",
  //       surname: "Esenli",
  //     },
  //   ],
};

// console.log(Object.keys(user));
// console.log(Object.values(user));
console.log(Object.entries(user));

// Object.freeze(user);
// user.test = "sad";

// console.log(user.hasOwnProperty("name"));

// console.log(user.family[0].name);

// const istenenKey = "skills";
// console.log(user.name);
// console.log(user[istenenKey]);
// const istenenKey = "surname";
// user.surname = "Esenli";
// user[istenenKey] = "Esenli";
// console.log(user);
