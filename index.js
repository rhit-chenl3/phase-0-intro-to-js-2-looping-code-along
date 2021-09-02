// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);


function writeCards(stringNames, eventName){
    const messages = [];
    for (let i = 0; i < stringNames.length; i++){
        messages.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
}

function countDown(num){
    while (num > -1){
        console.log(num--);
    }
}