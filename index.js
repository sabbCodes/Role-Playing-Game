import characterData from "./data.js"
import Characters from "./character.js"

let monsterArray = ["orc", "demon", "goblin"]
let isComing = false

function getNewMonster(){
    const nextMonster = characterData[monsterArray.shift()]
    return nextMonster ? new Characters(nextMonster) : {}
}

function attack(){
    if (!isComing){
        getWizard.setDiceArray()
        getMonster.setDiceArray()
        getWizard.damageInflict(getMonster.acquiredDice)
        getMonster.damageInflict(getWizard.acquiredDice)
        rendChars()
        if (getWizard.dead){
            gameOver()
        } else if (getMonster.dead){
            if (monsterArray.length > 0){
                isComing = true
                setTimeout(() => {
                    isComing = false
                    getMonster = getNewMonster()
                    rendChars()
                }, 1500)
            } else {
                gameOver()
            }
        }
    }
}

function gameOver(){
    isComing = true
    const endGameMessage = getMonster.health > 0 && getWizard.health > 0 ?
        "No winners - all players are dead" :
        getWizard.health > 0 ? "The wizard wins" :
        "The monsters are victorious"
    const endGameEmoji = getWizard.health > 0 ? "🔮" : "☠️"

    setTimeout(() => {
        document.body.innerHTML = `
        <div class="game-over">
            <h2>Game Over</h2>
            <h3>${endGameMessage}</h3>
            <p class="end-emoji">${endGameEmoji}</p>
        </div>`
    }, 2000)
}

function rendChars(){
    document.getElementById("hero").innerHTML = getWizard.setCharacterHtml()
    document.getElementById("monster").innerHTML = getMonster.setCharacterHtml()
}

document.getElementById("attack-btn").addEventListener("click", attack)

const getWizard = new Characters(characterData.hero)
let getMonster = getNewMonster()

rendChars()