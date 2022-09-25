function getRandNum(diceLength){
    return new Array(diceLength).fill(0).map( () => 
        Math.floor( Math.random() * 6) + 1
    ).join("")
}

function getDicePlaceholder(diceLength){
    return new Array(diceLength).fill(0).map( () => 
        `<div class="placeholder-dices"></div>`
    ).join("")
}

const getHealthPercent = (maximumHealth, remainingHealth) => (remainingHealth / maximumHealth) * 100


export {getRandNum, getDicePlaceholder, getHealthPercent}