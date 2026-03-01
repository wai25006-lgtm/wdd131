const character = {
    name: "Swamp Beast Diplomat",
    class: "Monster",
    level: 1,
    health: 100,
    image: "images/snortleblat.webp",

    attacked() {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            alert(`${this.name} has died!`);
        }

        updateCard();
    },

    levelUp() {
        this.level += 1;
        updateCard();
    }
};

function updateCard() {
    document.getElementById("level").textContent = character.level;
    document.getElementById("health").textContent = character.health;
}