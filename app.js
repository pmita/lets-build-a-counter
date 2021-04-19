
/*
    Fun project that eases us into managing state in javscript. Few tips and tricks
    that can helps us save time and effort with our code. Objectives of this project are
    #Recognise which button the user is clicking
    #Either substract, add, or reset the counter accordingly
    #Show the result live on the webpage

    Remember to always apply clean code principles in every project you are making! Here are
    some basic rules to have at the back of your mind:
    #Leave commects whenever your code is doing something complicated
    #Try giving your variables usefull names. Best if their name describes what they correspond to
    #Re-factor your code once you get something done. Chances are you can make better
*/

/*----------Global variables----------------*/
const allButtons = [...document.querySelectorAll('.btn')]; //Array containing all the buttons
const numberCounter = document.querySelector('#counter-value'); //Selecting the span with id counter-value
//Unfortunatelly we need access to the span's innet Text, which is a string
//To counter that we need to use parseFloat() for us to convert it into a number
let counterValue = parseFloat(numberCounter.innerText);


/*---------Event Listeners---------------*/
allButtons.forEach( (button, index) =>{
    button.addEventListener('click', () =>{
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
