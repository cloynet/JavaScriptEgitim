const skills = ["html", "css", "js", "python", "sql"];

// const firstSkill = skills[0];
// const secondSkill = skills[1];

const [_, __, ...rest] = skills;

console.log(rest);
