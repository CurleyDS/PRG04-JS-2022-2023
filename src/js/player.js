export class Player {
    name
    color
    score

    constructor(name, color) {
        this.name = name
        this.color = color
        this.score = 0
    }

    showName() {
        console.log('%c ' + this.name, 'color: ' + this.color + '; font-weight: bold; font-size:20px')
    }

    addPoint() {
        this.score++
        console.log(this.score);
    }

    changeColor(color) {
        this.color = color
    }
}