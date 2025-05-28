// Buttonlari HTML'den al
// Buttonlar tiklanmis mi dinle
// Eger tiklanirsa arttir ya da azalt
// Title'i bul ve onu arttir veya azalt

const increaseButton = document.querySelector('.arttir');
const decraeseButton = document.querySelector('.azalt');
const number = document.querySelector('#numara');

let initialNumber = 0;

increaseButton.addEventListener("click",(event) =>{
    initialNumber++;
    number.innerHTML = `<i>${initialNumber}</i>`;
});

decraeseButton.addEventListener("click",(event) =>{
    initialNumber--;
    number.innerHTML = `<i>${initialNumber}</i>`;
});