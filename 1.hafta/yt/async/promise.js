function testCallback(callback){
    setTimeout(() =>{
        callback('Hey buradayım');
    },1000);
}

function testPromise(){
   return new Promise(resolve =>{
       setTimeout(() =>{
           resolve('hey buradayim')
       },1500)
   })
}

console.log('ilk console');
// testCallback((message) => {
//     console.log(message);
// });
testPromise().then(message => {
    console.log('mesaj geldi', message)
})
console.log('son console');