// function selamlaLiteralString(name) {
//     return `Hey, ${name}`;
// }
// console.log(selamlaLiteralString('Eren'));

const user = {
    name: 'Eren',
    age: 23,
};

// function selamlaConditional(person){
//     const name = person ? person.name : 'yabanci';
//     return `hey, ${name}`;
// }
// console.log(selamlaConditional());

// function selamlaLogicalOR(person){
//     const name = person.name || 'Yabanci';
//     return `Hey, ${name}`;
// }
// console.log(selamlaLogicalOR(user));

// function selamlaLogicalAnd(person){
//     const name = (person && person.name) || 'Yabanci';
//     return `hey, ${name}`;
// }
// console.log(selamlaLogicalAnd(null));

// function selamlaOptionalChaning(person){
//     const name = person?.name || 'Yabanci';
//     return `Hey, ${name}`;
// }
//
// const user2 ={
//     name: 'Yiğit',
//     school: {
//         name:'asdas',
//         teacher:{
//             name:'sssss',
//         },
//     },
// };
//
// user?.school?.teacher?.name || 'asdas'
//
// console.log(selamlaOptionalChaning('erens'));

function selamlaNullishCoalescing(person){
    const name = person?.name ?? 'Yabanci';
    return `Hey, ${name}`;
}
console.log(selamlaNullishCoalescing(user));