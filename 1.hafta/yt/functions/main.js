// let age = 23;
// let name = "Eren";

function yasArttir(ageParametresi) {
  //   ageParametresi += 1;
  return ageParametresi + 1;
}

// BU ÇOK KULLANILMAZ
// const yasArttir2 = function (ageParametresi) {
//   //   ageParametresi += 1;
//   return ageParametresi + 1;
// };

const yasArttir3 = (ageParametresi) => {
  return ageParametresi + 1;
};

console.log(yasArttir2(5));
console.log(yasArttir3(6));

// function selamla(isim) {
//   console.log("merhabalar " + isim);
// }
// selamla(name);

// age = yasArttir(age);
// console.log(age);
