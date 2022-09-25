import {getRandNum, getDicePlaceholder, getHealthPercent} from "./utils.js"

class Characters {
    constructor(data){
        Object.assign(this, data)
        this.diceGotten = getDicePlaceholder(this.diceLength)
        this.maxHealth = this.health
    }
    

    setDiceArray(){
        this.acquiredDice = getRandNum(this.diceLength).split("").map(Number)
        this.diceGotten = this.acquiredDice.map((num) => {
            return `<div class="dices">${num}</div>`
        }).join("")
    }


    damageInflict(attackArray) {
        const totalDamage = attackArray.reduce((total, presentValue) => total + presentValue)
        this.health -= totalDamage
        if (this.health <= 0){
            this.health = 0
            this.dead = true
        }
    }

    setHealthPercent(){
        const percentage = getHealthPercent(this.maxHealth, this.health)

        return `
        <div class="healthbar-outer">
            <div class="healthbar-inner ${percentage < 26 ?
                "danger" : ""}" style="width: ${percentage}">
            </div>
        </div>
    `
    }

    setCharacterHtml(){
        const {name, avatar, health, diceGotten} = this
        const healthBar = this.setHealthPercent()

        return `
        <div class="main-stage">
                    <h2>${name}</h2>
                    <img src="${avatar}" alt="wizard picture">
                    <p class="health">health: <b>${health}</b></p>
                    ${healthBar}
                    <div class="dice-stage">
                        ${diceGotten}
                    </div>
                </div>
            `
    }
}

export default Characters