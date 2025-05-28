// const array1 = [1,2,3];
// const array2 = [5,6,7];

// const newArray = [...array1,...array2];
// const newArray = [...array1]; // sabit bir arrayi bozmadan yenisini oluşturmak
// const newArray = [..."eren"];
// console.log(newArray);

// const [firstIndex,...rest] = array1;
// console.log(firstIndex,rest);

function test (name,surname,...rest){
    console.log(name,surname,rest);
}

test(5,61,2,1,2,3);