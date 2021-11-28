class Puzzle {

    static _instance;

    static startGame() {
        console.log("start game");
        Puzzle._instance = new Puzzle("./background.webp");
    }

    static resolve() {
        console.log("resolve");
    }

    canvas = document.querySelector('#canvas');
    canvas_size = { width:500, height:500 };
    size = document.querySelector('#cells-quantity').value;

    constructor(url) {
        this.url = url;
        this.canvas.style.backgroundColor = "#000";
        this.canvas.style.width = this.canvas_size.width + "px";
        this.canvas.style.height = this.canvas_size.height + "px";
        this.canvas.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;
        this.canvas.style.gridTemplateRows = `repeat(${this.size}, 1fr)`;

        const tt = (parseInt(this.size) ** 2);
        for(let i = 0; i < tt; i++) {
            console.log(i);
            this.canvas.append(document.createElement('span'));
        }

        let x = 0;
        let y = 0;

        [...this.canvas.querySelectorAll('span')].forEach((span, index) => {
            span.style.backgroundImage = `url('${this.url}')`;
            span.style.backgroundSize = `${this.canvas.width}px ${this.canvas.height}px`;
            /* Set backgroundposition */
        })
    }

    generate() {

    }

}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#start-game').addEventListener('click', Puzzle.startGame, false);

    document.querySelector('#resolve').addEventListener('click', Puzzle.resolve, false);
}, false)


