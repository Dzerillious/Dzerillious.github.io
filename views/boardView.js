class BoardView {
    constructor(gameView) {
        this.name = "board";
        this.gameView = gameView;
        this.tiles = new Array();

        var indexes = this.RandomIndexes(options.cardCount);
        for (var i = 0; i < indexes.length; i++) {
            this.tiles.push(new TileView(this, indexes[i]));
        } 
    }

    InitializeComponents() {
        this.body = this.CreateBody();
        for (var tile of this.tiles)
            tile.InitializeComponents();
    }

    CreateBody() {
        const body = Create("div", this.name, "body");        
        body.style.width = 170 * options.columns;
        this.gameView.body.appendChild(body);
        return body;
    }

    RandomIndexes(count) {
        var indexes = new Array();
        for (var i = 0; i < count; i++) {
            indexes.push(i);
        }
        this.Shuffle(indexes)
        return indexes;
    }

    Shuffle(array) {
        for(var i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
}