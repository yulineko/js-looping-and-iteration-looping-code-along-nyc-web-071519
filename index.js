// Code your solutions in this file
function writeCards(namesArr, eventName){
    let cards = []
    for(let i = 0; i < namesArr.length; i ++){
        cards.push("Thank you, " + namesArr[i] + ", for the wonderful surprise gift!")
    }
    return cards
}

function countdown(countdown){
    while(countdown > 0){
        console.log(countdown)
        countdown -= 1
    }
    console.log(countdown)
}