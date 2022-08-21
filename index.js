// Code your solutions in this file
/*for (let  age = 30; aga<40;age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

const gifts =["teddy bear", "drone",""];
function wrapGifts (gifts){
    for (let i = 0; i < gifts.length; i++)
{console.log(`wrapped ${gifts[i]} and added a bow!`);
debugger;}
return gifts;
}*/
/*let cards = ["Guadalupe", "Ollie", "Aki"];
let greet = "surprise"
function writeCards (cards, greet) {
    
    for (let i = 0; i < cards.length; i++){
        console.log(`Thank you, ${cards[i]}, for the wonderful ${greet} gift!`);
        
    }
    return cards; 
}*/

function writeCards (array, eventName){
    let array1 = [];
    for ( let i = 0; i < array.length; i++){
        array1.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
    }
    return array1;
}

function countDown (){
    let i = 0;
    while  (i < 11) {
        console.log (i ++);
    }
    
}

