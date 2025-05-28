const user = {
  name: "Eren",
  age: 25,
  isTest: false,
  skills: ["html", "css"],
  school: {
    name: "asd",
    sinif: 3,
    test: {
      assd: "vvv",
    },
  },
};

// const { name, age, ...rest } = user;
// console.log(rest);

const {
  school: {
    test: { assd },
  },
} = user;

console.log(assd);
