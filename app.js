
const allButtons = [...document.querySelectorAll('.btn')];
const numberCounter = document.querySelector('#counter-value');

let counterValue = parseFloat(numberCounter.innerText);
let x;


console.log(allButtons);

allButtons.forEach( (button, index) =>{
    button.addEventListener('click', item =>{
        /*if(item.target.classList.contains('decrease')){
            counterValue += -1;
            numberCounter.innerText = counterValue;
        }*/

        switch(index){
            case 0:
                counterValue += -1;
                numberCounter.innerText = counterValue;
                break;
            case 1:
                counterValue = 0;
                numberCounter.innerText = counterValue;
                break;
            case 2:
                counterValue += 1;
                numberCounter.innerText = counterValue;
                break;
        }
    });
})

function convertStringToNumber(){
    return parseFloat(numberCounter.innerText);
}