class BleachClicker {
    constructor() {
        this.spiritualPower = 0;
        this.powerPerClick = 1;
        this.level = 1;
        this.nextLevel = 100;
        this.upgradeCost = 10;

        this.initElements();
        this.addEventListeners();
    }

    initElements() {
        this.spiritualPowerElement = document.getElementById('spiritual-power');
        this.levelElement = document.getElementById('level');
        this.nextLevelElement = document.getElementById('next-level');
        this.characterElement = document.getElementById('character');
        this.clickButton = document.getElementById('click-btn');
        this.upgradeButton = document.getElementById('upgrade-btn');
        this.upgradeCostElement = document.getElementById('upgrade-cost');
    }

    addEventListeners() {
        this.clickButton.addEventListener('click', () => this.click());
        this.upgradeButton.addEventListener('click', () => this.upgradePower());
    }

    click() {

        this.spiritualPower += this.powerPerClick;
        

        this.updateDisplay();
        

        this.animateCharacter();
        

        this.checkLevelUp();
    }

    animateCharacter() {
        this.characterElement.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.characterElement.style.transform = 'scale(1)';
        }, 100);
    }

    upgradePower() {
        if (this.spiritualPower >= this.upgradeCost) {

            this.spiritualPower -= this.upgradeCost;
            this.powerPerClick += 1;
            

            this.upgradeCost *= 2;
            
  
            this.updateDisplay();
        }
    }

    checkLevelUp() {
        if (this.spiritualPower >= this.nextLevel) {
            this.level++;
            this.nextLevel *= 2;
            this.updateDisplay();
            alert(`Поздравляем! Вы достигли ${this.level} уровня!`);
        }
    }

    updateDisplay() {
        this.spiritualPowerElement.textContent = this.spiritualPower;
        this.levelElement.textContent = this.level;
        this.nextLevelElement.textContent = this.nextLevel;
        this.upgradeCostElement.textContent = this.upgradeCost;
        

        this.upgradeButton.disabled = this.spiritualPower < this.upgradeCost;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new BleachClicker();
});
